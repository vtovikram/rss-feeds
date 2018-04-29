export const getFirstImageForHeading = (data) =>{
  var test = data;
  var parser = new DOMParser();

var test2 =  test.getElementsByTagName("content:encoded")[0].childNodes[0].nodeValue;
var test3 = `<div>${test2}</div>`
var xmlDoc2 = parser.parseFromString(test3,"text/xml");
return xmlDoc2.getElementsByTagName('img');

}
