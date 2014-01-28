/* This code is slightly modified from:
   Bidi.cpp - version 24
   Reference implementation for Unicode Bidirectional Algorithm
*/

#include <stdio.h>

#define ASSERT(x) if (!(x)) fprintf(stdout, "assert failed: %s\n", #x); else ;
#define TCHAR	char
#ifndef BOOL
#define BOOL char
#define FALSE 0
#define TRUE  1
#endif

/*------------------------------------------------------------------------
  File: Bidi.C
    
  Description
  -----------

  Sample Implementation of the Unicode Bidirectional Algorithm as it
  was revised by Revision 5 of the Uniode Technical Report # 9
  (1999-8-17)

  This implementation is organized into several passes, each implemen-
  ting one or more of the rules of the Unicode Bidi Algorithm. The
  resolution of Weak Types and of Neutrals each use a state table
  approach.

  Both a printf based interface and a Windows DlgProc are provided for
  interactive testing.

  The file biditest.cpp contains hooks to link to a stress harness
  comparing this implementation to a Java based implementation. This
  harness was used to verify that the two implementations produce
  identical results.

  Implementation Note
  -------------------

  NOTE: The Unicode Birdirectional Algorithm removes all explicit
  formatting codes in rule X9, but states that this can be
  simulated by conformant implementations. This implementation
  attempts to demonstrate such a simulation

  To demonstrate this, the current implementation does the
  following:

  in resolveExplicit()
  - change LRE, LRO, RLE, RLO, PDF to BN
  - assign nested levels to BN

  in resolveWeak and resolveNeutrals
  - assign L and R to BN's where they exist in place of
  sor and eor by changing the last BN in front of a
  level change to a strong type
  - skip over BN's for the purpose of determining actions
  - include BN in the count of deferred runs
  which will resolve some of them to EN, AN and N

  in resolveWhiteSpace
  - set the level of any surviving BN to the base level,
  or the level of the preceding character
  - include LRE,LRO, RLE, RLO, PDF and BN in the count
  whitespace to be reset

  This will result in the same order for non-BN characters as
  if the BN characters had been removed.

  The clean() function can be used to remove boundary marks for
  verification purposes.

  Notation
  --------
  Pointer variables generally start with the letter p
  Counter variables generally start with the letter c
  Index variables generally start with the letter i
  Boolean variables generally start with the letter f

  The enumerated bidirectional types have the same name as in the
  description for the Unicode Bidirectional Algorithm

  Update History:
  --------------
  - clean version for publication
  - new commandline interface
		
  - Last Revised 11-4-99

  Disclaimer and legal rights
  ---------------------------

  NOTE: This c file is directly based on the C++ file, but has not 
  been exhaustively tested for compliance with the bidi 
  algorithm. We think that the only effect the changes 
  had was to comply with the differences in C++ vs C 
  syntax, but don't take our word for it.

  This file contains bugs. All representations to the contrary are
  void.

  Source code in this file and the header file may be distributed free of 
  charge by anyone, as long as full credit is given and any and all 
  liabilities are assumed by the recipient.

  Written by: Asmus Freytag
  C++ and Windows dependencies removed, and
  command line interface added by: Rick McGowan

  Copyright (C) 1999, ASMUS, Inc.     All Rights Reserved
  ------------------------------------------------------------------------*/


// === HELPER FUNCTIONS AND DECLARATIONS =================================

#define odd(x) ((x) & 1)

/*------------------------------------------------------------------------
  Bidirectional Character Types
	
  as defined by the Unicode Bidirectional Algorithm Table 3-7.

  Note:
	 
  The list of bidirectional character types here is not grouped the
  same way as the table 3-7, since the numeric values for the types
  are chosen to keep the state and action tables compact.
  ------------------------------------------------------------------------*/
enum
{
    // input types
	// ON MUST be zero, code relies on ON = N = 0
    ON = 0,  // Other Neutral 
    L,       // Left Letter
    R,       // Right Letter
    AN,      // Arabic Number
    EN,      // European Number
    AL,      // Arabic Letter (Right-to-left)
    NSM,     // Non-spacing Mark
    CS,      // Common Separator
    ES,      // European Separator
    ET,      // European Terminator (post/prefix e.g. $ and %)
   
	// resolved types
    BN,      // Boundary neutral (type of RLE etc after explicit levels)
   
	// input types,
    S,       // Segment Separator (TAB)		// used only in L1
    WS,      // White space					// used only in L1
    B,       // Paragraph Separator (aka as PS)
   
	// types for explicit controls
    RLO,     // these are used only in X1-X9
    RLE,
    LRO,
    LRE,
    PDF,

	// resolved types, also resolved directions
    N = ON,  // alias, where ON, WS and S are treated the same
};

/*----------------------------------------------------------------------
  The following array maps character codes to types for the purpose of
  this sample implementation. The legend string gives a human readable
  explanation of the pseudo alphabet.

  For simplicity, characters entered by buttons are given a 1:1 mapping
  between their type and pseudo character value. Pseudo characters that
  can be typed from the keyboard are explained in the legend string.

  Use the Unicode Character Database for the real values in real use.
  ---------------------------------------------------------------------*/

#define LRM 4
#define RLM 5
#define LS 0x13

