/*
Elemente hinzufügen mit splice()
Um Elemente hinzuzufügen, müssen wir sie als dritten, vierten, fünften Parameter (abhängig davon, wie viele hinzugefügt werden sollen) zur splice() Methode angeben:

Syntax: array.splice(index, Anzahl der zu löschenden Elemente, Element, Element);
Verwende den Code aus dem Kommentarbereich.
Füge Fotos mit der Nummer 008-010 hinzu.
Gib array in der Konsole aus.
Fügen Fotos mit der Nummer 014-019 hinzu.
Gib array in der Konsole aus.
Füge den Rest(000-019) der Fotos hinzu, so dass sie numerisch angezeigt werden.
Gib array in der Konsole aus.
*/


let array = ["imageTeilnehmer000supercode.jpg", "imageTeilnehmer001supercode.jpg"];
array.splice(2, 0, "imageTeilnehmer008supercode.jpg", "imageTeilnehmer009supercode.jpg", "imageTeilnehmer010supercode.jpg");
console.log(array);





let array1 = ["imageTeilnehmer000supercode.jpg", "imageTeilnehmer001supercode.jpg", "imageTeilnehmer008supercode.jpg", "imageTeilnehmer009supercode.jpg", "imageTeilnehmer010supercode.jpg"];

array1.splice(5, 0, "imageTeilnehmer014supercode.jpg", "imageTeilnehmer015supercode.jpg",
    "imageTeilnehmer016supercode.jpg", "imageTeilnehmer017supercode.jpg", "imageTeilnehmer018supercode.jpg",
    "imageTeilnehmer019supercode.jpg");
console.log(array1);





let array2 = ["imageTeilnehmer000supercode.jpg", "imageTeilnehmer001supercode.jpg", "imageTeilnehmer008supercode.jpg", "imageTeilnehmer009supercode.jpg", "imageTeilnehmer010supercode.jpg", "imageTeilnehmer014supercode.jpg", "imageTeilnehmer015supercode.jpg",
    "imageTeilnehmer016supercode.jpg", "imageTeilnehmer017supercode.jpg", "imageTeilnehmer018supercode.jpg",
    "imageTeilnehmer019supercode.jpg"];

array2.splice(2, 0, "imageTeilnehmer002supercode.jpg", "imageTeilnehmer003supercode.jpg", "imageTeilnehmer004supercode.jpg", "imageTeilnehmer005supercode.jpg", "imageTeilnehmer006supercode.jpg", "imageTeilnehmer007supercode.jpg");
console.log(array2);



let array3 = ["imageTeilnehmer000supercode.jpg", "imageTeilnehmer001supercode.jpg", "imageTeilnehmer002supercode.jpg", "imageTeilnehmer003supercode.jpg", "imageTeilnehmer004supercode.jpg", "imageTeilnehmer005supercode.jpg", "imageTeilnehmer006supercode.jpg", "imageTeilnehmer007supercode.jpg", "imageTeilnehmer008supercode.jpg", "imageTeilnehmer009supercode.jpg", "imageTeilnehmer010supercode.jpg", "imageTeilnehmer014supercode.jpg", "imageTeilnehmer015supercode.jpg",
    "imageTeilnehmer016supercode.jpg", "imageTeilnehmer017supercode.jpg", "imageTeilnehmer018supercode.jpg",
    "imageTeilnehmer019supercode.jpg"];

array3.splice(11, 0, "imageTeilnehmer011supercode.jpg", "imageTeilnehmer012supercode.jpg",
    "imageTeilnehmer013supercode.jpg");
console.log(array3);