/**
 * JavaScript Events File
 **/

 /**
 * Changes the text on a click event
 **/
function clickEvent() {
	var changeString="Resistance is good for you";
  document.getElementById("click").innerHTML = changeString;
 }

/**
 *  Changes the color of the font
 **/
/**  function changefontcolor(theColor,theText)
 {
  return '<span style="+theColor+">'+theText+'</span>';
 }
**/

function changeFontColor() {
 var paragraph2 = document.getElementById("p2").innerHTML;
 paragraph.sytle.color = "blue";
}
/** var newString=changeString(changefontcolor("blue",))  **/
