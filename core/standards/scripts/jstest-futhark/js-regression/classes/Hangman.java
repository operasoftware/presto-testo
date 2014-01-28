import java.swing.*;
import java.awt.*;
import java.applet.*;
import java.io.*;
import java.net.*;

public class Hangman extends java.applet.Applet implements Runnable {
    
    final int maxTries = 5;

    final int maxWordLen = 20;

    char secretWord[];

    int secretWordLen;

    char wrongLetters[];

    int wrongLettersCount;

    char word[];

    int wordLen;
    Font wordFont;
    FontMetrics wordFontMetrics;

    Image hangImages[];
    final int hangImagesWidth = 39;
    final int hangImagesHeight = 58;
    
    Thread danceThread;

    Image danceImages[];
    private int danceImageWidths[] = { 70, 85, 87, 90, 87, 85, 70 };

    int danceHeight = 68;

    int danceImagesLen = 0;

    private int danceImageOffsets[] = { 8, 0, 0, 8, 18, 21, 27 };

    private int danceSequence[] = { 3, 4, 5, 6, 6, 5, 6, 6, 5, 4, 3, 
            2, 1, 0, 0, 1, 2, 2, 1, 0, 0, 1, 2 };

    int danceSequenceNum = -1;

    int danceX = 0;
    
    int danceDirection = 1;

    AudioClip danceMusic;

    public void init() {
        int i;

	danceMusic = getAudioClip(getCodeBase(), "rsrc/dance.au");
	danceImages = new Image[40];

	for (i = 1; i < 8; i++) {
	    Image im = getImage(getCodeBase(), "rsrc/dancing-duke/T" + i + ".gif");

	    if (im == null) {
		break;
	    }
	    danceImages[danceImagesLen++] = im;
        }

        hangImages = new Image[maxTries];
        for (i=0; i<maxTries; i++) {
	    hangImages[i] = getImage(getCodeBase(), "rsrc/hanging-duke/h"+(i+1)+".gif");
        }

        wrongLettersCount = 0;
        wrongLetters = new char[maxTries];

        secretWordLen = 0;
        secretWord = new char[maxWordLen];

        word = new char[maxWordLen];
        
        wordFont = new java.awt.Font("Courier", Font.BOLD, 24);
	wordFontMetrics = getFontMetrics(wordFont);

	resize((maxWordLen+1) * wordFontMetrics.charWidth('M') + maxWordLen * 3,
            hangImagesHeight * 2 + wordFontMetrics.getHeight());
    }

    public void paint(Graphics g) {
        int imageW = hangImagesWidth;
        int imageH = hangImagesHeight;
        int baseH = 10;
        int baseW = 30;
        Font font;
	FontMetrics fontMetrics;
        int i, x, y;

        g.drawLine(baseW/2, 0, baseW/2, 2*imageH - baseH/2);
        g.drawLine(baseW/2, 0, baseW+imageW/2, 0);

        g.drawLine(baseW+imageW/2, 0, baseW+imageW/2, imageH/3);
        g.fillRect(0, 2*imageH-baseH, baseW, baseH);

        font = new java.awt.Font("Courier", Font.PLAIN, 15);
	fontMetrics = getFontMetrics(font);
        x = imageW + baseW;
        y = fontMetrics.getHeight();
	g.setFont(font);
	g.setColor(Color.red);
        for (i=0; i<wrongLettersCount; i++) {
            g.drawChars(wrongLetters, i, 1, x, y);
            x += fontMetrics.charWidth(wrongLetters[i]) 
		+ fontMetrics.charWidth(' ');
        }

        if (secretWordLen > 0) {
	    int Mwidth = wordFontMetrics.charWidth('M');
	    int Mheight = wordFontMetrics.getHeight();
	    g.setFont(wordFont);
	    g.setColor(Color.black);
	    x = 0;
	    y = size().height - 1;
	    for (i=0; i<secretWordLen; i++) {
		g.drawLine(x, y, x + Mwidth, y);
		x += Mwidth + 3;
	    }

	    x = 0;
	    y = size().height - 3;
            g.setColor(Color.blue);
	    for (i=0; i<secretWordLen; i++) {
		if (word[i] != 0) {
		    g.drawChars(word, i, 1, x, y);
		}
		x += Mwidth + 3;
	    }
	    
            if (wordLen < secretWordLen && wrongLettersCount > 0) {
		g.drawImage(hangImages[wrongLettersCount-1], 
                    baseW, imageH/3, this);
	    }
        }
    }

    public void update(Graphics g) {
	if (wordLen == 0) {
	    g.clearRect(0, 0, size().width, size().height);
            paint(g);
	} else if (wordLen == secretWordLen) {
            if (danceSequenceNum < 0) {
		g.clearRect(0, 0, size().width, size().height);
		paint(g);
		danceSequenceNum = 0;
	    }
            updateDancingDuke(g);
        } else {
            paint(g);
        }
    }

