document.addEventListener("DOMContentLoaded", function() {
    const url = "http://exercise.develop.maximaster.ru/service/products/"
    const load = new Promise(function(resolve, reject) {
        fetch(url)
            .then(response => response.json())
            .then(json => resolve(json))
            .catch(error => reject(error))

    })
    load.then(data => {

        const table = document.querySelector(".table")
        const products = data
        const button = document.querySelector(".form__button")

        const line = document.querySelectorAll(".form__input")
        
        const tableContent = table.innerHTML;

        const filling = () => {
            table.innerHTML = ""
            table.innerHTML = tableContent

            const text = document.getElementById("label__text")
            text.innerHTML = ""
            const minimal = numTest(line[0].value) && line[0].value? line[0].value: 0;
            const maximum = numTest(line[1].value) && line[1].value? line[1].value: 0;

            let flag = 0
            for (let index = 0; index < products.length; index++) {
                const element = products[index];
                if (element.price > minimal && (element.price < maximum || Number(maximum) === 0)){
                    flag++
                    const content = table.innerHTML
                    table.innerHTML = `${content}<tr><td>${index + 1}</td><td>${element.name}</td><td>${element.quantity}</td><td>${element.price}</td><td>${element.price * element.quantity}</td></tr>`} 
            if (!flag){
                text.innerHTML = "Нет данных, попадающих под условие фильтра"
            } else {
                text.innerHTML = ""
            }
            }
            function numTest(input){return /\D/.test(input.value);}
        }
        filling()
        button.addEventListener("click", filling)
})
})