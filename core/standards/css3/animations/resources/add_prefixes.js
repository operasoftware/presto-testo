var stylePrefix, eventPrefix, eventInterface, domConstPrefix,
    domInterfacePrefix, domPropertyPrefix;
var computedStyle = getComputedStyle(document.documentElement, null);
if (computedStyle.WebkitAnimation !== undefined) {
   stylePrefix = '-webkit-';
   eventPrefix = 'webkit';
   eventInterfacePrefix = 'WebKit';
   domConstPrefix = 'WEBKIT_';
   domInterfacePrefix = 'WebKit';
   domPropertyPrefix = 'Webkit';
}
if (computedStyle.MozAnimation !== undefined) {
   stylePrefix = '-moz-';
   eventPrefix = '';
   eventInterfacePrefix = '';
   domConstPrefix = 'MOZ_';
   domInterfacePrefix = 'Moz';
   domPropertyPrefix = 'Moz';
}
if (stylePrefix) {
   if (document.querySelector('style')) {
      var styleText = document.querySelector('style').firstChild;
      styleText.data = styleText.data.replace(/@keyframes/g,
            '@' + stylePrefix + 'keyframes');
      styleText.data = styleText.data.replace(/animation/g,
            stylePrefix + 'animation');
   }

   var scripts = document.querySelectorAll('head > script');
   for (var i = 0; i < scripts.length; i++) {
      if (scripts[i].firstChild) {
         scripts[i].parentNode.removeChild(scripts[i]);
         var scriptText = scripts[i].firstChild.data;
         if (eventPrefix) {
            scriptText = scriptText.replace(/animation(start|end|iteration)/g,
                  function(eventName, eventType) {
                     return eventPrefix + 'Animation'
                           + eventType.charAt(0).toUpperCase()
                           + eventType.substring(1);
                  });
         }
         scriptText = scriptText.replace(/(['"])(animation(?:-.+)?['"])/g,
               '$1' + stylePrefix + '$2');
         scriptText = scriptText.replace(/AnimationEvent/g,
               eventInterfacePrefix + '$&');
         scriptText = scriptText.replace(/KEYFRAMES?_RULE/g,
               domConstPrefix + '$&');
         scriptText = scriptText.replace(/CSSKeyframes?Rule/g,
               domInterfacePrefix + '$&');
         scriptText = scriptText.replace(/\.animation/g,
               '.' + domPropertyPrefix + 'Animation');
         var newScript = document.createElement('script');
         var newScriptTextNode = document.createTextNode(scriptText);
         newScript.appendChild(newScriptTextNode);
         document.querySelector('head').appendChild(newScript);
      }
   }
}
