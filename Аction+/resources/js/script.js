//Icon switcher in devices section

window.setInterval(changeIcon, 1000)

let i = 0;

function changeIcon() {
    
    let icon_names = ["tv-outline", "phone-portrait-outline",
        "game-controller-outline", "laptop-outline"];

    let icon = document.querySelector('.js--icon-switch');

    if(i < icon_names.length) {
        icon.setAttribute('name', icon_names[i]);
        i++;
    }else{
        i=0;
        icon.setAttribute('name', icon_names[i]);
        i++;
    }

}