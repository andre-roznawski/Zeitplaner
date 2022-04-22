let test = "0";

function date() {
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    if (month < 10) {
        month = (`${test}`) + month;
    }
    if (day < 10) {
        day = (`${test}`) + day;
    }
    document.getElementById('date').innerHTML = document.getElementById('date').innerHTML + day + "." + month + "." + year;
}

date();

function time() {
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();

    if (hour < 10) {
        hour = (`${test}`) + hour;
    }
    if (minute < 10) {
        minute = (`${test}`) + minute;
    }
    if (second < 10) {
        second = (`${test}`) + second;
    }
    document.getElementById('time').innerHTML = "" + hour + ":" + minute + ":" + second;
    setTimeout(time, 500);
}

time();

var endtime = new Date("Dec 24, 2022 18:00:00");
var endezeit = endtime.getTime();

var timer = setInterval(function () {

    var datetoday = new Date();
    var datumheute = datetoday.getTime();

    var delta = endezeit - datumheute;

    var day = Math.floor(delta / (1000 * 60 * 60 * 24));
    var hour = Math.floor((delta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minute = Math.floor((delta % (1000 * 60 * 60)) / (1000 * 60));
    var second = Math.floor((delta % (1000 * 60)) / 1000);

    //document.getElementById('timer').innerHTML = "Dem Oli seine Weihnachtsgans gibts in : " + day + " Tage " + hour + " Stunden " + minute + " Minuten " + second + " Sekunden";

}, 1000);

function columnMonat() {

    var date = new Date;
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    if (month < 10) {
        month = (`${test}`) + month;
    }
    if (day < 10) {
        day = (`${test}`) + day;
    }
    for (let dayOfMonth = 1; dayOfMonth < 31; dayOfMonth++) {
        if (dayOfMonth < 10) {
            dayOfMonth = "0" + dayOfMonth;
        }
        let ausgabe = dayOfMonth + "." + month + "." + year;

        document.getElementById('tableBody').innerHTML = document.getElementById('tableBody').innerHTML + `
    <tr>
    <td id="day">${ausgabe}</td>
    <td>
        <input id="text${dayOfMonth}" type="text"></input>
    </td>
    <td>
        <input id="timeFrom${dayOfMonth}" type="text"></input>
    </td>
    <td>
        <input id="timeTo${dayOfMonth}" type="text"></input>
    </td>
    <td>
        <input id="break${dayOfMonth}" type="text"></input>
    </td>
    <td id="summ${dayOfMonth}"></td>
</tr>`;

    }
}

columnMonat();

function calcTime(beginTime, endTime, breakTime) {

    let beginpaket = beginTime.split(":");
    let begin_minuten = beginpaket[0] * 60;
    let sumBegin = parseInt(begin_minuten) + parseInt(beginpaket[1]);

    let endpaket = endTime.split(":");
    let end_minuten = endpaket[0] * 60;
    let sumEnd = parseInt(end_minuten) + parseInt(endpaket[1]);

    let breakpaket = breakTime.split(":");
    let break_minuten = breakpaket[0] * 60;
    let sumBreak = parseInt(break_minuten) + parseInt(breakpaket[1]);

    let summe = sumEnd - sumBegin;

    if (sumBreak>30){
        summe = sumEnd - sumBegin - sumBreak;
    } else {
        if (summe>360){
            summe = summe - 30
            }
        }
    

    console.log(`${sumBegin} + ${sumEnd} + ${summe}`);

    let stunden1 = Math.floor(summe / 60);
    if (stunden1 < 10) {
        stunden1 = (`${test}`) + stunden1
    };
    let minuten = summe - (stunden1 * 60);
    if (minuten < 10) {
        minuten = (`${test}`) + minuten
    };
    let sumString = (`${stunden1}:${minuten}`)

    return sumString;
}

function rechnen() {

    let beginTime = document.getElementById('timeFrom01').value;
    let endTime = document.getElementById('timeTo01').value;
    let breakTime = document.getElementById('break01').value;
    let summ_value = calcTime(beginTime, endTime, breakTime);

    document.getElementById("summ01").innerHTML = summ_value;
}

document.getElementById("Rechner").addEventListener("click", rechnen);
