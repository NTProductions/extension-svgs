function generateRandomIcon() {
  // 265x150
  var panelDataFolderPath = "C:/Users/Natel/Desktop/icons";
  
  var colourOne = randomHexColour();
  var colourTwo = randomHexColour();
  var colourThree = randomHexColour();
  var colourFour = randomHexColour();
  var colourFive = randomHexColour();
  const timestamp = new Date().getTime();
  var svgContent = '<svg style="width:195px;height:135px;" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 195 135"><defs><style>.cls-1{fill:{colourOne};}.cls-2{fill:{colourTwo};}.cls-3{fill:{colourThree};}.cls-4{fill:#{colourFour};}.cls-5{fill:#{colourFive};}</style></defs><rect class="cls-1" width="100" height="30"/><rect class="cls-1" x="100" y="60" width="100" height="30"/><rect class="cls-1" x="198" y="120" width="100" height="30"/><rect class="cls-2" y="30" width="100" height="30"/><rect class="cls-2" x="100" y="90" width="100" height="30"/><rect class="cls-2" x="200" width="100" height="30"/><rect class="cls-3" y="60" width="100" height="30"/><rect class="cls-3" x="100" y="120" width="100" height="30"/><rect class="cls-3" x="200" y="90" width="100" height="30"/><rect class="cls-4" y="90" width="100" height="30"/><rect class="cls-4" x="100" width="100" height="30"/><rect class="cls-4" x="200" y="30" width="100" height="30"/><rect class="cls-5" x="100" y="30" width="100" height="30"/><rect class="cls-5" x="200" y="60" width="100" height="30"/><rect class="cls-5" y="120" width="100" height="30"/></svg>';
  
  svgContent = svgContent.replace("{colourOne}", colourOne);
  svgContent = svgContent.replace("{colourTwo}", colourTwo);
  svgContent = svgContent.replace("{colourThree}", colourThree);
  svgContent = svgContent.replace("{colourFour}", colourFour);
  svgContent = svgContent.replace("{colourFive}", colourFive);

  const fs = require('fs');
  fs.writeFile(panelDataFolderPath+'/icon_'+timestamp+'.svg', svgContent, (err) => {  
      // throws an error, you could also catch it here
      if (err) throw err;
  
      // success case, the file was saved
      return panelDataFolderPath.slice(8, panelDataFolderPath.length)+'/icon_'+timestamp+'.svg';
  });
}

function randomHexColour() {
  let color = '#';
  for (let i = 0; i < 6; i++){
     const random = Math.random();
     const bit = (random * 16) | 0;
     color += (bit).toString(16);
  };
  return color;
}

function generateSVGs() {
  var img;
  for(var s = 0; s < 9; s++) {
      img = document.createElement("IMG");
      img.src = generateRandomIcon();
      img.setAttribute("class", "img");
      alert(img.src);
      document.getElementById("previewSection").appendChild(img);
  }
}

setTimeout(function() {
  generateSVGs();
}, 500);

function getOS() {
 		var userAgent = window.navigator.userAgent,
 		platform = window.navigator.platform,
 		macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
 		windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
 		os = null;

 		if(macosPlatforms.indexOf(platform) != -1) {
 			os = "MAC";
 		} else if(windowsPlatforms.indexOf(platform) != -1) {
 			os = "WIN";
 		}
 		return os;
 	}