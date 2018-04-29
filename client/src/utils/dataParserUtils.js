export const getFirstImageForHeading = (data) =>{

  var parser = new DOMParser();
  var content =  data.getElementsByTagName("content:encoded")[0].childNodes[0].nodeValue;
  var contentXMLString = `<div>${content}</div>`
  var parsedXMLDoc = parser.parseFromString(contentXMLString,"text/xml");
  return parsedXMLDoc.getElementsByTagName('img');
}
