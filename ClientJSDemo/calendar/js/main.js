'use strict';

{
    const year = 2020;
    const month = 4; //5月

    function getCalendarBody() {
        const dates = [];    //date: 日付, day: 曜日
        // new Date() 第三个参数设为0 ，可以取得上个月的最后一天
        const lastDate = new Date(year, month + 1, 0).getDate();

        for (let i = 1; i<= lastDate; i++) {
            dates.push(i);
        }

        console.log(dates);
    }

    getCalendarBody();
}