const heyButton = document.getElementById('heyButton');

const sayHey = () => {
    var heyThereAudio = new Audio("heyThere.m4a");
    heyThereAudio.play();
};

heyButton.addEventListener('click', sayHey);