int TypesFromChar[]  =
{
//0   1   2   3   4   5   6   7   8   9   a   b   c   d   e   f
	ON, ON, ON, ON,  L,  R, ON, ON, ON, ON, ON, ON, ON, B, RLO,RLE, /*00-0f*/
	LRO,LRE,PDF,WS, ON, ON, ON, ON, ON, ON, ON, ON, ON, ON, ON, ON, /*10-1f*/

	WS, ON, ON, ON, ET, ON, ON, ON, ON, ON, ON, ET, CS, ON, ES, ES, /*20-2f*/
	EN, EN, EN, EN, EN, EN, AN, AN, AN, AN, CS, ON, ON, ON, ON, ON, /*30-3f*/
	R, AL, AL, AL, AL, AL, AL,  R,  R,  R,  R,  R,  R,  R,  R,  R, /*40-4f*/
	R,  R,  R,  R,  R,  R,  R,  R,  R,  R,  R, ON,  B, ON, ON, ON, /*50-5f*/
	NSM, L,  L,  L,  L,  L,  L,  L,  L,  L,  L,  L,  L,  L,  L,  L, /*60-6f*/
	L,  L,  L,  L,  L,  L,  L,  L,  L,  L,  L, ON,  S, ON, ON, ON, /*70-7f*/
};

// WS, LS and S are not explicitly needed except for L1. Therefore this
// Table conflates ON, S, WS, and LS to N, all others unchanged
int NTypes[] = {   
    N,      // ON,   
    L,      // L,    
    R,      // R,    
    AN,     // AN,
    EN,     // EN,
    AL,     // AL
    NSM,    // NSM
    CS,     // CS
    ES,     // ES
    ET,     // ET
    BN,     // BN
    N,      // S 
    N,      // WS
    B,      // B
    RLO,    // RLO
    RLE,    // RLE
    LRO,    // LRO
    LRE,    // LRE
    PDF,    // PDF
    ON,     // LS
};

int ClassFromChN(TCHAR ch) {
    ASSERT(ch < 0x7f && ch >= 0);
    return NTypes[TypesFromChar[ch]];
}

int ClassFromChWS(TCHAR ch) {
    ASSERT(ch < 0x7f && ch >= 0);
    return TypesFromChar[ch];
}

// === DISPLAY SUPPORT =================================================


enum    // Display character codes    
{		
	RIGHT = '<',			// rtl arrow		
	LEFT = '>',				// ltr arrow		
	PUSH = '+',				// dn arrow		
	POP = '-',				// up arrow		
	LSEP =  '=',			// double dagger		
	NEUTRAL = ' ',			// rtl/ltr dbl headed arrow		
	ALPHA = 'a',    
};
// display support:
TCHAR CharFromTypes[] =
{
    NEUTRAL,    // ON,
    LEFT,       // L,
    RIGHT,      // R,
    '9',	// AN,
    '1',	// EN,
    ALPHA,      // AL
    '@',	// NSM
    '.',	// CS
    ',',	// ES
    '$',	// ET
    ':',	// BN
    'X',	// S 
    '_',	// WS
    'B',	// B
    PUSH,       // RLO
    PUSH,       // RLE
    PUSH,       // LRO
    PUSH,       // LRE
    POP,	// PDF
	LSEP,		// LS
		     
};


// This works only for testing
// a full implementation would need 61 levels....
int CharFromLevel[] =
{
    '0', '1', '2', '3', '4',
    '5', '6', '7', '8', '9',   
    'A', 'B', 'C', 'D', 'E',
    'F', 'X', 'Y', 'Z'      // overhang levels
};

// === HELPER FUNCTIONS ================================================

// reverse cch characters
void reverse(TCHAR *psz, int cch)
{
    int ich;
    TCHAR chTemp;

    for (ich = 0; ich < --cch; ich++) {
		chTemp = psz[ich];
		psz[ich] = psz[cch];
		psz[cch] = chTemp;
    }
}

// Set a run of cval values at locations all prior to, but not including
// iStart, to the new value nval.
void SetDeferredRun(int *pval, int cval, int iStart, int nval) {
    int i;
    for (i = iStart - 1; i >= iStart - cval; i--) {
		pval[i] = nval;
    }
}

// === ASSIGNING BIDI CLASSES ============================================

/*------------------------------------------------------------------------
  Function: classify
   
  Determines the character classes for all following
  passes of the algorithm

  Input: Text string
  Character count
  Whether to report types as WS, ON, S or as N (FALSE)

  Output: Array of directional classes   
  ------------------------------------------------------------------------*/

int classify(const TCHAR *pszText, int * pcls,  int cch, BOOL fWS) {
    int ich;
    if (fWS) {
		for (ich = 0; ich < cch; ich++) {
			pcls[ich] = ClassFromChWS(pszText[ich]);
		}
		return ich;
    } else {
		for (ich = 0; ich < cch; ich++) {
			pcls[ich] = ClassFromChN(pszText[ich]);
		}
		return ich;
    }
}

// === THE PARAGRAPH LEVEL ===============================================

/*------------------------------------------------------------------------
  Function: resolveParagraphs
   
  Resolves the input strings into blocks over which the algorithm
  is then applied.

  Implements Rule P1 of the Unicode Bidi Algorithm

  Input: Text string
  Character count

  Output: revised character count

  Note:	This is a very simplistic function. In effect it restricts
  the action of the algorithm to the first paragraph in the input
  where a paragraph ends at the end of the first block separator
  or at the end of the input text.

  ------------------------------------------------------------------------*/

