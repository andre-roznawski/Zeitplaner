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
    for (let dayOfMonth = 1; dayOfMonth < 31; dayOfMonth++) {
        if (dayOfMonth < 10) {
            dayOfMonth = (`${test}`) + dayOfMonth;
        }
       
        let ausgabe = dayOfMonth + "." + month + "." + year;

        document.getElementById('tableBody').innerHTML = document.getElementById('tableBody').innerHTML + `
    <tr>
    <td id="day">${ausgabe}</td>
    <td>
        <input id="text-${dayOfMonth}" type="text"></input>
    </td>
    <td>
        <input id="timeFrom-${dayOfMonth}" type="text"></input>
    </td>
    <td>
        <input id="timeTo-${dayOfMonth}" type="text"></input>
    </td>
    <td>
        <input id="break-${dayOfMonth}" type="text"></input>
    </td>
    <td id="summ-${dayOfMonth}"></td>
</tr>`;

    }
}

columnMonat();

function calcTime2(ereignis) {
    let id = ereignis.target.id;
    let array_id = id.split('-');
    let dayOfMonth = array_id[1];
    console.log(id);

    let beginTime = document.getElementById(`timeFrom-${dayOfMonth}`).value;
    let endTime = document.getElementById(`timeTo-${dayOfMonth}`).value;
    let breakTime = document.getElementById(`break-${dayOfMonth}`).value;
    let summ_value = calcTime(beginTime, endTime, breakTime);

    document.getElementById(`summ-${dayOfMonth}`).innerHTML = summ_value;
}

function calcTime(beginTime, endTime, breakTime) {

    let beginpaket = beginTime.split(":");
    let begin_minuten = parseInt(beginpaket[0]) * 60;
    let sumBegin = begin_minuten + parseInt(beginpaket[1]);

    let endpaket = endTime.split(":");
    let end_minuten = parseInt (endpaket[0]) * 60;
    let sumEnd = end_minuten + parseInt(endpaket[1]);

    let breakpaket = breakTime.split(":");
    let break_minuten = parseInt (breakpaket[0]) * 60;
    let sumBreak = break_minuten + parseInt(breakpaket[1]);

    let summe = sumEnd - sumBegin;

    if (sumBreak > 30) {
        summe = sumEnd - sumBegin - sumBreak;
    } else {
        if (summe > 360) {
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
    if (isNaN(stunden1)){ 
        stunden1 = "00"
    }
    if (isNaN(minuten)){
        minuten = "00"
    }

    let sumString = (`${stunden1}:${minuten}`)

    return sumString;
}

function rechnen() {

    for (let dayOfMonth = 1; dayOfMonth < 31; dayOfMonth++) {
        if (dayOfMonth < 10) {
            dayOfMonth = (`${test}`) + dayOfMonth;
        }

        let beginTime = document.getElementById(`timeFrom-${dayOfMonth}`).value;
        let endTime = document.getElementById(`timeTo-${dayOfMonth}`).value;
        let breakTime = document.getElementById(`break-${dayOfMonth}`).value;
        let summ_value = calcTime(beginTime, endTime, breakTime);

        document.getElementById(`summ-${dayOfMonth}`).innerHTML = summ_value;
    }
}

function ausfuehren() {

    for (let dayOfMonth = 1; dayOfMonth < 31; dayOfMonth++) {
        if (dayOfMonth < 10) {
            dayOfMonth = (`${test}`) + dayOfMonth;
        }

        document.getElementById(`timeFrom-${dayOfMonth}`).addEventListener("blur", calcTime2);
        document.getElementById(`timeTo-${dayOfMonth}`).addEventListener("blur", calcTime2);
        document.getElementById(`break-${dayOfMonth}`).addEventListener("blur", calcTime2);
    }
}

ausfuehren();

//document.getElementById("Rechner").addEventListener("click", rechnen);
