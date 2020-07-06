'use strict';

{
    function createColumn(col) {
        const source = [];
        for (let i = 0; i < 15; i++) {
            // 1 ... 15
            // source[i] = i + 1 + 15 * 0;
            // 16 ... 30
            // source[i] = i + 1 + 15 * 1;
            // 31 ... 45
            // source[i] = i + 1 + 15 * 2;
            source[i] = i + 1 + 15 * col;
        }

        const column = [];
        for (let i = 0; i < 5; i++) {
            // splice()方法的返回值是一个数组，这里取第一个元素
            column[i] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
        }

        return column;
    }

    function createColumns() {
        const columns = [];

        for (let i = 0; i < 5; i++) {
            columns[i] = createColumn(i);
        }
        columns[2][2] = 'FREE';
        console.table(columns);
        return columns;
    }

    // 方法１：行列反转してからHTMLにrender
    // function createBingo(columns) {
    //     const bingo = [];
    //     for (let row = 0; row < 5; row++) {
    //         bingo[row] = [];
    //         for (let col = 0; col < 5; col++) {
    //             bingo[row][col] = columns[col][row];
    //         }
    //     }
    //     console.table(bingo);
    //     return bingo;
    // }
    //
    // function renderBingo(bingo) {
    //
    //     for (let row = 0; row < 5; row++) {
    //
    //         const tr = document.createElement('tr');
    //         for (let col = 0; col < 5; col++) {
    //             const td = document.createElement('td');
    //             td.textContent = bingo[row][col];
    //             tr.appendChild(td);
    //         }
    //
    //         document.querySelector('tbody').appendChild(tr);
    //
    //     }
    // }

    //方法２：行列反転不要で、直ちにHTMLにrender
    function renderBingo(columns) {
        for (let row = 0; row < 5; row++) {
            const tr = document.createElement('tr');
            for (let col = 0; col < 5; col++) {
                const td = document.createElement('td');
                td.textContent = columns[col][row];
                tr.appendChild(td);
            }
            document.querySelector('tbody').appendChild(tr);
        }
    }

    const columns = createColumns();
    // 方法１：行列反转してからHTMLにrender
    // const bingo = createBingo(columns);
    // renderBingo(bingo);

    //方法２：行列反転不要で、直ちにHTMLにrender
    renderBingo(columns);
}