int resolveParagraphs(int * types, int cch) {
    int ich;
    // skip characters not of type B
    for (ich = 0; ich < cch && types[ich] != B; ich++)
	    ;
    // stop after first B, make it a BN for use in the next steps
    if (ich < cch && types[ich] == B)
	    types[ich++] = BN;
    return ich;
}

/*------------------------------------------------------------------------
  Function: baseLevel
   
  Determines the base level

  Implements rule P2 of the Unicode Bidi Algorithm.

  Input: Array of directional classes
  Character count

  Note: Ignores explicit embeddings
  ------------------------------------------------------------------------*/

int baseLevel(const int * pcls,  int cch) {
    int ich;
    for (ich = 0; ich < cch; ich++) {
		switch (pcls[ich]) {
			// strong left
		case L:
			return 0;
			break;

			// strong right
		case R:
		case AL:
			return 1;
			break;
		}
    }
    return 0;
}

//====== RESOLVE EXPLICIT ================================================

int GreaterEven(int i) {
    return odd(i) ? i + 1 : i + 2;
}

int GreaterOdd(int i) {
    return odd(i) ? i + 2 : i + 1;
}

int EmbeddingDirection(int level) {
    return odd(level) ? R : L;
}


/*------------------------------------------------------------------------
  Function: resolveExplicit
   
  Recursively resolves explicit embedding levels and overrides.
  Implements rules X1-X9, of the Unicode Bidirectional Algorithm.

  Input: Base embedding level and direction
  Character count

  Output: Array of embedding levels
	   
  In/Out: Array of direction classes


  Note: The function uses two simple counters to keep track of
  matching explicit codes and PDF. Use the default argument for
  the outermost call. The nesting counter counts the recursion
  depth and not the embedding level.
  ------------------------------------------------------------------------*/

const int MAX_LEVEL = 61; // the real value

int resolveExplicit(int level, int dir, int * pcls, int * plevel, int cch,  int nNest) {
    // always called with a valid nesting level
    // nesting levels are != embedding levels
    int nLastValid = nNest;
    int ich, cls;

    // check input values
    ASSERT(nNest >= 0 && level >= 0 && level <= MAX_LEVEL);

    // process the text
    for (ich = 0; ich < cch; ich++) {
		cls = pcls[ich];
		switch (cls) {
		case LRO:
		case LRE:
			nNest++;
			if (GreaterEven(level) <= MAX_LEVEL) {
				plevel[ich] = GreaterEven(level);
				pcls[ich] = BN;
				ich += resolveExplicit(plevel[ich], (cls == LRE ? N : L), &pcls[ich+1], &plevel[ich+1], cch - (ich+1), nNest);
				nNest--;
				continue;
			}
			cls = pcls[ich] = BN;
			break;

		case RLO:
		case RLE:
			nNest++;
			if (GreaterOdd(level) <= MAX_LEVEL) {
				plevel[ich] = GreaterOdd(level);
				pcls[ich] = BN;
				ich += resolveExplicit(plevel[ich], (cls == RLE ? N : R), &pcls[ich+1], &plevel[ich+1], cch - (ich+1), nNest);
				nNest--;
				continue;
			}
			cls = pcls[ich] = BN;
			break;

		case PDF:
			cls = pcls[ich] = BN;
			if (nNest) {
				if (nLastValid < nNest) {
					nNest--;
				} else {
					cch = ich; // break the loop, but complete body
				}
			}
		}

		// Apply the override
		if (dir != N) {
			cls = dir;
		}
		plevel[ich] = level;
		if (pcls[ich] != BN) {
			pcls[ich] = cls;
		}
    }

    return ich;
}

// === RESOLVE WEAK TYPES ================================================

enum // possible states
{
	xa,		//  arabic letter	   
	xr,		//  right leter			 
	xl,		//  left letter			 
    					      
	ao,		//  arabic lett. foll by ON 
	ro,		//  right lett. foll by ON	 
	lo,		//  left lett. foll by ON	 
    					      
	rt,		//  ET following R	 
	lt,		//  ET following L		 
    					      
	cn,		//  EN, AN following AL     
	ra,		//  arabic number foll R   
	re,		//  european number foll R 
	la,		//  arabic number foll L   
	le,		//  european number foll L 
    					      
	ac,		//  CS following cn	 
	rc,		//  CS following ra		 
	rs,		//  CS,ES following re      
	lc,		//  CS following la		 
	ls,		//  CS,ES following le		 

	ret,	//  ET following re
	let,	//  ET following le
} ;

