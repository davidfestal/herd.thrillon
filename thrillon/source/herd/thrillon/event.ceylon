import ceylon.html {
	AttributeEntry,
	Node
}
import ceylon.interop.browser.dom {
	Event
}
import herd.thrillon.internal {
	VoidAttributeValueProvider
}

"""This top-level object provides wrapper methods
   for each type of HTML DOM event.
   
   This allows producing an [[AttributeEntry]] from the corresponding
   event handler implemented as a Ceylon function type.
   
   #### How to use it
   
   It is used when creating the `ceylon.html` tree that will be rendered
   by a [[Template]]. Event Handlers can thus be added in the
   [[Node.attributes]] parameter of the Html Node.
   
   ```
   function buttonWitOnClickHandler() => Button {
        attributes = [
        	event.click((evt) {
        	    doAnActionOnEvent(evt)
        	});
        ];
        "Standard Button"
   }

   function buttonWitCustomEventHandler() => Button {
        attributes = [
        	event.custom("ontouchmove", (evt) {
        	    doAnActionOnEvent(evt)
        	});
        ];
        "Touchable Button"
   }
   
   ```
   """
shared object event {
	
	shared AttributeEntry custom(String name, void code(Event evt))
			=> name -> VoidAttributeValueProvider(code);

	shared AttributeEntry abort(void code(Event evt))
			=> custom("onabort", code);

	shared AttributeEntry blur(void code(Event evt))
			=> custom("onblur", code);

	shared AttributeEntry cancel(void code(Event evt))
			=> custom("oncancel", code);

	shared AttributeEntry canplay(void code(Event evt))
			=> custom("oncanplay", code);

	shared AttributeEntry canplaythrough(void code(Event evt))
			=> custom("oncanplaythrough", code);

	shared AttributeEntry change(void code(Event evt))
			=> custom("onchange", code);

	shared AttributeEntry click(void code(Event evt))
			=> custom("onclick", code);

	shared AttributeEntry cuechange(void code(Event evt))
			=> custom("oncuechange", code);

	shared AttributeEntry dblclick(void code(Event evt))
			=> custom("ondblclick", code);

	shared AttributeEntry durationchange(void code(Event evt))
			=> custom("ondurationchange", code);

	shared AttributeEntry emptied(void code(Event evt))
			=> custom("onemptied", code);

	shared AttributeEntry ended(void code(Event evt))
			=> custom("onended", code);

	shared AttributeEntry error(void code(Event evt))
			=> custom("onerror", code);

	
	shared AttributeEntry focus(void code(Event evt))
			=> custom("onfocus", code);

	shared AttributeEntry input(void code(Event evt))
			=> custom("oninput", code);

	shared AttributeEntry invalid(void code(Event evt))
			=> custom("oninvalid", code);

	shared AttributeEntry keydown(void code(Event evt))
			=> custom("onkeydown", code);

	shared AttributeEntry keypress(void code(Event evt))
			=> custom("onkeypress", code);

	shared AttributeEntry keyup(void code(Event evt))
			=> custom("onkeyup", code);

	shared AttributeEntry load(void code(Event evt))
			=> custom("onload", code);

	shared AttributeEntry loadeddata(void code(Event evt))
			=> custom("onloadeddata", code);

	shared AttributeEntry loadedmetadata(void code(Event evt))
			=> custom("onloadedmetadata", code);

	shared AttributeEntry loadstart(void code(Event evt))
			=> custom("onloadstart", code);

	shared AttributeEntry mousedown(void code(Event evt))
			=> custom("onmousedown", code);

	shared AttributeEntry mouseenter(void code(Event evt))
			=> custom("onmouseenter", code);

	shared AttributeEntry mouseleave(void code(Event evt))
			=> custom("onmouseleave", code);

	shared AttributeEntry mousemove(void code(Event evt))
			=> custom("onmousemove", code);

	shared AttributeEntry mouseout(void code(Event evt))
			=> custom("onmouseout", code);

	shared AttributeEntry mouseover(void code(Event evt))
			=> custom("onmouseover", code);

	shared AttributeEntry mouseup(void code(Event evt))
			=> custom("onmouseup", code);

	shared AttributeEntry mousewheel(void code(Event evt))
			=> custom("onmousewheel", code);

	shared AttributeEntry pause(void code(Event evt))
			=> custom("onpause", code);

	shared AttributeEntry play(void code(Event evt))
			=> custom("onplay", code);

	shared AttributeEntry playing(void code(Event evt))
			=> custom("onplaying", code);

	shared AttributeEntry progress(void code(Event evt))
			=> custom("onprogress", code);

	shared AttributeEntry ratechange(void code(Event evt))
			=> custom("onratechange", code);

	shared AttributeEntry reset(void code(Event evt))
			=> custom("onreset", code);

	shared AttributeEntry resize(void code(Event evt))
			=> custom("onresize", code);

	shared AttributeEntry scroll(void code(Event evt))
			=> custom("onscroll", code);

	shared AttributeEntry seeked(void code(Event evt))
			=> custom("onseeked", code);

	shared AttributeEntry seeking(void code(Event evt))
			=> custom("onseeking", code);

	shared AttributeEntry select(void code(Event evt))
			=> custom("onselect", code);

	shared AttributeEntry show(void code(Event evt))
			=> custom("onshow", code);

	shared AttributeEntry stalled(void code(Event evt))
			=> custom("onstalled", code);

	shared AttributeEntry submit(void code(Event evt))
			=> custom("onsubmit", code);

	shared AttributeEntry suspend(void code(Event evt))
			=> custom("onsuspend", code);

	shared AttributeEntry timeupdate(void code(Event evt))
			=> custom("ontimeupdate", code);

	shared AttributeEntry toggle(void code(Event evt))
			=> custom("ontoggle", code);

	shared AttributeEntry volumechange(void code(Event evt))
			=> custom("onvolumechange", code);

	shared AttributeEntry waiting(void code(Event evt))
			=> custom("onwaiting", code);
}