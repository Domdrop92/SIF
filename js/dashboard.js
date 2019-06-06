function upload(){
    var imgcanvas= document.getElementById("can");
    var filename= document.getElementById("finput");
    var image= new SimpleImage(fileinput);
    image.drawTo(imgcanvas);
}