int stateWeak[20][10] = {
    //  N,  L,  R   AN, EN, AL,NSM, CS, ES, ET, 
	/*xa*/  ao, xl, xr, cn, cn, xa, xa, ao, ao, ao, /* arabic letter	  */   
	/*xr*/  ro, xl, xr, ra, re, xa, xr, ro, ro, rt, /* right leter	    */   
	/*xl*/  lo, xl, xr, la, le, xa, xl, lo, lo, lt, /* left letter	    */
				 
	/*ao*/  ao, xl, xr, cn, cn, xa, ao, ao, ao, ao, /* arabic lett. foll by ON*/   
	/*ro*/  ro, xl, xr, ra, re, xa, ro, ro, ro, rt, /* right lett. foll by ON */   
	/*lo*/  lo, xl, xr, la, le, xa, lo, lo, lo, lt, /* left lett. foll by ON  */   
				 
	/*rt*/  ro, xl, xr, ra, re, xa, rt, ro, ro, rt, /* ET following R	 */     
	/*lt*/  lo, xl, xr, la, le, xa, lt, lo, lo, lt, /* ET following L	 */
				 
	/*cn*/  ao, xl, xr, cn, cn, xa, cn, ac, ao, ao, /* EN, AN following AL    */
	/*ra*/  ro, xl, xr, ra, re, xa, ra, rc, ro, rt, /* arabic number foll R   */
	/*re*/  ro, xl, xr, ra, re, xa, re, rs, rs,ret, /* european number foll R */     
	/*la*/  lo, xl, xr, la, le, xa, la, lc, lo, lt, /* arabic number foll L   */   
	/*le*/  lo, xl, xr, la, le, xa, le, ls, ls,let, /* european number foll L */     
				 
	/*ac*/  ao, xl, xr, cn, cn, xa, ao, ao, ao, ao, /* CS following cn	*/   
	/*rc*/  ro, xl, xr, ra, re, xa, ro, ro, ro, rt, /* CS following ra	*/
	/*rs*/  ro, xl, xr, ra, re, xa, ro, ro, ro, rt, /* CS,ES following re     */     
	/*lc*/  lo, xl, xr, la, le, xa, lo, lo, lo, lt, /* CS following la	*/   
	/*ls*/  lo, xl, xr, la, le, xa, lo, lo, lo, lt, /* CS,ES following le     */   

	/*ret*/ ro, xl, xr, ra, re, xa,ret, ro, ro,ret, /* ET following re	*/     
	/*let*/ lo, xl, xr, la, le, xa,let, lo, lo,let  /* ET following le	*/
								 
};					     

enum { 	// possible actions
	// primitives
    IX = 0x100,					// increment
    XX = 0xF,					// no-op

	// actions
    xxx = (XX << 4) + XX,		// no-op
    xIx = IX + xxx,			// increment run
    xxN = (XX << 4) + ON,		// set current to N
    xxE = (XX << 4) + EN,		// set current to EN
    xxA = (XX << 4) + AN,		// set current to AN
    xxR = (XX << 4) + R,		// set current to R
    xxL = (XX << 4) + L,		// set current to L
    Nxx = (ON << 4) + 0xF,		// set run to neutral
    Axx = (AN << 4) + 0xF,		// set run to AN
    ExE = (EN << 4) + EN,		// set run to EN, set current to EN
    NIx = (ON << 4) + 0xF + IX, // set run to N, increment
    NxN = (ON << 4) + ON,		// set run to N, set current to N
    NxR = (ON << 4) + R,		// set run to N, set current to R
    NxE = (ON << 4) + EN,		// set run to N, set current to EN

    AxA = (AN << 4) + AN,		// set run to AN, set current to AN
    NxL = (ON << 4) + L,		// set run to N, set current to L
    LxL = (L << 4) + L,			// set run to L, set current to L
};


int actionWeak[20][10] = {					      
    //  N,   L,   R    AN,  EN,  AL, NSM,  CS,  ES,  ET, 
	/*xa*/ xxx, xxx, xxx, xxx, xxA, xxR, xxR, xxN, xxN, xxN, /* arabic letter	   */   
	/*xr*/ xxx, xxx, xxx, xxx, xxE, xxR, xxR, xxN, xxN, xIx, /* right leter	     */   
	/*xl*/ xxx, xxx, xxx, xxx, xxL, xxR, xxL, xxN, xxN, xIx, /* left letter	     */

	/*ao*/ xxx, xxx, xxx, xxx, xxA, xxR, xxN, xxN, xxN, xxN, /* arabic lett. foll by ON */   
	/*ro*/ xxx, xxx, xxx, xxx, xxE, xxR, xxN, xxN, xxN, xIx, /* right lett. foll by ON  */   
	/*lo*/ xxx, xxx, xxx, xxx, xxL, xxR, xxN, xxN, xxN, xIx, /* left lett. foll by ON   */   

	/*rt*/ Nxx, Nxx, Nxx, Nxx, ExE, NxR, xIx, NxN, NxN, xIx, /* ET following R	 */     
	/*lt*/ Nxx, Nxx, Nxx, Nxx, LxL, NxR, xIx, NxN, NxN, xIx, /* ET following L	 */

	/*cn*/ xxx, xxx, xxx, xxx, xxA, xxR, xxA, xIx, xxN, xxN, /* EN, AN following  AL    */
	/*ra*/ xxx, xxx, xxx, xxx, xxE, xxR, xxA, xIx, xxN, xIx, /* arabic number foll R   */
	/*re*/ xxx, xxx, xxx, xxx, xxE, xxR, xxE, xIx, xIx, xxE, /* european number foll R */     
	/*la*/ xxx, xxx, xxx, xxx, xxL, xxR, xxA, xIx, xxN, xIx, /* arabic number foll L   */   
	/*le*/ xxx, xxx, xxx, xxx, xxL, xxR, xxL, xIx, xIx, xxL, /* european number foll L */     

	/*ac*/ Nxx, Nxx, Nxx, Axx, AxA, NxR, NxN, NxN, NxN, NxN, /* CS following cn	 */   
	/*rc*/ Nxx, Nxx, Nxx, Axx, NxE, NxR, NxN, NxN, NxN, NIx, /* CS following ra	 */
	/*rs*/ Nxx, Nxx, Nxx, Nxx, ExE, NxR, NxN, NxN, NxN, NIx, /* CS,ES following re      */     
	/*lc*/ Nxx, Nxx, Nxx, Axx, NxL, NxR, NxN, NxN, NxN, NIx, /* CS following la	 */   
	/*ls*/ Nxx, Nxx, Nxx, Nxx, LxL, NxR, NxN, NxN, NxN, NIx, /* CS,ES following le      */   

	/*ret*/xxx, xxx, xxx, xxx, xxE, xxR, xxE, xxN, xxN, xxE, /* ET following re  */     
	/*let*/xxx, xxx, xxx, xxx, xxL, xxR, xxL, xxN, xxN, xxL  /* ET following le  */     
};
							     
