/*
In dieser Übung lernen wir, wie man die Nummern 0-99 aufsteigend sortiert.
Sortiere die Nummern aufsteigend.
Der Code steht im Kommentar.
Verwende den Befehl sort() und Google um die Aufgabe korrekt auszuführen.
Überprüfe das Ergebnis in der Konsole.
*/


const numArray1 = [36, 24, 22, 3, 2, 98, 88, 99, 10, 54, 68, 70];
numArray1.sort(function(a,b) {
    return a - b;
});
console.log(numArray1);
