var get_link = function() {
    if (document.getElementById("question").value == "") return alert("Please input question!");
    document.getElementById("main-page").style.display = "none";
    document.getElementById("get-link-page").style.display = "block";
    var mainHref = window.location.href;
    mainHref = mainHref.replace("index.html", "");
    if (mainHref.charAt(mainHref.length-1) === "/")
        mainHref = mainHref.substring(0, mainHref.length-1)
    var newHref = mainHref + "/s/?q=" + document.getElementById("question").value;
    newHref=newHref.split(" ").join("+");
    document.getElementById("link").value = newHref;
};
var go_to_main_screen = function() {
    document.getElementById("main-page").style.display = "block";
    document.getElementById("get-link-page").style.display = "none";
};
var checkEnter = function(e){
    if (e.keyCode == 13) {
        get_link();
        return false;
    }
    return true;
};
var preview_link = function() {
    window.location.href = document.getElementById("link").value;
}
var goto_preview_page = function() {
    if (document.getElementById("question").value == "") return alert("Please input question!");
    var mainHref = window.location.href;
    mainHref = mainHref.replace("index.html","");
    if (mainHref.charAt(mainHref.length-1) === "/")
        mainHref = mainHref.substring(0, mainHref.length-1)
    var newHref = mainHref + "/s/?q=" + document.getElementById("question").value;
    newHref=newHref.split(" ").join("+");
    document.getElementById("link").value = newHref;
    preview_link();
}
var result_link = document.getElementById("link").value;
if (result_link == "" || result_link == null) {
    go_to_main_screen();
}
