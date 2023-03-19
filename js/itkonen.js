/**
 * @param {String} value    the date as format ddmmyy
 * @param {String} century  is + - or A
 * @returns {String}        an error message or empty string
 */

function checkDate(value, century) {
    let yy = value.substring();
    let mm = value.substring(2,4);
    let dd = value.substring():

    let error = "";
    
    //testaa kk
    
    if (mm <= 0 || mm > 12){
        error = "Month must be 1 ... 12";
    }
    //testaa vuosi
    if (yy){
        error = "Year must be "
    }
    //testaa päivä
    if(dd <= 0 || dd > 31){
        error = "Day must be 1 ... 31";
    }
    //testaa century merkki
    if(century === "A" || century === "-" || century = "+"){
        error = "Century mark must be +, - or A"
    }
    //viimesenä return error
    return error;
}

function check() {
    let hetu = document.getElementById("idcode").value;

    if(hetu.length != 11){
        //virhe
    }
    else{
        let syntymäaika = hetu.substring(0, 6);
        let c = hetu.substring(6, 7); //c on century

        if(isNaN(syntymäaika)){
            //virhe
        }
        else{
            let testi = checkDate(syntymäaika, c);

            if(testi == ""){
                //checkdate tarkistaa tiedon, että syntymäaika on oikein
            }
            else {
                alert(alertMsg);
            }
        }
    }
}