    void updateDancingDuke(Graphics g) {
        int baseW = 30;
        int imageH = hangImagesHeight;
	int danceImageNum = danceSequence[danceSequenceNum];
	
	g.clearRect(danceX+baseW, imageH*2 - danceHeight, 
            danceImageOffsets[danceImageNum]+danceImageWidths[danceImageNum], 
            danceHeight);

	danceX += danceDirection;
	if (danceX < 0) {
	    danceX = danceDirection = (int)Math.floor(Math.random() * 12) + 5;
	} else if (danceX + baseW > size().width / 2) {
	    danceDirection *= -1;
	} else if (Math.random() > .9f) {
	    danceDirection *= -1;
	}
	danceSequenceNum++;
	if (danceSequenceNum >= danceSequence.length) {
	    danceSequenceNum = 0;
        }

	danceImageNum = danceSequence[danceSequenceNum];
	if ((danceImageNum < danceImagesLen) && (danceImages[danceImageNum] != null)) {
	    g.drawImage(danceImages[danceImageNum], 
		danceX+baseW+danceImageOffsets[danceImageNum], 
		imageH*2 - danceHeight, this);
	}
    }

    public boolean keyDown(java.awt.Event evt, int key) {
        int i;
        boolean found = false;

        if (secretWordLen == wordLen || wrongLettersCount == maxTries) {
            newGame();
            return true;
        }

        if (key < 'a' || key > 'z') {
	    play(getCodeBase(), "rsrc/beep.au");
            return true;    
        }
        for (i=0; i<secretWordLen; i++) {
            if (key == word[i]) {
                found = true;
		play(getCodeBase(), "rsrc/ding.au");
                return true;
            }
        }
        if (!found) {
	    for (i=0; i<maxTries; i++) {
		if (key == wrongLetters[i]) {
		    found = true;
		    play(getCodeBase(), "rsrc/ding.au");
		    return true;
		}
            }
        }
        if (!found) {
            for (i=0; i<secretWordLen; i++) {
                if (key == secretWord[i]) {
                    word[i] = (char)key;
                    wordLen++;
                    found = true;
                }
            }
            if (found) {
                if (wordLen == secretWordLen) {
		    play(getCodeBase(), "rsrc/whoopy.au");
                    startDukeDancing();
		} else {
		    play(getCodeBase(), "rsrc/ah.au");
                }
            }
        }
        if (!found) {
	    if (wrongLettersCount < wrongLetters.length) {
		wrongLetters[wrongLettersCount++] = (char)key;
                if (wrongLettersCount < maxTries) {
		    play(getCodeBase(), "rsrc/ooh.au");
                } else {
                    for (i=0; i<secretWordLen; i++) {
                        word[i] = secretWord[i];
                    }
		    play(getCodeBase(), "rsrc/scream.au");
                }
            }
        }
        if (wordLen == secretWordLen) {
            danceSequenceNum = -1;
        }
        repaint();
	return true;
    }

    
    public boolean mouseDown(java.awt.Event evt, int x, int y) {
        int i;

        requestFocus();

        if (secretWordLen > 0 && 
           (secretWordLen == wordLen || wrongLettersCount == maxTries)) {
	    newGame();
        } else {
	    play(getCodeBase(), "rsrc/beep.au");
        }
	return true;
    }

    public void newGame() {
        int i;

        danceThread = null;

        String s = wordlist[(int)Math.floor(Math.random() * wordlist.length)];
        
        secretWordLen = Math.min(s.length(), maxWordLen);
        for (i=0; i<secretWordLen; i++) {
            secretWord[i] = s.charAt(i);
        }

        for (i=0; i<maxWordLen; i++) {
            word[i] = 0;
        }
        wordLen = 0;
        for (i=0; i<maxTries; i++) {
            wrongLetters[i] = 0;
        }
        wrongLettersCount = 0;
	
        repaint();
    }

    public void start() {
	requestFocus();
        if (secretWordLen == wordLen || wrongLettersCount == maxTries) {
            newGame();
        }
    }

    public void stop() {
	danceThread = null;
    }

    public void run() {
	Thread.currentThread().setPriority(Thread.MIN_PRIORITY);
	
	danceMusic.loop();

	while (size().width > 0 && size().height > 0 && danceThread != null) {
	    repaint();
	    try {Thread.sleep(100);} catch (InterruptedException e){}
	}

	danceMusic.stop();
    }

    private void startDukeDancing () {
	if (danceThread == null) {
	    danceThread = new Thread(this);
	    danceThread.start();
	}
    }

    public String getAppletInfo() {
       return "Author: Patrick Chan\nVersion 1.3";
    }


    String wordlist[] = {
        "abstraction",
        "ambiguous",
        "arithmetic",
        "backslash",
        "bitmap",
        "circumstance",
        "combination",
        "consequently",
        "consortium",
        "decrementing",
        "dependency",
        "disambiguate",
        "dynamic",
        "encapsulation",
        "equivalent",
        "expression",
        "facilitate",
        "fragment",
        "hexadecimal",
        "implementation",
        "indistinguishable",
        "inheritance",
        "internet",
        "java",
        "localization",
        "microprocessor",
        "navigation",
	"opera",
        "optimization",
        "parameter",
        "patrick",
        "pickle",
        "polymorphic",
        "rigorously",
        "simultaneously",
        "specification",
        "structure",
        "lexical",
        "likewise",
        "management",
        "manipulate",
        "mathematics",
        "hotjava",
        "vertex",
        "unsigned",
        "traditional"};
}
