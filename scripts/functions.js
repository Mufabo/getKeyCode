window.addEventListener("keydown", (event) => {
    var x = event.keyCode;
    console.log(event.key);

    document.getElementById("text").className = "text text-center"; 
    document.getElementById("text").innerHTML = x;

    document.getElementById("button").innerHTML = event.key;
})


