function calculate() {
    var celc = document.getElementById("C");
    var fahr = document.getElementById("F");

    var celcResult = document.getElementById('celc');
    var fahrResult = document.getElementById('fahr');

    if (celc != null && celc.value != '') {
        celcResult.innerText = celc.value + " C to " + Math.round((parseInt(celc.value) * 1.8 + 32)).toString() + " F";
    }
    if (fahr != null && fahr.value != '') {
        fahrResult.innerHTML = fahr.value + " F to " + (Math.round((parseInt(fahr.value) - 32) / 1.8)).toString() + " C";
    }
}