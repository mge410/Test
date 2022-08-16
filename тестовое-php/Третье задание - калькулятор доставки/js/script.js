window.addEventListener("DOMContentLoaded", () => {
    const url = 'http://exercise.develop.maximaster.ru/service/city/'
    fetch(url)
            .then(response => response.json())
            .then(data => {
                const formData = new FormData()
                for (let index = 0; index < data.length; index++) {
                    const element = data[index];
                    formData.append(`${index}`, `${element}`)
                }
                const res = fetch("./php/getrequest.php", {
                    method: 'POST',
                    body: formData
                });
            
                //res = JSON.stringify(data)
                //console.log(res)
                //let xhr = new XMLHttpRequest();
                //url = "./php/getrequest.php";
                //console.log(data)
                //.then(console.log(res)).catch(er => console.log(er))
            })
            .catch(err => console.log(err))
            console.log("ok")
    //console.log(1)
    //function req (){
    //    const request = new XMLHttpRequest();
    //    request.open("GET", "");
    //    request.setRequestHeader("Content-type", "application/json; charset=utf-8");
    //    request.send();
    //    request.addEventListener("load", function(){
    //        if (request.status == 200){
    //            let data = JSON.parse(request.response);
    //            console.log(data);
    //        } else {
    //            console.error("Ошибка")
    //        }
    //    })
    //}
    //req()
});