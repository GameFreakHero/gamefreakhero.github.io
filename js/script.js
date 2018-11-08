for(var i = 1; i < 3; i++){
  /*var image = new Image();
  image.src = 'images/' + i + '.jpg';*/

  var para = document.createElement("img");
  para.src = 'images/' + i + '.jpg';
  para.className = "img-responsive, img-circle"
  //para.appendChild(image);

  var paragr = document.createElement("p");
  paragr.appendChild(para);

  document.getElementById("images").appendChild(paragr);
}