static inline int GetDeferredType(int action) {
    return (action >> 4) & 0xF;
}

static inline int GetResolvedType(int action) {
    return action & 0xF;
}

/* Note on action table:

States can be of two kinds:
- Immediate Resolution State, where each input token
is resolved as soon as it is seen. These states havve
only single action codes (xxN) or the no-op (xxx)
for static input tokens.
- Deferred Resolution State, where input tokens either
either extend the run (xIx) or resolve its Type (e.g. Nxx).

Input classes are of three kinds
- Static Input Token, where the class of the token remains
unchanged on output (AN, L, N, R)
- Replaced Input Token, where the class of the token is
always replaced on output (AL, BN, NSM, CS, ES, ET)
- Conditional Input Token, where the class of the token is
changed on output in some, but not all, cases (EN)

Where tokens are subject to change, a double action
(e.g. NxA, or NxN) is _required_ after deferred states, 
resolving both the deferred state and changing the current token.

These properties of the table are verified by assertions below.
This code is needed only during debugging and maintenance
*/

/*------------------------------------------------------------------------
  Function: resolveWeak
   
  Resolves the directionality of numeric and other weak character types

  Implements rules W1-W7 of the Unicode Bidirectional Algorithm.

  Input: Array of embedding levels
  Character count

  In/Out: Array of directional classes   
   
  Note: On input only these directional classes are expected
  AL, HL, R, L,  ON, BN, NSM, AN, EN, ES, ET, CS,
  ------------------------------------------------------------------------*/

	void resolveWeak(int baselevel, int *pcls, int *plevel, int cch) {
    int state = odd(baselevel) ? xr : xl;
    int cls, ich, action;
    int level = baselevel;
    int cchRun = 0;
    int clsRun, clsNew;

    for (ich = 0; ich < cch; ich++) {
		// ignore boundary neutrals
		if (pcls[ich] == BN) {
			// must flatten levels unless at a level change;
			plevel[ich] = level;

			// lookahead for level changes
			if (ich + 1 == cch && level != baselevel) {
				// have to fixup last BN before end of the loop, since
				// its fix-upped value will be needed below the assert
				pcls[ich] = EmbeddingDirection(level);
			} else if (ich + 1 < cch && level != plevel[ich+1] && pcls[ich+1] != BN) {
				// fixup LAST BN in front / after a level run to make
				// it act like the SOR/EOR in rule X10
				int newlevel = plevel[ich+1];
				if (level > newlevel) {
					newlevel = level;
				}
				plevel[ich] = newlevel;

				// must match assigned level
				pcls[ich] = EmbeddingDirection(newlevel);
				level = plevel[ich+1];
			} else {
				// don't interrupt runs
				if (cchRun)  {
					cchRun++;
				}
				continue;
			}
		}

		ASSERT(pcls[ich] <= BN);
		cls = pcls[ich];

		action = actionWeak[state][cls];

		// resolve the directionality for deferred runs
		clsRun = GetDeferredType(action);
		if (clsRun != XX) {
			SetDeferredRun(pcls, cchRun, ich, clsRun);
			cchRun = 0;
		}

		// resolve the directionality class at the current location
		clsNew = GetResolvedType(action);
		if (clsNew != XX) {
			pcls[ich] = clsNew;
		}
		// increment a deferred run
		if (IX & action) {
			cchRun++;
		}
		state = stateWeak[state][cls];
    }
   
    // resolve any deferred runs
    // use the direction of the current level to emulate PDF
    cls = EmbeddingDirection(level);

    // resolve the directionality for deferred runs
    clsRun = GetDeferredType(actionWeak[state][cls]);
    if (clsRun != XX) {
		SetDeferredRun(pcls, cchRun, ich, clsRun);
    }
	}

// === RESOLVE NEUTRAL TYPES ==============================================

// action values
enum {
    // action to resolve previous input
    nL = L,	 // resolve EN to L
    En = 3 << 4,    // resolve neutrals run to embedding level direction
    Rn = R << 4,    // resolve neutrals run to strong right
    Ln = L << 4,    // resolved neutrals run to strong left
    In = (1<<8),    // increment count of deferred neutrals
    LnL = (1<<4)+L, // set run and EN to L
};

int GetDeferredNeutrals(int action, int level) {
    action = (action >> 4) & 0xF;
    if (action == (En >> 4)) {
		return EmbeddingDirection(level);
    } else {
		return action;
    }
}

int GetResolvedNeutrals(int action) {
    action = action & 0xF;
    if (action == In) {
		return 0;
    } else {
		return action;
    }
}

