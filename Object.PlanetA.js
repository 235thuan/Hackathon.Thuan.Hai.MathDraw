function Basement (x,y,width,height) {
    this.x=x;
    this.y=y;
    this.width=width;
    this.height=height;
    this.basementImage = new Image();
    this.basementImage.src= "/image/imagename"; //link anh
    this.draw = function() {
        ctx= myGameArea.context;
        let x=this.x+(Math.round(Math.random()*100));
        let y=this.y+(Math.round(Math.random()*100));
        ctx.shadowBlur = 20;
        ctx.shadowColor = "yellow";
        ctx.drawImage(this.image, x, y, width, height);
    }
}