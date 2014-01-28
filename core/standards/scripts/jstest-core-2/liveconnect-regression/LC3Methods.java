import java.applet.*;

public class LC3Methods extends Applet {

    public LC3Methods() {}

    public LC3Methods(Object obj) { ObjectOrString(obj); }
    public LC3Methods(String str) { ObjectOrString(str); }

    public String Method1() { return "Method1"; }

    public String ObjectOrString(Object obj) { return "Object"; }
    public String ObjectOrString(String str) { return "String"; }

    public String NumberMethod(String obj, double num) { return "String+double"; }
    public String NumberMethod(Object obj, double num) { return "Object+double"; }
    public String NumberMethod(Object obj, Double num) { return "Object+Double"; }
    public String NumberMethod(Object obj, char num) { return "Object+char"; }
}
