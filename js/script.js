for(var i = 1; i < 20; i++){
  var image = new Image();
  image.src = 'images/' + i + '.jpg';

  var para = document.createElement("p");
  para.appendChild(image);

  console.log(document.getElementById("images"));

  document.getElementById("images").appendChild(para);
}