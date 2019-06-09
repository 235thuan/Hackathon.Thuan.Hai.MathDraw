
let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");
let value_Width = 800; // canvas size
let value_Height = 800; // canvas size
let small_width = value_Width / 40;
let small_height = value_Height / 40;
let myBasement, myCoordinate, myPlanetA, myPlanetB, myLine, myLine2;
let sizeXbasement = 50;
let sizeYbasement = 50;
let coorXbasement = value_Height / 2 - 25;
let coorYbasement = value_Width / 2 - 25;
let coorX = value_Width / 2;
let coorY = value_Height / 2;
let dotSize = 1;
let distanceUnit = 16;

let value_a, value_b, value_x, value_y;
let run = 0;
let myLines = [];

function startGame() {
    myBasement = new Basement(coorXbasement, coorYbasement, sizeXbasement, sizeYbasement);
    myCoordinate = new Basement(coorX, coorY, 0, 0);
    myLine = new Basement(coorX, coorY, dotSize, dotSize);
    myLine2 = new Basement(coorX, coorY, dotSize, dotSize);
    myLines.push(myLine);
    myLines.push(myLine2);
    myCoordinate.drawCoordinate();
    myPlanetA = new Planet(coorX, coorY, 20, 20);

    value_b = parseFloat(document.getElementById("b").value);
    value_a = parseFloat(document.getElementById("a").value);
    value_a = value_a - coorX;
    value_b = value_b - coorX;
    // myLine.drawLine(value_a,value_b);

    // myPlanetA.draw();
    stop(run);
    setRedraw(true);

}

function getY(x) {
    return value_a * x + value_b;
}

function setRedraw(bool) {
    if (bool) {
        let _x = coorX;
        let _y = coorY;
        let _x2 = coorX;
        let _y2 = coorY;
        run = setInterval(function () {
            ctx.clearRect(0, 0, value_Width, value_Height);
            myCoordinate.drawCoordinate();

            _x += (value_a) / 100;
            _y += (value_b) / 100;

            _x2 -= (value_a) / 100;
            _y2 -= (value_b) / 100;
            myLine.drawLine(_x, _y);
            myLine2.drawLine(_x2, _y2);
            console.log(_x, _y);

            // for (let i = 0; i < myLines.length; i++) {
            //     myLines[i].drawLine(_x,_y);
            // }

        }, 100)
    } else {
        stop(run);
    }

}

function stop(run) {
    clearInterval(run);
}


