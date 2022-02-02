
class MovableObject {
    x = 80;
    y = 200;
    img;
    height = 150;
    width = 100;

    //LoadImage('img/test.png');
    loadImage(path) {
        this.img = new Image(); // this.img = document.getElementById('image') <img id="image">
        this.img.src = path;
    }

    moveRight(){
        console.log('moving right');
    }

    

    moveLeft(){
        
    }
}