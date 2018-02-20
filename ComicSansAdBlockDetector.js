// Function called if AdBlock is detected
function adBlockDetected() {
	var dropdown = document.createElement("div");
	var dropdowntext = document.createTextNode("Hey AdBlock user, you unlocked a new font! Unfortunatley its Comic Sans"); 
	dropdown.classList.add("adblockdropdown");
	dropdown.appendChild(dropdowntext);                              
	document.body.appendChild(dropdown);

	var cssId = 'comicsanscss';
	if (!document.getElementById(cssId))
	{
		var head  = document.getElementsByTagName('head')[0];
		var link  = document.createElement('link');
		link.id   = cssId;
		link.rel  = 'stylesheet';
		link.type = 'text/css';
		link.href = 'style.css';
		link.media = 'all';
		head.appendChild(link);
	}
}

// We look at whether FuckAdBlock already exists.
if(typeof fuckAdBlock !== 'undefined' || typeof FuckAdBlock !== 'undefined') {
	// If this is the case, it means that something tries to usurp are identity
	// So, considering that it is a detection
	adBlockDetected();
} else {
	// Otherwise, you import the script FuckAdBlock
	var importFAB = document.createElement('script');
	importFAB.onload = function() {
		// If all goes well, we configure FuckAdBlock
		fuckAdBlock.onDetected(adBlockDetected)
		fuckAdBlock.onNotDetected(adBlockNotDetected);
	};
	importFAB.onerror = function() {
		// If the script does not load (integrity problem, ...)
		// Then a detection is triggered
		adBlockDetected(); 
	};
	importFAB.integrity = 'sha256-4/8cdZfUJoNm8DLRzuKwvhusQbdUqVov+6bVj9ewL7U=';
	importFAB.crossOrigin = 'anonymous';
	importFAB.src = 'https://cdnjs.cloudflare.com/ajax/libs/fuckadblock/3.2.1/fuckadblock.js';
	document.head.appendChild(importFAB);
	
}
