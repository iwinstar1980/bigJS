'use strict';

console.clear();

{
    const year = 2020;
    const month = 6; //5月

    // 取得上个月的最后几天
    function getCalendarHead() {
        const dates = [];
        // 取得上个月最后一天的日期
        const d = new Date(year, month, 0).getDate();
        // 取得本月第一天是星期几
        // 0:日曜　1:月曜 ...... 6:土曜
        const n = new Date(year, month, 1).getDay();

        for (let i = 0; i < n; i++) {
            dates.unshift({
                date: d - i,
                isToday: false,
                isDisabled: true,
            })
        }

        return dates;
    }

    // 取得本月的日期
    function getCalendarBody() {
        const dates = [];    //date: 日付, day: 曜日
        // new Date() 第三个参数设为0 ，可以取得第二个参数（月）的上个月的最后一天
        const lastDate = new Date(year, month + 1, 0).getDate();

        for (let i = 1; i <= lastDate; i++) {
            dates.push({
                date: i,
                isToday: false,
                isDisabled: false,
            });
        }

        return dates;
    }

    // 取得下个月的开头的几天
    function getCalendarTail() {
        const dates = [];
        // 取得本月最后一天的曜日
        const lastDay = new Date(year, month + 1, 0).getDay();

        for (let i = 1; i < 7 - lastDay; i++) {
            dates.push({
                date: i,
                isToday: false,
                isDisabled: true,
            });
        }

        return dates;
    }

    function createCalendar() {
        const dates = [
            ...getCalendarHead(),
            ...getCalendarBody(),
            ...getCalendarTail(),
        ];

        const weeks = [];
        const weeksCount = dates.length / 7;

        for (let i = 0; i < weeksCount; i++) {
            weeks.push(dates.splice(0, 7));
        }

        weeks.forEach(week =>{
            const tr = document.createElement('tr');
            week.forEach(date =>{
                const td = document.createElement('td');

                td.textContent = date.date;
                if (date.isToday) {
                    td.classList.add('today');
                }
                if (date.isDisabled) {
                    td.classList.add('disabled');
                }

                tr.appendChild(td);
            });
            document.querySelector('tbody').appendChild(tr);
        });
    }

    createCalendar();
}