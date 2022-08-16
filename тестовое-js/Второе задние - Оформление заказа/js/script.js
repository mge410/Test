document.addEventListener("DOMContentLoaded", function() {
    ymaps.ready(init);
    function init(){
        var myPlacemark
        var myMap = new ymaps.Map("map", {
            center: [55.76, 37.64],
            zoom: 7
        });
    

    function createPlacemark(coords) {
        return new ymaps.Placemark(coords, {
            balloonContent: `${coords}`
        });
    }
    myMap.events.add('click', function (e) {
        var coords = e.get('coords');
        // Если метка уже создана – просто передвигаем ее.
        if (myPlacemark) {
            myPlacemark.geometry.setCoordinates(coords);
        }
        // Если нет – создаем.
        else {
            myPlacemark = createPlacemark(coords);
            myMap.geoObjects.add(myPlacemark);
        }
    });
    }
    const form = document.getElementById('form');
    form.addEventListener('submit', formSend);
    async function formSend(e) {
        e.preventDefault();

        let error = formValidate(form);
    }

    function formValidate(form){
        let errorText = ""
        let error = 0;
        let formReq = document.querySelectorAll(".__req");

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input)
            if (input.classList.contains('_email')){
                if (!emailTest(input)){
                    formAddError(input);
                    error++;
                    errorText += "Неверно заполнен email <br>"
                }
            } else if (input.classList.contains('_tel')){
                if (telTest(input) || input.value === ''){
                    formAddError(input);
                    error++;
                    errorText += "Неверно заполнен телефон <br>"
                }
            } else if (input.classList.contains('_com')){
                if (input.value.length > 500){
                    formAddError(input);
                    error++;
                    errorText += "Максимальная длинна Комментария 500 символов!"
                }
              }
            else{
                if (input.value === '') {
                    formAddError(input);
                    error++;
                    errorText += "Неверно заполнен фио <br>"
                }
            }
            let el = document.getElementById('textError');
            el.innerHTML = errorText
        }
        function formAddError(input){
            input.classList.add("_error");
        }
        function formRemoveError(input){
            input.classList.remove("_error");
        }

        function emailTest(input){
            return /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(input.value);
        }

        function telTest(input){
            return /\D/.test(input.value);
        }
    }
})