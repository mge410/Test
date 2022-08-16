document.addEventListener("DOMContentLoaded", function() {
    let falseResponse = 0

    let count = 0
    let num = 0

    const data = {
        labels: [],
        datasets: [{
        label: 'График загруженности процессора',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [],
        }]
    };
    
    const config = {
        type: 'line',
        data: data,
        options: {}};
    const myChart = new Chart(
        document.getElementById('myChart'),
        config);

    let timerId = setInterval(() => {
        fetch("http://exercise.develop.maximaster.ru/service/cpu/")
            .then(response => response.json())
            .then(data => {
                function addData(chart, label, data) {
                    chart.data.labels.push(label);
                    chart.data.datasets.forEach((dataset) => {
                        dataset.data.push(data);
                    });
                    chart.update();
                }
                if (data){
                    num = data
                    count += 1
                    addData(myChart, count, num)
                }else {falseResponse++
                    count += 1
                    addData(myChart, count, num)
                }
                const label = this.querySelector(".label__text")
                label.innerHTML = `Число запросов ${count} <br> Процент ошибок ${falseResponse / (count / 100)}%`
            })
    }, 5000)
})