// state values
enum {
    // new temporary class
    r,  // R and characters resolved to R
    l,  // L and characters resolved to L
    rn, // N preceded by right
    ln, // N preceded by left
    a,  // AN preceded by left (the abbrev 'la' is used up above)
    na, // N preceeded by a
};


/*------------------------------------------------------------------------
  Notes:

  By rule W7, whenever a EN is 'dominated' by an L (including start of
  run with embedding direction = L) it is resolved to, and further treated
  as L.

  This leads to the need for 'a' and 'na' states.
  ------------------------------------------------------------------------*/

int actionNeutrals[6][5] = {
// N,  L,  R, AN, EN, = cls
	// state =		     
	In,  0,  0,  0,  0, // r    right			      
	In,  0,  0,  0,  L, // l    left
	   
	In, En, Rn, Rn, Rn, // rn   N preceded by right			  
	In, Ln, En, En, LnL,// ln   N preceded by left			   
				    
	In,  0,  0,  0,  L, // a   AN preceded by left
	In, En, Rn, Rn, En  // na   N  preceded by a    
};

int stateNeutrals[6][5] = {
//  N, L,  R,  AN, EN = cls
	// state =  
	rn, l,  r,  r,  r,   // r   right					
	ln, l,  r,  a,  l,   // l   left				     
								     
	rn, l,  r,  r,  r,   // rn  N preceded by right		      
	ln, l,  r,  a,  l,   // ln  N preceded by left			
								   
	na, l,  r,  a,  l,   // a  AN preceded by left		      
	na, l,  r,  a,  l    // na  N preceded by la		     
};

/*------------------------------------------------------------------------
  Function: resolveNeutrals
   
  Resolves the directionality of neutral character types.

  Implements rules W7, N1 and N2 of the Unicode Bidi Algorithm.
	
  Input: Array of embedding levels
  Character count
  Baselevel

  In/Out: Array of directional classes   
   
  Note: On input only these directional classes are expected
  R,  L,  N, AN, EN and BN

  W8 resolves a number of ENs to L
  ------------------------------------------------------------------------*/

void resolveNeutrals(int baselevel, int *pcls, const int *plevel, int cch) {  
    // the state at the start of text depends on the base level
    int state = odd(baselevel) ? r : l;
    int cls, ich;
    int cchRun = 0;
    int level = baselevel;
    int action, clsNew, clsRun;

    for (ich = 0; ich < cch; ich++) {
		// ignore boundary neutrals
		if (pcls[ich] == BN) {
			// include in the count for a deferred run
			if (cchRun)
				cchRun++;

			// skip any further processing
			continue;
		}

		ASSERT(pcls[ich] < 5); // "Only N, L, R,  AN, EN are allowed"
		cls = pcls[ich];

		action = actionNeutrals[state][cls];

		// resolve the directionality for deferred runs
		clsRun = GetDeferredNeutrals(action, level);
		if (clsRun != N) {
			SetDeferredRun(pcls, cchRun, ich, clsRun);
			cchRun = 0;
		}

		// resolve the directionality class at the current location
		clsNew = GetResolvedNeutrals(action);
		if (clsNew != N)
			pcls[ich] = clsNew;

		if (In & action)
			cchRun++;

		state = stateNeutrals[state][cls];
		level = plevel[ich];
    }
   
    // resolve any deferred runs
    cls = EmbeddingDirection(level);    // eor has type of current level

    // resolve the directionality for deferred runs
    clsRun = GetDeferredNeutrals(actionNeutrals[state][cls], level);
    if (clsRun != N)
		SetDeferredRun(pcls, cchRun, ich, clsRun);
}

// === RESOLVE IMPLICIT =================================================

/*------------------------------------------------------------------------
  Function: resolveImplicit
   
  Recursively resolves implicit embedding levels.
  Implements rules I1 and I2 of the Unicode Bidirectional Algorithm.

  Input: Array of direction classes
  Character count
  Base level

  In/Out: Array of embedding levels
	   
  Note: levels may exceed 15 on output.
  Accepted subset of direction classes
  R, L, AN, EN
  ------------------------------------------------------------------------*/
int addLevel[2][4] = {
	// L,  R,   AN, EN = cls
	// level =
	/* even */  0,  1,  2,  2,  // EVEN
	/* odd  */  1,  0,  1,  1,  // ODD

};

void resolveImplicit(const int * pcls, int * plevel, int cch) {
    int ich;
    for (ich = 0; ich < cch; ich++) {
	
		// cannot resolve bn here, since some bn were resolved to strong
		// types in resolveWeak. To remove these we need the original
		// types, which are available again in resolveWhiteSpace
		if (pcls[ich] == BN) {
			continue;
		}
		ASSERT(pcls[ich] > 0); // "No Neutrals allowed to survive here."
		ASSERT(pcls[ich] < 5); // "Out of range."
		plevel[ich] += addLevel[odd(plevel[ich])][pcls[ich] - 1];
    }
}

// === REORDER ===========================================================

/*------------------------------------------------------------------------
  Function: resolveLines
   
  Breaks a paragraph into lines

  Input:  Character count
  In/Out: Array of characters
  Array of line break flags

  Returns the count of characters on the first line

  Note: This function only breaks lines at hard line breaks. Other
  line breaks can be passed in. If pbrk[n] is TRUE, then a break
  occurs after the character in pszInput[n]. Breaks before the first
  character are not allowed.
  ------------------------------------------------------------------------*/

