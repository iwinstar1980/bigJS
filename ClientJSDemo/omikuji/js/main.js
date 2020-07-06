'use strict';

// ランダムな整数値の作成方法
// 0, 1, 2
// Math.floor(Math.random() * 3)
//
// 0 ... n
// Math.floor(Math.random() * (n +1))
//
// min ... max
// min + Math.floor(Math.random() * (max + 1 - min))

{
    const btn = document.getElementById('btn');

    btn.addEventListener('click', () => {
        // 方法２：配列を使う方法（確率は均等）
        const results = ['大吉', '中吉', '凶', '末吉'];
        // const n = Math.floor(Math.random() * results.length);
        // btn.textContent = results[n];
        btn.textContent = results[Math.floor(Math.random() * results.length)];

        //　方法１： switch 文を利用する方法
        // switch (n) {
        //     case 0:
        //         btn.textContent = '大吉';
        //         break;
        //     case 1:
        //         btn.textContent = '中吉';
        //         break;
        //     case 2:
        //         btn.textContent = '凶';
        //         break;
        // }

        //    方法３：　確率をコントロールする

        // const n = Math.random();
        // if (n < 0.05) {
        //     btn.textContent = '大吉';  //　確率 5%
        // } else if (n < 0.2) {
        //     btn.textContent = '中吉';　//  確率 15%
        // } else if (n < 0.5) {
        //     btn.textContent = '末吉';　//  確率　30%
        // } else {
        //     btn.textContent = '凶';　//　確率 50%
        // }
    })
}