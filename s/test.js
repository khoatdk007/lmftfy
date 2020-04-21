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

function type_in_url_bar() {
    if (i < myUrl.length) {
        document.getElementById("url-bar").value = myUrl.substr(0, i+1);
        i++;
        setTimeout(type_in_url_bar(), 1000);
    }
}

function type_in_search_bar() {
    if (i < question.length) {
        document.getElementById("search-bar").value = question.substr(0, i+1);
        i++;
        setTimeout(type_in_search_bar(), 50);
    }
}

function move_cursor_to_url_bar() {
    var elem = document.getElementById("cur");   
    var pos = 100;
    var id = setInterval(frame, 10);
    function frame() {
        if (pos == -14) {
            i=0;
            steps[0].style.display = "block";
            clearInterval(id);
            type_in_url_bar();
            move_cursor_to_search_bar();
        } else {
                pos--;
                elem.style.top = pos + 'px';
                elem.style.right = (pos + 600) + 'px';
            }
    }

}

function move_cursor_to_search_bar() {
    var elem = document.getElementById("cur");   
    var pos = -14;
    var id = setInterval(frame2, 7);
    function frame2() {
        if (pos == 180) {
            i=0;
            steps[1].style.display = "block";
            type_in_search_bar();
            move_cursor_to_search_btn();
            clearInterval(id);
        } else {
                pos++;
                elem.style.top = pos + 'px';
                elem.style.right = (pos/4 + 600) + 'px';
            }
    }
}

function move_cursor_to_search_btn() {
    var elem = document.getElementById("cur");   
    var pos = 180;
    var id = setInterval(frame2, 7);
    function frame2() {
        if (pos == 250) {
            i=0;
            steps[2].style.display = "block";
            steps[3].style.display = "block";
            document.getElementsByClassName("tooltiptext")[0].style.visibility = "visible";
            document.getElementById("google-search-btn").style.boxShadow="0px 0px 10px 3px #5998ff";
            document.getElementById("google-search-btn").readOnly=false;
            document.getElementById("cur").style.display = "none";
            clearInterval(id);
        } else {
                pos++;
                elem.style.top = pos + 'px';
                elem.style.right = pos/5+610+'px';
        }
    }

}

var temp = parseURLParams(window.location.href);
if (!temp) window.location.href = window.location.protocol + "//" + window.location.hostname;
var question = temp.q[0];
if (question.length === 0) window.location.href = window.location.protocol + "//" + window.location.hostname;
document.getElementById("google-search-btn").readOnly = true;
document.getElementById("search-bar").value = "";
document.getElementById("url-bar").value = "";
var speed = 150;
var myUrl = "google.com";
var steps = document.getElementsByClassName("step");
var i = 0;
move_cursor_to_url_bar();
let marginTop = 85;
setInterval(function() {
    tooltiptext = document.getElementsByClassName("tooltiptext")[0];
    tooltiptext.style.marginTop = marginTop + 'px';
    if (marginTop === 85) marginTop = 80;
    else marginTop = 85;
}, 500);

