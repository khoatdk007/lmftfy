function parseURLParams(url) {
    var queryStart = url.indexOf("?") + 1,
        queryEnd   = url.indexOf("#") + 1 || url.length + 1,
        query = url.slice(queryStart, queryEnd - 1),
        pairs = query.replace(/\+/g, " ").split("&"),
        parms = {}, i, n, v, nv;

    if (query === url || query === "") return;

    for (i = 0; i < pairs.length; i++) {
        nv = pairs[i].split("=", 2);
        n = decodeURIComponent(nv[0]);
        v = decodeURIComponent(nv[1]);

        if (!parms.hasOwnProperty(n)) parms[n] = [];
        parms[n].push(nv.length === 2 ? v : null);
    }
    return parms;
}

var speed= 150;
var myUrl="google.com";
var temp = parseURLParams(window.location.href);
var question = temp.q[0];
var steps = document.getElementsByClassName("step");
for (let i = 0; i < 4; i++)
    steps[i].style.display= "none";
steps[0].style.display = "block";
/*document.getElementById("url-bar").value = "google.com";
steps[1].style.display = "block";
document.getElementById("search-bar").value = question;
steps[2].style.display = "block";
//document.getElementById("googlesearch").click();
steps[3].style.display = "block";*/
var i = 0;
var allinone = myUrl+question;
function typeWriter1() {
    if (i == myUrl.length-1) steps[1].style.display = "block";
    if (i == allinone.length-1) {
        steps[2].style.display = "block";
        document.getElementById("googlesearch").style.border = "1px solid blue";
        steps[3].style.display = "block";
    }
    if (i < myUrl.length) {
        document.getElementById("url-bar").value += allinone.charAt(i);
        i++;
        setTimeout(typeWriter1, speed);
    } else {
        document.getElementById("search-bar").value += allinone.charAt(i);
        i++;
        setTimeout(typeWriter1, speed);
    }
};
typeWriter1();