document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('form');
    form.addEventListener('submit', formSend);

    async function formSend(e){
        e.preventDefault();
        const city = document.getElementById('city').value
        const value = document.getElementById('value').value
        fetch(`http://exercise.develop.maximaster.ru/service/delivery/?city=${city}&weight=${value}`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                const text = document.querySelector(".text")
                text.innerHTML = data.message
            })
            .catch(er => {
                const text = document.querySelector(".text")
                text.setAttribute("color", "red");
                text.innerHTML = er.messange
            })
    }
});