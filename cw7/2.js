function onLoad() {
    var article = document.createElement("div");
    article.innerText = "Chiny chcą aby już za nie dalej niż dwa lata Ziemia zyskała nowego satelitę. Tym razem jednak nie ma" +
        "to być satelita komunikacyjny, szpiegowski, czy naukowy. Ma to być kolega naszego naturalnego satelity, a" +
        "więc Księżyca. Plany potwierdził rząd Chin. Wu Chunfeng z zarządu Chengdu Aerospace Science and Technology" +
        "Microelectronics System Research Insitute zapowiedział, że na orbicie ziemskiej nowy satelita m zostać" +
        "umieszczony w 2020 roku. Dla Ziemian jego obecność ma oznaczać dodatkowe źródło światła, ale warto" +
        "zauważyć, że będą z niego mogli korzystać tylko mieszkańcy chińskiego miasta Chengdu. Jeżeli założenia" +
        "projektu zostaną zrealizowane, to Chiny do 2022 planują umieścić na orbicie trzy kolejne satelity.<h1>";

    setTimeout(function () {
        document.body.append(article);
    }, 5000);
}