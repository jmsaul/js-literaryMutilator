/**
 * JavaScript Events File
 **/

 /**
 * Changes the text on a click event
 **/
function clickEvent() {
	var changeString="Resistance is good for you";
  document.getElementById("click").innerHTML = changeString;
  document.getElementById("click").sytle.color = "green";
 }

/**
 *  Changes the color of the selected text
 **/
function changeTextColor() {
 document.getElementById("p2").style.color = "blue";
}

/**
 * Changes the background color of a paragraph
**/
function changeBackgroundColor() {
 document.getElementById("p3").style.backgroundColor = "red";
}