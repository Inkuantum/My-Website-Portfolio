//ICON SWITCHER (DEVICES)

//Constant function renewal
window.setInterval(changeIcon, 1000)

//Change value
let i = 0;

function changeIcon() {
    
    //All icon names
    let icon_names = ["tv-outline", "phone-portrait-outline",
        "game-controller-outline", "laptop-outline"];

    //Icon selector
    let icon = document.querySelector('.js--icon-switch');

    //Check if it's the last icon
    if(i < icon_names.length) {
        //Next icon
        icon.setAttribute('name', icon_names[i]);
        i++;
    }else{
        //Start again
        i=0;
        icon.setAttribute('name', icon_names[i]);
        i++;
    }

}

//SCROLL POSTERS (CONTENT)

let order = [3, 4, 5];

let place0 = document.getElementById("js--place-0");
let place1 = document.getElementById("js--place-1");
let place2 = document.getElementById("js--place-2");
let path = "resources/img/poster-";
let png = ".png"
let min = 0;
let max = 8;

//If left arrow clicked
document.getElementById("js--scroll-left").addEventListener("click", function(){
    if(place0.getAttribute('src') !== path + min + png) {
        order = decrementByOne(order);
        setValuesInPlace();
    }
});

//If right arrow clicked
document.getElementById("js--scroll-right").addEventListener("click", function(){
    if(place2.getAttribute('src') !== path + max + png) {
        order = incrementByOne(order);
        setValuesInPlace();
    }
});

//Set places to order
function setValuesInPlace() {
    place0.setAttribute('src', path + order[0] + png);
    place1.setAttribute('src', path + order[1] + png);
    place2.setAttribute('src', path + order[2] + png);
}

//Increase / Decrease functions (Array)

function incrementByOne(arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i]++;
  }
  return arr;
}

function decrementByOne(arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i]--;
  }
  return arr;
}