int resolveLines(TCHAR *pszInput, BOOL * pbrk, int cch) {
    int ich;
    // skip characters not of type LS
    for(ich = 0; ich < cch; ich++) {
		if (pszInput[ich] == LS || (pbrk && pbrk[ich])) {
			ich++;
			break;
		}
    }

    return ich;
}

/*------------------------------------------------------------------------
  Function: resolveWhiteSpace
   
  Resolves levels for WS and S
  Implements rule L1 of the Unicode bidi Algorithm.

  Input:  Base embedding level
  Character count
  Array of direction classes (for one line of text)

  In/Out: Array of embedding levels (for one line of text)

  Note: this should be applied a line at a time. The default driver
  code supplied in this file assumes a single line of text; for
  a real implementation, cch and the initial pointer values
  would have to be adjusted.
  ------------------------------------------------------------------------*/

void resolveWhitespace(int baselevel, const int *pcls, int *plevel, int cch) {
    int clevel = 0;
    int oldlevel = baselevel;
    int ich;
   
    for (ich = 0; ich < cch; ich++) {
		switch(pcls[ich]) {
		default:
			clevel = 0; // any other character breaks the run
			break;
		case WS:
			clevel++;
			break;

		case RLE:
		case LRE:
		case LRO:
		case RLO:
		case PDF:
		case BN:
			plevel[ich] = oldlevel;
			clevel++;
			break;

		case S:
		case B:
			// reset levels for WS before eot
			SetDeferredRun(plevel, clevel, ich, baselevel);
			clevel = 0;
			plevel[ich] = baselevel;
			break;
		}
		oldlevel = plevel[ich];
    }
    // reset level before eot
    SetDeferredRun(plevel, clevel, ich, baselevel);
}


/*------------------------------------------------------------------------
  Functions: reorder/reorderLevel
   
  Recursively reorders the display string
  "From the highest level down, reverse all characters at that level and
  higher, down to the lowest odd level"

  Implements rule L2 of the Unicode bidi Algorithm.

  Input: Array of embedding levels
  Character count
  Flag enabling reversal (set to FALSE by initial caller)

  In/Out: Text to reorder    
	   
  Note: levels may exceed 15 resp. 61 on input.

  Rule L3 - reorder combining marks is not implemented here
  Rule L4 - glyph mirroring is implemented as a display option below

  Note: this should be applied a line at a time
  -------------------------------------------------------------------------*/

int reorderLevel(int level, TCHAR *pszText, const int * plevel, int cch, BOOL fReverse) {
    int ich;
    // TRUE as soon as first odd level encountered
    fReverse = fReverse || odd(level);

    for (ich = 0; ich < cch; ich++) {
		if (plevel[ich] < level) {
			break;
		} else if (plevel[ich] > level) {
			ich += reorderLevel(level + 1, pszText + ich, plevel + ich, cch - ich, fReverse) - 1;
		}
    }
    if (fReverse) {
		reverse(pszText, ich);
    }
    return ich;
}

int reorder(int baselevel, TCHAR *pszText, const int * plevel, int cch) {
    int ich = 0;

    while (ich < cch) {
		ich += reorderLevel(baselevel, pszText + ich, plevel + ich,  cch - ich, FALSE);
    }
    return ich;
}

// === DISPLAY OPTIONS ================================================

/*-----------------------------------------------------------------------
  Function:	mirror

  Crudely implements rule L4 of the Unicode Bidirectional Algorithm
  Demonstrate mirrored brackets, braces and parens
  

  Input:	Array of levels
  Count of characters

  In/Out:	Array of characters (should be array of glyph ids)

  Note;
  A full implementation would need to substitute mirrored glyphs even
  for characters that are not paired (e.g. integral sign).
  -----------------------------------------------------------------------*/

void mirror(TCHAR *pszInput, const int * plevel, int cch) {
    int ich;
    for (ich = 0; ich < cch; ich ++) {
		if (!odd(plevel[ich]))
			continue;

		if (pszInput[ich] == '[') {
			pszInput[ich] = ']';
		} else if (pszInput[ich] == ']') {
			pszInput[ich] = '[';
		} else if (pszInput[ich] == '{') {
			pszInput[ich] = '}';
		} else if (pszInput[ich] == '}') {
			pszInput[ich] = '{';
		} else if (pszInput[ich] == ')') {
			pszInput[ich] = '(';
		} else if (pszInput[ich] == '(') {
			pszInput[ich] = ')';
		}
    }
}

/*-----------------------------------------------------------------------
  Function: clean

  remove formatting codes   

  In/Out:	Array of characters
  Count of characters

  Note;

  This function can be used to remove formatting codes so the
  ordering of the string can be compared to implementations that
  remove formatting codes. This implementation is limited to the
  pseudo alphabet used for the demo version.

  -----------------------------------------------------------------------*/

int clean(TCHAR *pszInput, int cch) {
    int cchMove = 0;
    int ich;
    for (ich = 0; ich < cch; ich ++) {
		if (pszInput[ich] < 0x20) {
			cchMove++;
		} else {
			pszInput[ich - cchMove] = pszInput[ich];
		}
    }
    pszInput[ich - cchMove] = 0;
    return ich - cchMove;
}

/*------------------------------------------------------------------------
  Function: BidiLines
   
  Implements the Line-by-Line phases of the Unicode Bidi Algorithm

  Input:	 Count of characters
  flag whether to mirror

  Inp/Out: Input text
  Array of character directions
  Array of levels
			
  ------------------------------------------------------------------------*/
