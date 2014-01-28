Load event sequence testing

This test suite covers load events and DOMContentLoaded events in documents, framesets and IFRAMEs, including load events from inline elements.


Work-in-progress notes below (quoting self, Bratell, Tarquin, Hixie along the way..):

11:29	bratell		hallvors, do you want to have suggestions for onload tests? I suspect I've made something that is O(n^2) over the number of iframes/frames so it might be worth doing something with lots of iframes.

11:30	bratell	Also, I don't think we have any tests for when an iframe doesn't create a document. i.e. when you load a plugin, image or wav file in it.
	hallvors	bratell: thanks
	bratell	wav file is a special special case.
11:58	hallvors	actually bratell, none of those tests are really perf-related.
11:59	hallvors	given the nature of onload testing, any suggestions for writing performance tests? 500 IFRAMEs with data URLs?
12:01	bratell	No idea how many will be needed to see if the situation is a bad one.
12:09	jgraham	(you should try varying the number of iframes to see how the code scales)


* TODO: review test cases associated with CORE-1740

Things to test...

* framesets specified by rows and cols in the same frameset element (special case in the document tree) [huh?]
* different load methods
* frameset reloads. Since we only reload frames, not the frameset itself, that is also a special case


HTML5-style event dispatch won't happen in the near future (which is OK since we have until 2022 anyway):
One thing we know is wrong, but will probably not be fixed, is that since different documents use different schedulers, even if the initial event order is correct, different load or handler length might make the event handlers interleaved or even run in the opposite order. My plan for this was to change the firing order, and hope that is enough to make the site (hotmail) or sites work well. Synchronizing between documents is possible but increases the complexity by a magnitude, something that seems to magnify the risks beyond what is reasonable right now.

---8<---

Ian writes in "Re: Moving Form Events from DOM3 Events to HTML5" on October 6th, 2009:
Let's look at 'load':

# A user agent must dispatch this event when the DOM implementation
# finishes loading the resource (such as the document) and any
# dependent resources (such as images, style sheets, or
# scripts). Dependent resources that fail to load must not prevent
# this event from firing if the resource that loaded them is still
# accessible via the DOM. If this event type is dispatched,
# implementations are required to dispatch this event at least on the
# Document node. This event differs from the DOMContentLoaded event in
# that it is not dispatched until all external resources are loaded.

Here are some questions that I do not believe the above adequately
answers:

* Which resources does the event fire for? Does it fire on a Document
fetched using XMLHttpRequest? Does it fire for a favicon declared on a
<link> element? Does it fire for a plugin loaded purely by type="" with no
associated resource in <object>?

* What element does the event fire at? Consider a <video> element with two
<source> elements. When the second <source> element's URL is resolved and
the video fetched, should the event fire on the <source> or the <video>?

* Should the event fire synchronously or asynchronously?

* Does a dynamically inserted <script> element inserted during the
DOMContentLoaded event delay the 'load' event, or should the 'load' event
only be delayed by resources that started loading before the document
ended parsing?

* If the user switches alternative style sheets while the document is
loading, does the 'load' event get delayed by the loads of the alternative
style sheets, only the persistent ones, or only the preferred set?

* On <video> elements, should the 'load' event fire before or after
networkState is set to NETWORK_LOADED?

* If an <input> element with type=text has a src="" attribute, and the
type is dynamically switched to "image" and back to "text" before the
image has loaded, should the 'load' event fire on the <input> element once
the image has loaded? If this occurs while the document is loading, should
the document-wide 'load' event wait for the image?

* When the 'load' event is fired at the Document, what nodes are expected
to receive the event? (It actually has to be the Window object, weirdly.)

* Should 'load' fire before or after the delayed 'popstate'?

* Does 'load' fire before or after the <script> element's script?

* Does 'load' fire before or after img.complete becomes true?

* When an <iframe> contains a document, should the 'load' event be fired
at the <iframe>, the inner Document/Window, or both? If both, in what
order?

* What should UIEvent.view be when there are multiple views? (Is 'load'
really a UIEvent?)

---8<---



* tests to make sure <iframe onload> still fires if there is no onload handling inside the content document - 007
* where in the sequence of events does onload on main document fire? (Think there are bugs and tests here already but another test case never hurt anyone :-p) - all tests :-)
* order between onload and domcontentloaded - 004, 014, 022 (+relative to LINK load event)
* Should frames wait for their sibling frames to load before firing their own onload? - 015

* frame loading after the initial load - 016 (location.reload())

* In the onload handler of either the iframe document or the iframe element, start a load of some new, very slow, resource either in the iframe or the main document - 023, 024, 025

* edge cases where the load state of a frame/iframe changes inside the load handler
	* load handler setting location.href?  - 006
	* load handler appending external content to documents? - 021
	* load handler setting location.href of parent?
	* load handler using new Image to trigger load event - 020

* mixes of frames and iframes - 018

* interaction of DOM2 Events-type load events and DOM0 window.onload (do both types fire in the order this bug suggests?) - 004, 008, 009, 014, 022

* document support.html
	in iframe nested.html
		in document (pretend I didn't see that)
		in frameset nested-frameset.html
			in document
				in frameset
					in frameset in document (that last one is, therefore, nested frameset tags). every document has onload, every iframe/frame/frameset element has onload - what should the sequence be? - approximately tested by 026