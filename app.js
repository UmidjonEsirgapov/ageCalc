function umid() {
    let today = new Date();
    const formula = 8.64e+7;


    let day = document.getElementById("day").value;
    let month = document.getElementById("month").value;
    let year = document.getElementById("year").value;

    let birthday = new Date(month + ', ' + day + ',' + year);
    let ageMillisecond = today.getTime() - birthday.getTime();

    let ageDay = Math.round(ageMillisecond / formula);

    document.getElementById("outputDay").innerHTML = ageDay;


    console.log(ageDay)
}


setInterval(umid, 1000);