void BidiLines(int baselevel, TCHAR *pszLine, int *pclsLine, int *plevelLine, int cchPara, int fMirror, BOOL *pbrk) {
    int cchLine = 0;

    do {
		// break lines at LS
		cchLine = resolveLines(pszLine, pbrk, cchPara);

		// resolve whitespace
		resolveWhitespace(baselevel, pclsLine, plevelLine, cchLine);

		if (fMirror) {
			mirror(pszLine, plevelLine, cchLine);
		}

		// reorder each line in place
		reorder(baselevel, pszLine, plevelLine, cchLine);

		pszLine += cchLine;
		plevelLine += cchLine;
		pbrk += pbrk ? cchLine : 0;
		pclsLine += cchLine;
		cchPara -= cchLine;

    } while (cchPara);
}

// ===== FUNCTIONS FOR COMMAND LINE VERSION ==============================

#include <stdlib.h>
#include <string.h>

// An alternate CharFromTypes array may be needed to use the command
// line version,

#define MAX_CCH 256
void ShowInputTypes(FILE* f, TCHAR * pszInput, int cch) {
    TCHAR pszTypes[MAX_CCH+1];
    int ich;
    for (ich = 0; ich < cch; ich++) {
		pszTypes[ich] = CharFromTypes[ClassFromChWS(pszInput[ich])];
    }
    pszTypes[ich] = 0;

    fprintf(f, pszTypes);
}

void ShowTypes(FILE* f, int * types, int cch) {
    TCHAR pszTypes[MAX_CCH+1];
    int ich;
    for (ich = 0; ich < cch; ich++) {
		pszTypes[ich] = CharFromTypes[types[ich]];
    }
    pszTypes[ich] = 0;

    fprintf(f, pszTypes);
}

void ShowLevels(FILE* f, int * levels, int cch) {
    TCHAR pszLevel[MAX_CCH+1];
    int ich;
    for (ich = 0; ich < cch; ich++) {
		pszLevel[ich] = CharFromLevel[levels[ich]];
    }
    pszLevel[ich] = 0;

    fprintf(f, pszLevel);
}

void usage(char *s) {
    printf("Usage: %s [-verbose] [-nomirror] [-clean] strings...\n", s);
    printf("\t-verbose = verbose debugging output.\n");
    printf("\t-nomirror = refrain from glyph mirroring.\n");
    printf("\t-clean = clean up the result.\n");
    printf("\tOptions affect all subsequent arguments.\n");
    printf("\tAll other arguments are interpreted as strings to process.\n");
}

int main(int argc, char** argv) {
    int realArg = 0;
    int doMirror = 1;
    int doClean = 0;
    int beVerbose = 0;
    int i, cch, baselevel;
    int types[MAX_CCH];
    int levels[MAX_CCH];
    FILE* f = stdout;
    TCHAR pszInput[MAX_CCH+1];

    if (argc == 1)  {
		usage(argv[0]); exit(0);
    }
    for (i = 1; i < argc; ++i)  {
		if (strcmp(argv[i], "-verbose") == 0)  {
			beVerbose = 1;
			continue;
		} else if (strcmp(argv[i], "-nomirror") == 0) {
			doMirror = 0;
			continue;
		} else if (strcmp(argv[i], "-clean") == 0) {
			doClean = 1;
			continue;
		} else {
			++realArg;
		}

		cch = strlen(argv[i]);
		if (cch > MAX_CCH) cch = MAX_CCH;
		strncpy(pszInput, argv[i], cch);

		pszInput[cch] = 0;
		fprintf(f, "Input    %2d: %s\n", realArg, pszInput);

		// assign directional types
		classify(pszInput, types, cch, FALSE);

		if (beVerbose)  {
			fprintf(f, "Input Types: ");
			ShowInputTypes(f, pszInput, cch); fprintf(f, "\n");
		}

		// limit text to first block
		cch = resolveParagraphs(types, cch);

		// set base level and compute character types
		baselevel = baseLevel(types, cch);
		if (beVerbose) {
			fprintf(f, "Base Level : %d\n", baselevel);
		}

		// resolve explicit
		resolveExplicit(baselevel, N, types, levels, cch, 0);

		if (beVerbose) {
			fprintf(f, "Levels (A) : ");
			ShowLevels(f, levels, cch); fprintf(f, "\n");
		}

		// resolve weak
		resolveWeak(baselevel, types, levels, cch);

		if (beVerbose) {
			fprintf(f, "Types (A)  : ");
			ShowTypes(f, types, cch); fprintf(f, "\n");
		}

		// resolve neutrals
		resolveNeutrals(baselevel,types, levels, cch);

		if (beVerbose) {
			fprintf(f, "Types (B)  : ");
			ShowTypes(f, types, cch); fprintf(f, "\n");
		}

		// resolveImplicit
		resolveImplicit(types, levels, cch);

		if (beVerbose) {
			fprintf(f, "Levels (B) : ");
			ShowLevels(f, levels, cch); fprintf(f, "\n");
		}

		// assign directional types again, but for WS, S this time
		classify(pszInput, types, cch, TRUE);

		BidiLines(baselevel, pszInput, types, levels, cch, doMirror, 0);

		if (doClean) {
			cch = clean(pszInput, cch);
		}

		fprintf(f, "Output   %2d: %s\n\n", realArg, pszInput);
    }

    return 0;
}
