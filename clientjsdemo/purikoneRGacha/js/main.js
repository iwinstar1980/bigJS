'use strict';

{
    const STAR3_CHARACTERS = [
        'ノゾミ', 'アキノ', 'マコト', 'シズル',
        'ジータ', 'アンナ', 'サレン', 'ニノン',
        'モニカ', 'リノ', 'マホ', 'ハツネ',
        'イオ', 'アリサ', 'ジュン', 'キョウカ',
        'イリヤ', 'トモ', 'クリスティーナ', 'カスミ',
        'ルカ', '水着ペコリーヌ', '水着スズメ', '水着タマキ',
        '水着キャル', 'シノブ(ハロウィン)', 'ミサキ(ハロウィン)', 'チカ(クリスマス)',
        'アヤネ(クリスマス)', 'ネネカ', '正月ユイ', '正月ヒヨリ',
        'シズル(バレンタイン)', 'ムイミ', 'アン', 'グレア',
        'クウカ(オーエド)', 'ニノン(オーエド)', 'エミリア', 'レム',
        '水着スズナ', '水着サレン', '水着マホ', '水着マコト',
        'アオイ(編入生)', 'チエル', 'クロエ', 'ユニ',
        'キョウカ(ハロウィン)', 'ミミ(ハロウィン)', 'ルナ', 'カヤ',
        'イノリ', 'クリスティーナ(クリスマス)', 'イリヤ(クリスマス)', '正月キャル',
        '正月コッコロ', 'カスミ(マジカル)', 'ペコリーヌ(プリンセス)', 'ウヅキ(デレマス)',
        'リン(デレマス)', 'リン(レンジャー)', 'マヒル(レンジャー)', 'コッコロ(プリンセス)',
        'リノ(ワンダー)', 'ユイ(プリンセス)'
    ];

    const STAR2_CHARACTERS = [
        'クウカ', 'ミヤコ', 'カオリ', 'エリコ',
        'タマキ', 'アカリ', 'ミミ', 'シノブ',
        'マヒル', 'ミフユ', 'ミツキ', 'シオリ',
        'ユキ', 'スズナ', 'チカ', 'ツムギ',
        'ミサト', 'マツリ', 'アヤネ', 'リン',
        'ナナカ'
    ];

    const STAR1_CHARACTERS = [
        'ペコリーヌ', 'リマ', 'クルミ', 'レイ',
        'ヒヨリ', 'ミソギ', 'コッコロ', 'ユカリ',
        'ヨリ', 'キャル', 'ユイ', 'ミサキ',
        'スズメ', 'アオイ', 'アユミ', '水着コッコロ',
        '水着ミフユ', 'ミヤコ(ハロウィン)', 'クルミ(クリスマス)', '正月レイ',
        'エリコ(バレンタイン)', 'ルゥ', 'ラム', '水着イオ',
        '水着カオリ', 'ミソギ(ハロウィン)', 'ノゾミ(クリスマス)', '正月スズメ',
        'シオリ(マジカル)', 'ミオ(デレマス)', 'アユミ(ワンダー)', '水着アンナ'
    ];

    const PICKUP_CHARACTERS = [
        '水着ルカ'
    ];

    const STAR3_PROBABILITY = 0.025;
    const STAR2_PROBABILITY = 0.180;
    const STAR1_PROBABILITY = 0.795;
    const STAR2_10TH_PROBABILITY = 0.975;
    const PICKUP_PROBABILITY = 0.007;

    for (let i = 0; i < 10; i++) {
        if (i < 9) {
            const n = Math.random();
            if (n < PICKUP_PROBABILITY) {
                console.log(`PICKUP★★★${PICKUP_CHARACTERS[Math.floor(Math.random() * PICKUP_CHARACTERS.length)]}`);
            } else if (n < STAR3_PROBABILITY) {
                console.log(`★★★${STAR3_CHARACTERS[Math.floor(Math.random() * STAR3_CHARACTERS.length)]}`);
            } else if (n < STAR2_PROBABILITY) {
                console.log(`★★${STAR2_CHARACTERS[Math.floor(Math.random() * STAR2_CHARACTERS.length)]}`);
            } else {
                console.log(`★${STAR1_CHARACTERS[Math.floor(Math.random() * STAR1_CHARACTERS.length)]}`);
            }
        } else {
            const n = Math.random();
            if (n < PICKUP_PROBABILITY) {
                console.log(`PICKUP★★★${PICKUP_CHARACTERS[Math.floor(Math.random() * PICKUP_CHARACTERS.length)]}`);
            } else if (n < STAR3_PROBABILITY) {
                console.log(`★★★${STAR3_CHARACTERS[Math.floor(Math.random() * STAR3_CHARACTERS.length)]}`);
            } else {
                console.log(`★${STAR2_CHARACTERS[Math.floor(Math.random() * STAR2_CHARACTERS.length)]}`);
            }
        }
    }

}