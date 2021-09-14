(function () {
    const container = document.querySelector('.board__container')
    const rows = document.querySelector('.board__rows')
    const cells = document.querySelector('.board__cells')
    const btnGenerate = document.querySelector('.board__generate')

    const renderBoard = () => {
        const rowsValue = +rows.value
        const cellsValue = +cells.value

        let html = '<div class="row odd">'

        const dataBoard = rowsValue * cellsValue
        let rowIndex = 0;

        for (let i = 0; i < dataBoard; i++) {
            if (!(i % cellsValue) && i > 0) {
                rowIndex++
                html += `</div><div class="row ${rowIndex % 2 ? 'even' : 'odd'}">`
            }

            html += `<div class="board__cell"></div>`
        }

        html += '</div>'

        container.innerHTML = html
    }

    renderBoard();

    btnGenerate.onclick = renderBoard
})()

