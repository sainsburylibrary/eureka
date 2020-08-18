window.onload = function() {
// Set the variables
var LastCaptureURL = 'https://wayback.archive-it.org/org-467/20190925162139/';  
var CurrentPageURL = window.location.href;  
var RedirectURL = LastCaptureURL + CurrentPageURL;

// Write to document
	document.getElementById("beamlink").setAttribute("href",RedirectURL);	
}