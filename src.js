var element = document.querySelector("body");
var ElementButton = document.querySelector("button");
var divElementGrandMaster = document.createElement("div");
var divButton = document.getElementById("divButton");

divButton.style.position = "absolute";
divButton.style.left = "55%";
divButton.style.marginLeft = "-110px";


element.bgColor = "#FDF5E6";

ElementButton.style.height = "40px";
ElementButton.style.width = "100px";
ElementButton.style.borderRadius =  '50% '
ElementButton.style.borderColor = "black";
ElementButton.style.backgroundColor = "#FFFAFA";

var divs = [];
divElementGrandMaster.style.width = "100%";
divElementGrandMaster.style.height = "110px";

function mostraQuadrado(){
    for( kkk of divs){
      divElementGrandMaster.appendChild(kkk);
      var pos = divs.indexOf(kkk);       
      element.appendChild(divElementGrandMaster);
    }
}

function addDivs(){
    var divElementMaster = document.createElement("div");
    divElementMaster.style.height = '110px';
    divElementMaster.style.width = '110px';
    divElementMaster.style.float = "left";
    var divElement = document.createElement("div");
    divElement.onmouseover = trocaDeCor;
    divElement.style.height = '100px';
    divElement.style.width = '100px';
    divElement.style.backgroundColor = 'red';
    divElement.style.flex = 3;    
    divElementMaster.appendChild(divElement);
    divs.push(divElementMaster);
    mostraQuadrado();  
}

function trocaDeCor(){
  this.style.backgroundColor = getRandomColor();
  mostraQuadrado();
}

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
   }

ElementButton.onclick = addDivs;