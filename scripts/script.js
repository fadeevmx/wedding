$(document).ready(function(){
    new WOW({
        animateClass: 'animate__animated',
    }).init();})

function sendEmail() {

    let name = document.getElementsByName("name")[0].value;
    let night = document.querySelector('input[name="night"]:checked').value
    let meat = document.querySelector('input[name="meat"]:checked').value
    let alcohol = document.querySelector('input[name="alcohol"]:checked').value

    let subject = "Новое сообщение от " + name;

    let body = "Привет, дорогие Максим и Маргарита! Меня зовут " + name + ', и я очень рад(а) быть на вашей свадьбе. Останусь ли я на ночь? ' + night + ' Из еды я предпочитаю ' + meat + ', а из напитков ' + alcohol + '.'


    window.open("mailto:wedding_mail@bk.ru?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body));
}


