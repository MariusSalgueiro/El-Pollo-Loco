
class Cloud extends MovableObject {
    y = 50;
    width = 500;
    constructor(){
        super().loadImage('./img/5.Fondo/Capas/4.nubes/2.png');
        this.x = Math.random() * 350;
        
        
    }
}