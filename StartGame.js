let value_Width= 500;
let value_Height= 400;
let myBasement,myCoordinateY,myCoordinateX,myArrow;
let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");
function startGame() {
    myBasement = new Basement(value_Height/2-25, value_Height/2-25, 50, 50);
    myCoordinateY= new CoordinateY(100,100,10,10);
    myCoordinateX= new CoordinateX(100,100,10,10);
    myArrow=new Arrow(100,100,10,10);
    myCoordinateY.draw();
    myCoordinateX.draw();
    myBasement.draw();
    myArrow.draw();
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

function CoordinateY(x,y,width,height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.draw = function () {
        ctx.beginPath();
        ctx.shadowBlur = 20;
        ctx.shadowColor = "yellow";
        ctx.moveTo(value_Height/2,0);
        ctx.lineTo(value_Height/2,value_Width*1);
        ctx.strokeStyle="white";
        ctx.stroke();
    }
}

function CoordinateX(x,y,width,height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.draw = function () {
        ctx.beginPath();
        ctx.shadowBlur = 20;
        ctx.shadowColor = "yellow";
        ctx.moveTo(0,value_Height/2);
        ctx.lineTo(value_Width,value_Height/2);
        ctx.strokeStyle="white";
        ctx.stroke();
    }
}

function Arrow(x,y,width,height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.draw = function () {
        ctx.beginPath();
        ctx.shadowBlur = 20;
        ctx.shadowColor = "yellow";
        ctx.moveTo(400,200);
        ctx.lineTo(value_Width,value_Height-150);
        ctx.strokeStyle="white";
        ctx.stroke();
    }
}

