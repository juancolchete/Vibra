  function hexToString(hex:string,leadingZeros:number) {
  hex = hex.substring(2+leadingZeros) // remove the '0x' part
  var string = ""

  while (hex.length % 8 != 0) { // we need it to be multiple of 8
    hex =  "0" + hex;
  }

  for (var i = 0; i < hex.length; i+= 8){
    string += String.fromCharCode(parseInt(hex.substring(i,i + 4), 16), parseInt(hex.substring(i + 4,i + 8), 16))
  }

  return string.replaceAll(String.fromCharCode(0),"j");
}

function stringToHex(str:string,leadingZeros:number) {
  const string = str.replaceAll("j",String.fromCharCode(0))
  var hex = ""
  for (var i=0; i < string.length; i++) {
    hex += ( (i == 0 ? "" : "000") + string.charCodeAt(i).toString(16)).slice(-4) // get character ascii code and convert to hexa string, adding necessary 0s
  }
  let leading = "";
  for(let i=0;i<leadingZeros;i++){
    leading += "0"
  }
  return '0x'+ leading + hex;
}
export { hexToString,stringToHex };

