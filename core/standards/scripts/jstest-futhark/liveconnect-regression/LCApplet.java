//
// Test of accessing an applet object from javascript:
//

import java.applet.*;
import java.lang.Exception;
import netscape.javascript.JSObject;

public class LCApplet extends Applet {

    public int field1 = 17;
    public int getField1() { return field1; }

    public Object field2 = new Object();
    public Object getField2() { return field2; }

    public void init() {
	System.out.println("LCApplet init();");
    }

    public void start() {
	System.out.println("LCApplet start();");
    }

    public String method1() {
	return new String("Method1 result");
    }

    public boolean method2() {
	return true;
    }

    public void deadlock() {
	try {
	    JSObject win = JSObject.getWindow(this);
	    win.call("deadlock", null);
	} catch (Exception ex) { ex.printStackTrace(System.err); }
    }

    public void deadlock2() {
	try {
	    JSObject win = JSObject.getWindow(this);
	    win.eval("deadlock();");
	} catch (Exception ex) { ex.printStackTrace(System.err); }
    }
}
