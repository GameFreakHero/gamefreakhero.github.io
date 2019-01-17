for(var i = 16; i > 0; i--){
  var para = document.createElement("img");
  para.src = 'images/drawings/' + i + '.jpg';
  para.className = "img-responsive, img-circle";

  var paragr = document.createElement("p");
  paragr.appendChild(para);

  document.getElementById("images").appendChild(paragr);
}