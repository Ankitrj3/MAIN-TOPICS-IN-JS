// element selector
var a = document.querySelector("h1");
console.log(a);

document.getElementById("jds");
document.getElementsByClassName("hiko")


// changing html

document.querySelector("h2").innerHTML = "changed";

var b = document.querySelector("p");
b.innerHTML = "hello mr ankit ranjan"

// changing css

var g = document.querySelector("h3");
g.innerHTML = "hello red echho"
g.style.color = "red";
g.style.backgroundColor ="brown";
g.style.height = "20px";

// event listener 

var j = document.querySelector(".hiko");
j.addEventListener("click",function(){
    alert("hello hiko");
});

b.addEventListener("click",function(){
    b.innerHTML = "badal gya hu mai time ke according"
    b.style.color = "green";
    b.backgroundColor = "black";
});