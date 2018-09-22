var run_now = function() {
    document.getElementById("inputlink").style.display = "none";
    document.getElementById("outputlink").style.display = "block";
    var mainHref = window.location.href;
    mainHref = mainHref.replace("index.html","");
    var newHref = mainHref + "/test.html?q=" + document.getElementById("question").value;
    newHref=newHref.replace(" ", "+");
    document.getElementById("link").value = newHref;
};
var chay_ngay_di = function() {
    document.getElementById("inputlink").style.display = "block";
    document.getElementById("outputlink").style.display = "none";
};
var checkEnter = function(e){
    if (e.keyCode == 13) {
        run_now();
        return false;
    }
    return true;
};
var preview_link = function() {
    window.location.href = document.getElementById("link").value;
}
var nova_ahrix = document.getElementById("link").value;
if (nova_ahrix == "" || nova_ahrix == null) {
    chay_ngay_di();
}
