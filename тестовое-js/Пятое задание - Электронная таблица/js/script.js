document.addEventListener("DOMContentLoaded", function() {
    if (!localStorage.getItem("table")){
        localStorage.setItem('table', JSON.stringify([[""]]))
    }

    const arrayTable = JSON.parse(localStorage.getItem("table"))

    const addCol = document.querySelector(".add-col")
    const addRow = document.querySelector(".add-row")
    const removeCol = document.querySelector(".remove-col")
    const removeRow = document.querySelector(".remove-row")

    updateTable(arrayTable)

    addCol.addEventListener("click", addColDo)
    addRow.addEventListener("click", addRowDo)
    removeCol.addEventListener("click", removeColDo)
    removeRow.addEventListener("click", removeRowDo)

    const table = document.querySelector(".table")
    let coords = [0, 0]
    table.addEventListener("dblclick", insertTable)
    table.addEventListener("touchstart", insertTable)

    table.addEventListener("click", function (e) {
        var o = e.target, coord = {};
        while (o.nodeName !== "TABLE") {
            if (o.nodeName === "TR") coord.y = o.rowIndex;
            if (o.nodeName === "TD") coord.x = o.cellIndex;
            o = o.parentNode;
        }
        coords = [coord.y, coord.x];
    })


    function addColDo(){
        arrayTable.forEach(el => el.push(""))
        localStorage.setItem('table', JSON.stringify(arrayTable))
        updateTable(arrayTable)
    }

    function addRowDo(){
        const adArray = []
        for (let index = 0; index < arrayTable[0].length; index++) {
            adArray.push("");}
        arrayTable.push(adArray)
        localStorage.setItem('table', JSON.stringify(arrayTable))
        updateTable(arrayTable)
    }

    function removeColDo(){
        if (arrayTable[0].length > 1){
            let result = true
            arrayTable.forEach(el => {
                const value = el[el.length - 1]
                if (value){
                    result = confirm("ВЫ точно хотите удалить данные из таблицы?");
                }
            })
            if (result){
                arrayTable.forEach(el => el.pop())
            }
            localStorage.setItem('table', JSON.stringify(arrayTable))
            updateTable(arrayTable)
        }
    }

    function removeRowDo(){
        if (arrayTable.length > 1){
            let result = true
            arrayTable[arrayTable.length - 1].forEach(el => {
                if (el){
                    result = confirm("ВЫ точно хотите удалить данные из таблицы?");
                }
            })
            if (result){
                arrayTable.pop()
            }
            localStorage.setItem('table', JSON.stringify(arrayTable))
            updateTable(arrayTable)
        }
    }
    function updateTable(arrayTable) {
        const table = document.querySelector(".table")
        table.innerHTML = ""
        const adArray = arrayTable
        adArray.forEach(el => {
            const tableContent = table.innerHTML
            let value = "<tr class='row'>"
            el.forEach(col => {
                value += `<td class="td"><input class="input" type="text" disabled="disabled" value="${col}"></td>`
            })
            value += "</tr>"
            table.innerHTML = `${tableContent}${value}`})
    }

    function insertTable(){
        const row = document.querySelectorAll(".row")[coords[0]];
        const cell = row.querySelectorAll(".input")[coords[1]];
        cell.removeAttribute("disabled")
        cell.addEventListener("blur", () => {
            cell.setAttribute("disabled", "disabled")
            cell.setAttribute("placeholder", `${cell.value}`)
            arrayTable[coords[0]][coords[1]] = cell.value
            localStorage.setItem("table", JSON.stringify(arrayTable))
        }, true);
    }
})