
var speed = 5; 
var tab = document.getElementById("demo");
var tab1 = document.getElementById("demo1");
var tab2 = document.getElementById("demo2");
tab2.innerHTML = tab1.innerHTML; 
tab.scrollTop = tab.scrollHeight
function Marquee() {
    if (tab1.offsetTop - tab.scrollTop >= 0)
        tab.scrollTop += tab2.offsetHeight 
    else {
        tab.scrollTop--
    }
}
var MyMar = setInterval(Marquee, speed);
