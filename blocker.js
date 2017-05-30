/**
 * @blocker.js
 * Blocks related videos that are irrevent to the video you are watching. 
 * This file is a part of the DistractionTube-Blocker Chrome Extension.
 * 
 * Written by: Samsore Shams
 *
 */

//var myElement = document.getElementById("eow-title");
//myElement.innerHTML = "Removed Title";
blockThumbnail();
function blockThumbnail(){
	//Get all of the related video elements
	var relatedVideos = document.getElementsByClassName("stat view-count");
	var i;
	for (i = 0; i< relatedVideos.length; i++){
		if (relatedVideos[i].innerHTML.startsWith("Recommended for you")){  //Select the related video elements that are from YouTube's reccomendation system.
			var contentWrapperElement = relatedVideos[i].parentNode.parentNode;
			removeLinks(contentWrapperElement);
			
			relatedVideos[i].innerHTML = "This was a distracting recommended video."; //Remove the "Recommended for you" text
			relatedVideos[i].previousElementSibling.innerHTML = "This was a distracting channel";//Remove Channel Name
			relatedVideos[i].previousElementSibling.previousElementSibling.previousElementSibling.innerHTML = "This was a distracting title";//Remove Title of video
			
			//Remove/change thumbnail attribtutes
			var thumbnailElement = contentWrapperElement.nextElementSibling.firstElementChild.firstElementChild.firstElementChild;
			thumbnailElement.setAttribute("src", chrome.extension.getURL("blockthumbnail2.png"));
			thumbnailElement.setAttribute("data-thumb", chrome.extension.getURL("blockthumbnail2.png"));
			thumbnailElement.nextElementSibling.innerHTML = ""; //watch time
		}
	}
	
}
alert("Fininshed JS")

/**
 * Removes the Hyperlinks from the related video
 * @param {HTML element} elem: ContentWrapperElement of the related video. 
 */
function removeLinks(elem){
	var thumbnailWrapper = elem.nextElementSibling.firstElementChild
	thumbnailWrapper.removeAttribute("href");
	var aElement = elem.firstElementChild;
	aElement.removeAttribute("href");
	aElement.removeAttribute("title");
}

/**
 * TODO: Removes the entire related video from the related video list.
 * @param {HTML element} elem: ContentWrapperElement of the related video. 
 */
function removeElementCompletely(elem){
	elem.parentNode.setAttribute("class", "");
	elem.parentNode.removeChild(elem);
}









