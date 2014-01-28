//
// Test the JSObject interface methods:
//
// call, equals, eval, getMember, getSlot, removeMember, setMember, setSlot, toString, getWindow.
//

import java.applet.*;
import netscape.javascript.*;
import java.lang.Exception;

public class JSObjApplet extends Applet {

    public void init() {
    }

    public void start() {
	try {
	    JSObject win = JSObject.getWindow(this);
	    JSObject test_obj = (JSObject)win.getMember("test_obj");
	    JSObject result = (JSObject)win.getMember("result");



	    // call
	    Object args[] = new Object[1];
	    args[0] = new java.lang.String("tull");
	    Object ret = win.call("f", args);
	    result.setSlot(0, ret);

	    // equals
	    result.setSlot(1, new java.lang.Boolean(JSObject.getWindow(this).equals(win)));

	    // eval
	    ret = win.eval("1+1;");
	    result.setSlot(2, ret);

	    // getMember
	    ret = test_obj.getMember("member");
	    result.setSlot(3, ret);

	    ret = test_obj.getMember("=");
	    result.setSlot(4, ret);

	    ret = test_obj.getMember("\"");
	    result.setSlot(5, ret);

	    ret = test_obj.getMember("'");
	    result.setSlot(6, ret);

	    // getMember on host objects
	    ret = win.getMember("location");
	    result.setSlot(7, ret);

	    // getSlot
	    ret = test_obj.getSlot(7);
	    result.setSlot(8, ret);

	    // getSlot on host objects
	    JSObject form_obj = (JSObject)win.eval("document.forms;");
	    form_obj = (JSObject)form_obj.getSlot(0);
	    ret = form_obj.getMember("id");
	    result.setSlot(9, ret);

	    // removeMember
	    test_obj.removeMember("member2");

	    // setMember
	    test_obj.setMember("member3", new java.lang.String("newMember"));
	    test_obj.setMember("nullmember", null);

	    // setMember on host objects
	    JSObject select = (JSObject)win.eval("document.getElementById('sel');");
	    select.setMember("style", "color: #bafbaf;");

	    // setSlot
	    test_obj.setSlot(0, new java.lang.String("newSlot"));
	    test_obj.setSlot(1, null);

	    // setSlot on host objects
	    JSObject new_option = (JSObject)win.eval("var elm = document.createElement('OPTION'); elm.appendChild(document.createTextNode('NewOption')); elm;");
	    select.setSlot(0, new_option);

	    // toString
	    result.setSlot(10, win.toString());

	    // getWindow
	    result.setSlot(11, new java.lang.Boolean(win instanceof JSObject));

	    try {
		win.eval("throw new Object();");
		result.setSlot(12, new java.lang.Boolean(false));
	    }
	    catch (JSException ex) {
		System.out.println(ex);
		result.setSlot(12, new java.lang.Boolean(true));
	    }
	} catch(Exception ex) { ex.printStackTrace(System.err); }
    }
};
