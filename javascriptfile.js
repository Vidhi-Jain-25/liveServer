function display(){
    let htmltext=document.getElementById("htmlparttext");
    let csstext =document.getElementById("cssparttext");
    let displaytext=document.getElementById("previewparttext");
    var output=displaytext.contentWindow.document;
    output.body.innerHTML="<style>"+"html{color:white;}"+csstext.value+"</style>"+htmltext.value;
}

function clear(){
    let htmltext=document.getElementById("htmlparttext");
    let csstext =document.getElementById("cssparttext");
    htmltext.value="";
    csstext.value="";
}
