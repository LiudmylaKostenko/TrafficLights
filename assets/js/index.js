let i = -1;
let ChangeColorBtn = document.getElementsByClassName('next_Color_Btn')[0];
ChangeColorBtn.addEventListener('click', function trafficLight() {
    i++;
    let colorLights = ['red', 'yellow', 'green'];
    let switchOn = document.getElementsByClassName('lights');
    if (switchOn[i - 1]) switchOn[i - 1].style.backgroundColor = '';
    if (i == colorLights.length) i = 0;
    switchOn[i].style.backgroundColor = colorLights[i];

})