//document.body.innerHTML = document.body.innerHTML.replace(new RegExp("Swift 3 Tutorial", "g"), "Removed Text");

var myElement = document.getElementById("eow-title");
myElement.innerHTML = "Removed Title";
blockThumbnail();
function blockThumbnail(){
	var relatedVideos = document.getElementsByClassName("stat view-count");
	var i;
	for (i = 0; i< relatedVideos.length; i++){
		if (relatedVideos[i].innerHTML.startsWith("Recommended for you")){
			relatedVideos[i].innerHTML = "This was a distracting recommended video.";
			relatedVideos[i].previousElementSibling.innerHTML = "This was the distracting channel";
			relatedVideos[i].previousElementSibling.previousElementSibling.previousElementSibling.innerHTML = "This was the distracting title";
			var gpElement = relatedVideos[i].parentNode.parentNode;
			var thumbnailElement = gpElement.nextElementSibling.firstElementChild.firstElementChild.firstElementChild;
			thumbnailElement.setAttribute("src", chrome.extension.getURL("blockthumbnail2.png"));
			thumbnailElement.setAttribute("data-thumb", chrome.extension.getURL("blockthumbnail2.png"));
		}
	}
}

function removeLinks(){
	
}
