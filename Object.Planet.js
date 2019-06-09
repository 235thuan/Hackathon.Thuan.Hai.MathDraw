function Planet(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.image = new Image();
    this.image.src = "explosive4.png"; //link anh
    this.speedX = 1;
    this.speedY = 0;
    this.draw = function () {
        let x = this.x;
        let y = this.y;
        x+=this.speedX;
        y+=this.speedY;
        ctx.shadowBlur = 20;
        ctx.shadowColor = "yellow";
        ctx.drawImage(this.image, x, y, width, height);
    };
}
// function Move (x,y,width,hei) {
//     let speedX=1;
//     let speedY=1;
//     let x = coorX ;
//     let y = coorY ;
//     x += speedX;
//     y += speedY;
//     let image= new Image();
//     image.src="explosive4.png";
//     ctx.shadowBlur = 20;
//     ctx.shadowColor = "yellow";
//     ctx.drawImage(image, x, y, width, height)
//
// }

