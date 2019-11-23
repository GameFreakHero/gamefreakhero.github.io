for (var i = 0; i < 31 + 1; i++) {
    var para = document.createElement("img");
    para.src = 'images/drawings/inktober2019/' + i + '.jpg';
    para.className = "img-fluid";

    var paragr = document.createElement("p");
    paragr.appendChild(para);

    document.getElementById("drawings").appendChild(paragr);
}