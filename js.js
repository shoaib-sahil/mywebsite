

var id =  setTimeout(Ani , 5000);
function Ani() {
    var target = document.getElementById("test");
    target.style.width = "500px";
}
function stopAnimation(){
    clearTimeout(id);
}
