function calculate() {
    var celc = document.getElementById("C");
    var fahr = document.getElementById("F");

    if (celc != null) {
        var celcResult = document.createElement("div");
        celcResult.innerHTML = "<h4>" + celc.value + " C to " + (parseInt(celc.value) * 1.8 + 32).toString() + " F </h4>";
        document.body.append(celcResult);
    }
    if (fahr != null) {
        var fahrResult = document.createElement("div");
        fahrResult.innerHTML = "<h4>" + fahr.value + " F to " + (Math.round((parseInt(fahr.value) - 32) / 1.8)).toString() + " C </h4>";
        document.body.append(fahrResult);
    }
}