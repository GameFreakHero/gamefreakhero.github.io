for(var i = 1; i < 2; i++){
    var para = document.createElement("img");
    para.src = 'images/train drawings/' + i + '.jpg';
    para.className = "img-responsive, img-circle"
  
    var paragr = document.createElement("p");
    paragr.appendChild(para);
  
    document.getElementById("images").appendChild(paragr);
  }