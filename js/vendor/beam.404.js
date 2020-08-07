window.onload = function() {
// Set the variables
var LastCaptureURL = 'https://wayback.archive-it.org/2502/20190705110514/';  
var CurrentPageURL = window.location.href;  
var RedirectURL = LastCaptureURL + CurrentPageURL;
var RedirectOptions = '<ul><li><strong><a id="beamlink" href="">View an archived version in the Bodleian Libraries&rsquo; Web Archive</a></strong></li><li><a href="https://wayback.archive-it.org/2502/*/http://eureka.sbs.ox.ac.uk/">Browse the Bodleian Libraries&rsquo; Web Archive of Eureka</a></li></ul>'

// Write to document
	document.getElementById("beamoptions").innerHTML = RedirectOptions;
	document.getElementById("beamlink").setAttribute("href",RedirectURL);	
}