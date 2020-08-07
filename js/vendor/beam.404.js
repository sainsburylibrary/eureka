(function() {
	// Set the variables
	var LastCaptureURL = 'https://wayback.archive-it.org/2502/20190705110514/';  
	var CurrentPageURL = window.location.href;  
	var RedirectURL = LastCaptureURL + CurrentPageURL;

	// Write to document
	document.getElementById("beamlink").setAttribute("href",RedirectURL);	
}
