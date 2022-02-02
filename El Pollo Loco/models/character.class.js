
class Character extends MovableObject{
    height = 300;
    width = 200;
    y = 60;
    constructor(){ // constructor Wird ausgeführt sobald geladen
        super().loadImage('./img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png'); //Wenn ein Konstruktor verwendet wird, muss das super Schlüsselwort verwendet werden, bevor das this Schlüsselwort verwendet werden kann. Mit dem super Schlüsselwort kann man auch Funktionen im Vaterobjekt ausführen.
    }
    jump(){


    }
}
