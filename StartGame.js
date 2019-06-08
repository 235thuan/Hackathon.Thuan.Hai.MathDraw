let value_Width= 500;
let value_Height= 400;
let myBasement,myCoordinate,myArrow;
let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");
let sizeXbasement=50;
let sizeYbasement=50;
let coorXbasement=value_Height/2-25;
let coorYbasement=value_Height/2-25;

function startGame() {
    myBasement = new Basement(coorXbasement, coorYbasement, sizeXbasement, sizeYbasement);
    myCoordinate= new Coordinate(100,100,10,10);
    myCoordinate.draw();
    myBasement.draw();
    myGameArea.start();
}

let myGameArea = {

    start: function () {
        this.canvas.width = value_Width;
        this.canvas.height = value_Height;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    },
};

function Basement (x,y,width,height) {
    this.x=x;
    this.y=y;
    this.width=width;
    this.height=height;
    this.image = new Image();
    this.image.src= "explosive3.png"; //link anh
    this.draw = function() {
        let x=this.x;
        let y=this.y;
        ctx.shadowBlur = 20;
        ctx.shadowColor = "yellow";
        ctx.drawImage(this.image, x, y, width, height);
    }
}

function Coordinate(x,y,width,height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.draw = function () {
        ctx.beginPath();
        ctx.shadowBlur = 20;
        ctx.shadowColor = "yellow";
        //oy
        ctx.moveTo(value_Height/2,0);
        ctx.lineTo(value_Height/2,value_Width*1);
        //ox
        ctx.moveTo(0,value_Height/2);
        ctx.lineTo(value_Width,value_Height/2);
        //arrow
        ctx.moveTo(380,190);
        ctx.lineTo(value_Width,value_Height-150);
        ctx.moveTo(380,210);
        ctx.lineTo(value_Width,value_Height-250);
        ctx.moveTo(190,20);
        ctx.lineTo(value_Height/2,0);
        ctx.moveTo(210,20);
        ctx.lineTo(value_Height/2,0);
        ctx.strokeStyle="white";
        ctx.stroke();
    }
}

function PlanetA(x,y,width,height) {
    this.x=x;
    this.y=y;
    this.width=width;
    this.height=height;
    this.image = new Image();
    this.image.src= "explosive3.png"; //link anh
    this.draw = function() {
        let x=this.x;
        let y=this.y;
        ctx.shadowBlur = 20;
        ctx.shadowColor = "yellow";
        ctx.drawImage(this.image, x, y, width, height);
    }

}



