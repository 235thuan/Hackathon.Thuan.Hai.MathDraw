function Basement (x,y,width,height) {
    this.x=x;
    this.y=y;
    this.width=width;
    this.height=height;
    this.basementImage = new Image();
    this.basementImage.src= "/image/imagename"; //link anh
    this.draw = function() {
        ctx= myGameArea.context;
        let x=this.x;
        let y=this.y;
        ctx.shadowBlur = 20;
        ctx.shadowColor = "yellow";
        ctx.drawImage(this.image, x, y, width, height);
    }
}