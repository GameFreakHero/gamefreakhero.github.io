for(var i = 39; i > 0; i--){
  var para = document.createElement("img");
  para.src = 'images/drawings/' + i + '.jpg';
  para.className = "img-fluid";

  var paragr = document.createElement("p");
  paragr.appendChild(para);

  document.getElementById("drawings").appendChild(paragr);
}