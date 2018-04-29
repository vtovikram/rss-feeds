export const structureApiResponceForState = (data) =>{

  var parser, xmlDoc;
  parser = new DOMParser();
  xmlDoc = parser.parseFromString(data,"text/xml");
  var result = xmlDoc.getElementsByTagName("item");
  return result;
}
