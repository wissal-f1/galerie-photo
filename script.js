function upDate(previewPic){
    console.log("Mouse over triggered");

    document.getElementById("image").innerHTML = previewPic.alt;
    document.getElementById("image").style.backgroundImage = 
        "url('" + previewPic.src + "')";
}

function unDo(){
    console.log("Mouse out triggered");

    document.getElementById("image").innerHTML = 
        "Survolez une image ci-dessous pour l'afficher ici";

    document.getElementById("image").style.backgroundImage = "url('')";
}
