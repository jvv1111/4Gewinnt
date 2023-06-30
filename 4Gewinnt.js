//Maliks Code:
const spielfeld = ["arr0", "arr1", "arr2", "arr3", "arr4", "arr5", "arr6", "arr7", "arr8", "arr9", "arr10", "arr11", "arr12", "arr13",
    "arr14", "arr15", "arr16", "arr17", "arr18", "arr19", "arr20", "arr21", "arr22", "arr23", "arr24", "arr25", "arr26", "arr27", "arr28",
    "arr29", "arr30", "arr31", "arr32", "arr33", "arr34", "arr35", "arr36", "arr37", "arr38", "arr39", "arr40", "arr41"];

function freierIndex(spielfeld, index) {

    for (let i = index; i <= index + 5; i++) {
        const id = spielfeld[i];
        let element = document.getElementById(id);
        const src = element.getAttribute("src");
        if (src === "kreis_nichts.png") {
            return i;
        }
    } return -1;
}

const dreieck1 = document.getElementById("dreieck1");
dreieck1.addEventListener("click", () => setzeSpalte(1));

const dreieck2 = document.getElementById("dreieck2");
dreieck2.addEventListener("click", function () { setzeSpalte(2); });

document.getElementById("dreieck3").addEventListener("click", () => setzeSpalte(3));

document.getElementById("dreieck4").addEventListener("click", () => setzeSpalte(4));

document.getElementById("dreieck5").addEventListener("click", () => setzeSpalte(5));

document.getElementById("dreieck6").addEventListener("click", () => setzeSpalte(6));

document.getElementById("dreieck7").addEventListener("click", () => setzeSpalte(7));

const spieler = document.getElementById("spieler");

function setzeSpalte(spalte) {

    const index = (spalte - 1) * 6;
    // 1. index berechnen 
    // 2. int index = (eingabe - 1) * 6; 
    // 3. code block mit index ausführen 

    const frei = freierIndex(spielfeld, index);
    //if (frei == -1) 

    const element = document.getElementById(spielfeld[frei]);

    if (spieler.textContent === "Spieler 1 ist dran") {
        ("tr.dreieck th.sp1Dran");
        element.setAttribute(`src`, `kreis_rot.png`);
        if (gewinnMöglichkeiten(spielfeld, "kreis_rot.png")) {
            spieler.textContent = "SP1 GEWONNEN";
            return;
        }
        spieler.textContent = "Spieler 2 ist dran";

    } else if (spieler.textContent === "Spieler 2 ist dran") {
        ("tr.dreieck th.sp2Dran");
        element.setAttribute(`src`, `kreis_gelb.png`);
        if (gewinnMöglichkeiten(spielfeld, `kreis_gelb.png`)) {
            spieler.textContent = "SP2 GEWONNEN";
            return;
        }
        spieler.textContent = "Spieler 1 ist dran";
    }

    if (freierIndex(spielfeld, index) === -1) {
        const dreieckId = "dreieck" + spalte;
        const dreieck = document.getElementById(dreieckId);
        dreieck.classList.add("spalte-deaktiviert");
        pruefeUnentschieden();
    }
}

