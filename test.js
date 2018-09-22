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

function myMove(now,gh,sp) {
    var elem = document.getElementById("cur");   
    var pos = now;
    var id = setInterval(frame, sp);
    function frame() {
     if (pos == gh) {
        clearInterval(id);
    } else {
            if (pos > gh) pos--; else if (pos < gh) pos++;
            elem.style.top = pos + 'px';
            elem.style.right = (pos + 600) + 'px';
        }
    }
}
document.getElementById("googlesearch").readOnly=true;
document.getElementById("search-bar").value="";
document.getElementById("url-bar").value="";
var speed= 150;
var myUrl="google.com";
var temp = parseURLParams(window.location.href);
var question = temp.q[0];
var steps = document.getElementsByClassName("step");
var i = 0;
function typing() {
    if (i < myUrl.length) {
        document.getElementById("url-bar").value = myUrl.substr(0, i+1);
        i++;
        setTimeout(typing(), 50);
    }
}
function typing2() {
    if (i < question.length) {
        document.getElementById("search-bar").value = question.substr(0, i+1);
        i++;
        setTimeout(typing2(), 50);
    }
}
function run_now_MTP() {
    var elem = document.getElementById("cur");   
    var pos = 100;
    var id = setInterval(frame, 5);
    function frame() {
        if (pos == -14) {
            i=0;
            steps[0].style.display = "block";
            typing();
            move2();
            clearInterval(id);
        } else {
                pos--;
                elem.style.top = pos + 'px';
                elem.style.right = (pos + 600) + 'px';
            }
    }

}
function move2() {
    var elem = document.getElementById("cur");   
    var pos = -14;
    var id = setInterval(frame2, 4);
    function frame2() {
        if (pos == 180) {
            i=0;
            steps[1].style.display = "block";
            typing2();
            move3();
            clearInterval(id);
        } else {
                pos++;
                elem.style.top = pos + 'px';
            }
    }
}
function move3() {
    var elem = document.getElementById("cur");   
    var pos = 180;
    var id = setInterval(frame2, 4);
    function frame2() {
        if (pos == 250) {
            i=0;
            steps[2].style.display = "block";
            steps[3].style.display = "block";
            clearInterval(id);
        } else {
                pos++;
                elem.style.top = pos + 'px';
                elem.style.right = pos/2+500+'px';
            }
    }
    document.getElementById("googlesearch").style.boxShadow="0px 0px 10px 3px #5998ff";
    document.getElementById("googlesearch").readOnly=false;
}
function typing3() {
    if (i < question.length) {
        document.getElementById("search-bar").value += question.charAt(i);
        i++;
        setTimeout(typing3(), 500);
    }
}
run_now_MTP();