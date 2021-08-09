if( /Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	var answer = window.confirm("Diese Website ist für PCs angepasst. Willst du die Smartphone-Version nutzen?");
if (answer) {
    window.location.replace('https://google.com/');
}
else {
    //some code
}
}