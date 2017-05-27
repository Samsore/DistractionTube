//document.body.innerHTML = document.body.innerHTML.replace(new RegExp("Swift 3 Tutorial", "g"), "Removed Text");

var myElement = document.getElementById("eow-title");
alert(myElement.innerHTML)
myElement.innerHTML = "Removed Title"

var relatedVideos = document.getElementsByClassName("stat view-count");
var i;
for (i = 0; i< relatedVideos.length; i++){
	if (relatedVideos[i].innerHTML == "Recommended for you"){
		relatedVideos[i].innerHTML += "REMOVE THIS VIDEO";
		relatedVideos[i].previousElementSibling.innerHTML = "REMOVE CHANNEL";
		relatedVideos[i].previousElementSibling.previousElementSibling.previousElementSibling.innerHTML = "REMOVE TITLE";
		var gpElement = relatedVideos[i].parentNode.parentNode;
		var thumbnailElement = gpElement.nextElementSibling.firstElementChild.firstElementChild.firstElementChild;
		//alert(thumbnailElement);
		//thumbnailElement.src = chrome.extension.getURL("blockthumbnail.png");
		thumbnailElement.setAttribute("src", "");
		//thumbnailElement.setAttribute("src", chrome.extension.getURL("blockthumbnail.png"));
		//alert("prev" + relatedVideos[i].nextSibling);
		//relatedVideos.nextSibling.innerHTML = "REMOVE CHANNEL";
	}
}