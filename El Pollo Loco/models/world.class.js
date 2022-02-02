
//let ist in unterklassen nicht mehr nötig
class World {
    
    character = new Character();
    enemies = [
    new Chicken(),
    new Chicken(),
    new Chicken(),
    ];
    clouds = [
        new Cloud()
    ];
    backgroundObjects = [
        new BackgroundObject('./img/5.Fondo/Capas/5.cielo_1920-1080px.png', 0),
        new BackgroundObject('./img/5.Fondo/Capas/2.Fondo2/1.png',0),
        new BackgroundObject('./img/5.Fondo/Capas/3.Fondo3/1.png',0),
        new BackgroundObject('./img/5.Fondo/Capas/1.suelo-fondo1/1.png', 0),
        
        
    ];

    canvas;
    ctx;

    constructor(canvas){
        this.ctx = canvas.getContext('2d'); //canvas.getContext('2d) definiert canvas als 2d zeichenebene. this deklariert (ctx) als ein objekt
        this.canvas = canvas;
        this.draw();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.addObjectsToMap(this.backgroundObjects);
        this.addObjectsToMap(this.clouds);
        this.addToMap(this.character);
        this.addObjectsToMap(this.enemies);

        //draw loop
        let self = this; //weil this in requestAnimationFrame nicht funktioniert
        requestAnimationFrame(function() {
            self.draw();
        });
    }
    
    //for each funktioniert immer nur im array, also bie merheren gegenständen
    addObjectsToMap(objects){
        objects.forEach(o => {
            this.addToMap(o);
        });
    }
    //für nicht arrays, zb pepe 
    addToMap(mo) {
        this.ctx.drawImage(mo.img, mo.x, mo.y,mo.width ,mo.height);
    }


}