function gewinnMöglichkeiten(spielfeld, spielerBild) {

    /*Gewinner Vertikal*/
    for (let i = 0; i <= 36; i = i + 6) {
        if ((hatSpielerFeldBelegt(i, spielerBild) && hatSpielerFeldBelegt(i + 1, spielerBild) && hatSpielerFeldBelegt(i + 2, spielerBild) && hatSpielerFeldBelegt(i + 3, spielerBild))
            || (hatSpielerFeldBelegt(i + 1, spielerBild) && hatSpielerFeldBelegt(i + 2, spielerBild) && hatSpielerFeldBelegt(i + 3, spielerBild) && hatSpielerFeldBelegt(i + 4, spielerBild))
            || (hatSpielerFeldBelegt(i + 2, spielerBild) && hatSpielerFeldBelegt(i + 3, spielerBild) && hatSpielerFeldBelegt(i + 4, spielerBild) && hatSpielerFeldBelegt(i + 5, spielerBild))) {
            return true;
        }
    }

    /*gewinnerWagerecht*/
    for (let i = 0; i <= 23; i++) {
        if (hatSpielerFeldBelegt(i, spielerBild) && hatSpielerFeldBelegt(i + 6, spielerBild) &&
            hatSpielerFeldBelegt(i + 12, spielerBild) && hatSpielerFeldBelegt(i + 18, spielerBild)) {
            return true;
        }
    }
                                                                                          
    /*gewinnerDiagonal*/
    if (hatSpielerFeldBelegt(0, spielerBild) && hatSpielerFeldBelegt(7, spielerBild) && hatSpielerFeldBelegt(14, spielerBild) && hatSpielerFeldBelegt(21, spielerBild)) {
        return true;
    } else if (hatSpielerFeldBelegt(7, spielerBild) && hatSpielerFeldBelegt(14, spielerBild) && hatSpielerFeldBelegt(21, spielerBild) && hatSpielerFeldBelegt(18, spielerBild)) {
        return true;
    } else if (hatSpielerFeldBelegt(14, spielerBild) && hatSpielerFeldBelegt(21, spielerBild) && hatSpielerFeldBelegt(28, spielerBild) && hatSpielerFeldBelegt(35, spielerBild)) {
        return true;
    } else if (hatSpielerFeldBelegt(1, spielerBild) && hatSpielerFeldBelegt(8, spielerBild) && hatSpielerFeldBelegt(15, spielerBild) && hatSpielerFeldBelegt(22, spielerBild)) {
        return true;
    } else if (hatSpielerFeldBelegt(8, spielerBild) && hatSpielerFeldBelegt(15, spielerBild) && hatSpielerFeldBelegt(22, spielerBild) && hatSpielerFeldBelegt(29, spielerBild)) {
        return true;
    } else if (hatSpielerFeldBelegt(2, spielerBild) && hatSpielerFeldBelegt(9, spielerBild) && hatSpielerFeldBelegt(16, spielerBild) && hatSpielerFeldBelegt(23, spielerBild)) {
        return true;
    } else if (hatSpielerFeldBelegt(6, spielerBild) && hatSpielerFeldBelegt(13, spielerBild) && hatSpielerFeldBelegt(20, spielerBild) && hatSpielerFeldBelegt(27, spielerBild)) {
        return true;
    } else if (hatSpielerFeldBelegt(13, spielerBild) && hatSpielerFeldBelegt(20, spielerBild) && hatSpielerFeldBelegt(27, spielerBild) && hatSpielerFeldBelegt(34, spielerBild)) {
        return true;
    } else if (hatSpielerFeldBelegt(20, spielerBild) && hatSpielerFeldBelegt(27, spielerBild) && hatSpielerFeldBelegt(34, spielerBild) && hatSpielerFeldBelegt(41, spielerBild)) {
        return true;
    } else if (hatSpielerFeldBelegt(12, spielerBild) && hatSpielerFeldBelegt(19, spielerBild) && hatSpielerFeldBelegt(26, spielerBild) && hatSpielerFeldBelegt(33, spielerBild)) {
        return true;
    } else if (hatSpielerFeldBelegt(19, spielerBild) && hatSpielerFeldBelegt(26, spielerBild) && hatSpielerFeldBelegt(33, spielerBild) && hatSpielerFeldBelegt(40, spielerBild)) {
        return true;
    } else if (hatSpielerFeldBelegt(18, spielerBild) && hatSpielerFeldBelegt(25, spielerBild) && hatSpielerFeldBelegt(32, spielerBild) && hatSpielerFeldBelegt(39, spielerBild)) {
        return true;
    } else if (hatSpielerFeldBelegt(38, spielerBild) && hatSpielerFeldBelegt(33, spielerBild) && hatSpielerFeldBelegt(28, spielerBild) && hatSpielerFeldBelegt(23, spielerBild)) {
        return true;
    } else if (hatSpielerFeldBelegt(37, spielerBild) && hatSpielerFeldBelegt(32, spielerBild) && hatSpielerFeldBelegt(27, spielerBild) && hatSpielerFeldBelegt(22, spielerBild)) {
        return true;
    } else if (hatSpielerFeldBelegt(36, spielerBild) && hatSpielerFeldBelegt(31, spielerBild) && hatSpielerFeldBelegt(26, spielerBild) && hatSpielerFeldBelegt(21, spielerBild)) {
        return true;
    } else if (hatSpielerFeldBelegt(32, spielerBild) && hatSpielerFeldBelegt(27, spielerBild) && hatSpielerFeldBelegt(22, spielerBild) && hatSpielerFeldBelegt(17, spielerBild)) {
        return true;
    } else if (hatSpielerFeldBelegt(31, spielerBild) && hatSpielerFeldBelegt(26, spielerBild) && hatSpielerFeldBelegt(21, spielerBild) && hatSpielerFeldBelegt(16, spielerBild)) {
        return true;
    } else if (hatSpielerFeldBelegt(30, spielerBild) && hatSpielerFeldBelegt(25, spielerBild) && hatSpielerFeldBelegt(20, spielerBild) && hatSpielerFeldBelegt(15, spielerBild)) {
        return true;
    } else if (hatSpielerFeldBelegt(26, spielerBild) && hatSpielerFeldBelegt(21, spielerBild) && hatSpielerFeldBelegt(16, spielerBild) && hatSpielerFeldBelegt(11, spielerBild)) {
        return true;
    } else if (hatSpielerFeldBelegt(25, spielerBild) && hatSpielerFeldBelegt(20, spielerBild) && hatSpielerFeldBelegt(15, spielerBild) && hatSpielerFeldBelegt(10, spielerBild)) {
        return true;
    } else if (hatSpielerFeldBelegt(24, spielerBild) && hatSpielerFeldBelegt(19, spielerBild) && hatSpielerFeldBelegt(14, spielerBild) && hatSpielerFeldBelegt(9, spielerBild)) {
        return true;
    } else if (hatSpielerFeldBelegt(20, spielerBild) && hatSpielerFeldBelegt(15, spielerBild) && hatSpielerFeldBelegt(10, spielerBild) && hatSpielerFeldBelegt(5, spielerBild)) {
        return true;
    } else if (hatSpielerFeldBelegt(19, spielerBild) && hatSpielerFeldBelegt(14, spielerBild) && hatSpielerFeldBelegt(9, spielerBild) && hatSpielerFeldBelegt(4, spielerBild)) {
        return true;
    } else if (hatSpielerFeldBelegt(18, spielerBild) && hatSpielerFeldBelegt(13, spielerBild) && hatSpielerFeldBelegt(8, spielerBild) && hatSpielerFeldBelegt(3, spielerBild)) {
        return true;
    }
    return false;
}

function hatSpielerFeldBelegt(index, spielerBild) {
    return document.getElementById(spielfeld[index]).getAttribute("src") === spielerBild;
}

// jad's code

// Neustart-Button
const neustartButton = document.getElementById("neustartButton");
neustartButton.addEventListener("click", neuesSpiel);

function neuesSpiel() {
  // Zurücksetzen des Spielfelds
  for (let i = 0; i < spielfeld.length; i++) {
    const element = document.getElementById(spielfeld[i]);
    element.setAttribute("src", "kreis_nichts.png");
  }

  // Zurücksetzen des Spieler-Texts
  spieler.textContent = "Spieler 1 ist dran";

  // Zurücksetzen der deaktivierten Spalten
  const spalten = document.getElementsByClassName("spalte-deaktiviert");
  for (let i = spalten.length - 1; i >= 0; i--) {
    spalten[i].classList.remove("spalte-deaktiviert");
  }
}

function pruefeUnentschieden() {
  const alleSpaltenDeaktiviert = document.getElementsByClassName("spalte-deaktiviert").length === 7;
  if (alleSpaltenDeaktiviert) {
    spieler.textContent = "Unentschieden";
  }
}
