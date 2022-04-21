function date() {
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    if (month < 10) {
        month = "0" + month;
    }
    if (day < 10) {
        day = "0" + day;
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
        hour = "0" + hour;
    }
    if (minute < 10) {
        minute = "0" + minute;
    }
    if (second < 10) {
        second = "0" + second;
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

function collumnMonat() {

    var date = new Date;
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    if (month < 10) {
        month = "0" + month;
    }
    if (day < 10) {
        day = "0" + day;
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
        <input id="break1${dayOfMonth}" type="text"></input>
    </td>
    <td id="summ${dayOfMonth}"></td>
</tr>`;

    }
}

collumnMonat();

function calcTime(beginTime, endTime) {

    let summe = endTime - beginTime;

    return summe;
}

function rechnen() {
    let beginTime = document.getElementById('timeFrom01').value;
    let endTime = document.getElementById('timeTo01').value;
    let summ_value = calcTime(beginTime, endTime);

    document.getElementById("summ01").innerHTML = summ_value;
}

document.getElementById("Rechner").addEventListener("click", rechnen);