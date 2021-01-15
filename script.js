let i;
let audio = new Audio("Jingle Bells Kevin MacLeod (No Copyright Music).mp3");
function przesuwanie() {
    document.getElementById('pagestyle').setAttribute("href", "style2.css");
    if (i !== 1) {
        audio.play();
        document.getElementById('kartka').innerHTML = "Każdy już czym prędzej bieży,\n" +
            "        by dołączyć do pasterzy.\n" +
            "        I ja spieszę z życzeniami,\n" +
            "        bo nie mogę być tam z Wami.\n" +
            "        Zdrowia, szczęścia, pomyślności\n" +
            "        i niech dobro wśród Was gości.\n" +
            "        I niech Boga wielka moc\n" +
            "        na Was spłynie w świętą noc.\n" +
            "\n" +
            "        Niech te święta spokój Wam przyniosą,\n" +
            "        a radość chodzi za Wami krok w krok.\n" +
            "        Niechaj dostarczą tyle optymizmu,\n" +
            "        by starczyło na cały Nowy Rok. ";
        let start = Date.now();
        let timer = setInterval(function () {
            let timePassed = Date.now() - start;
            banka.style.top = timePassed / 2 + 'px';
            bankazlt.style.top = timePassed / 5 + 'px';
            bankaczw.style.top = timePassed + 'px';
            choinka.style.paddingBottom = timePassed + 'px';
            kartka.style.opacity = timePassed / 2 + '%';
            kartka2.style.opacity = timePassed / 2 + '%';
            if (timePassed > 400) clearInterval(timer);
        },);
        i = 1;
    }
}