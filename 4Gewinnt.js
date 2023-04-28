const spielfeld = ["arr0", "arr1", "arr2", "arr3", "arr4", "arr5", "arr6", "arr7", "arr8", "arr9", "arr10", "arr11", "arr12", "arr13", "arr14", "arr15", "arr16", "arr17", "arr18", "arr19", "arr20",
    "arr21", "arr22", "arr23", "arr24", "arr25", "arr26", "arr27", "arr28", "arr29", "arr30", "arr31", "arr32", "arr33", "arr34", "arr35", "arr36", "arr37", "arr38", "arr39", "arr40", "arr41"];

function freierIndex(spielfeld, index) {
    for (let i = index; i <= index + 5; i++) {
        const id = spielfeld[i];
        let element = document.getElementById(id);
        const src = element.getAttribute("src");
        if (src === "kreis_nichts.png") {
            return i;
        }
    }
    return -1;
}

const dreieck1 = document.getElementById("dreieck1");
dreieck1.addEventListener("click", () => setzeSpalte(1));

const dreieck2 = document.getElementById("dreieck2");
dreieck2.addEventListener("click", function () {
    setzeSpalte(2);

});

document.getElementById("dreieck3").addEventListener("click", () => setzeSpalte(3));

document.getElementById("dreieck4").addEventListener("click", () => setzeSpalte(4));

document.getElementById("dreieck5").addEventListener("click", () => setzeSpalte(5));

document.getElementById("dreieck6").addEventListener("click", () => setzeSpalte(6));

document.getElementById("dreieck7").addEventListener("click", () => setzeSpalte(7));

function setzeSpalte(spalte) {
    const index = (spalte - 1) * 6;

    // 1. index berechnen
    // 2. int index = (eingabe - 1)  * 6;
    // 3. code block mit index ausführen

    const frei = freierIndex(spielfeld, index);
    //if (frei == -1)
    //    System.out.println("Spalte voll neue eingabe");

    const element = document.getElementById(spielfeld[frei]);
    element.setAttribute(`src`, `kreis_gelb.png`);

    const spieler = document.getElementById("spieler");
    spieler.textContent = "Spieler 2 ist dran";
}



