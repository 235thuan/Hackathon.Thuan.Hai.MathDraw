function Basement(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.image = new Image();
    this.image.src = "explosive3.png"; //link anh
    this.dot = new Image();
    this.dot.src = "explosive3.png";
    this.drawBasement = function () {
        let x = this.x;
        let y = this.y;
        let width = this.width;
        let height = this.height;

        ctx.shadowBlur = 20;
        ctx.shadowColor = "yellow";
        ctx.drawImage(this.image, x, y, width, height);
    };

    this.drawCoordinate = function () {
        //up
        let locateX = this.x - small_width / 5;
        let locateXa = this.x + small_width / 5;
        //side
        let locateY = this.y - small_height / 5;
        let locateYa = this.y + small_height / 5;
        let locateXb = value_Width - small_width;
        for (let i = 0; i < value_Width / 16; i++) {
            let a = i * distanceUnit;
            if (a > coorX) {
                for (let j = 1; j < 25; j++) {
                    let distanceAwayFromOyJ = locateX - small_width + 5;
                    let distanceAwayFromStringJ = coorY + 17 * j;
                    ctx.font = "10px Arial";
                    ctx.fillStyle = "white";
                    ctx.fillText("-" + j.toString(), distanceAwayFromOyJ, distanceAwayFromStringJ);
                }
                for (let k = 1; k < 20; k++) {
                    let distanceAwayFromOyK = locateX - small_width + 5;
                    let o = 20 - k;
                    let distanceAwayFromStringK = 20 * o + 10;
                    ctx.font = "10px Arial";
                    ctx.fillStyle = "white";
                    ctx.fillText(k.toString(), distanceAwayFromOyK, distanceAwayFromStringK);
                }
            }
            ctx.beginPath();
            ctx.shadowBlur = 0;
            ctx.shadowColor = "yellow";
            ctx.moveTo(locateX, a);
            ctx.lineTo(locateXa, a);
            ctx.strokeStyle = "white";
            ctx.stroke();

        }
        for (let i = 0; i < value_Height / 16; i++) {
            let a = i * distanceUnit;

            if (a > coorX) {
                for (let j = 1; j < 22; j++) {
                    let distanceAwayFromOyJ = locateYa + small_height - 6;
                    let distanceAwayFromStringJ = coorX + 17 * j;
                    ctx.font = "10px Arial";
                    ctx.fillStyle = "white";
                    ctx.fillText(j.toString(), distanceAwayFromStringJ, distanceAwayFromOyJ);
                }
                for (let k = 2; k < 25; k++) {
                    let distanceAwayFromOyK = locateYa + small_height - 6;
                    let o = 20 - k;
                    let distanceAwayFromStringK = 20 * o;
                    ctx.font = "10px Arial";
                    ctx.fillStyle = "white";
                    ctx.fillText("-" + k.toString(), distanceAwayFromStringK, distanceAwayFromOyK);
                }
            }

            ctx.beginPath();
            // ctx.shadowBlur = 10;
            // ctx.shadowColor = "yellow";
            ctx.moveTo(a, locateY);
            ctx.lineTo(a, locateYa);
            ctx.strokeStyle = "white";
            ctx.stroke();
        }
        ctx.beginPath();
        ctx.shadowBlur = 20;
        ctx.shadowColor = "yellow";
        //oy
        ctx.moveTo(0, this.y);
        ctx.lineTo(value_Width, this.y);
        //ox
        ctx.moveTo(this.x, 0);
        ctx.lineTo(this.x, value_Height);
        //arrow
        //up
        ctx.moveTo(this.x, 0);
        ctx.lineTo(locateX, small_height);
        ctx.moveTo(this.x, 0);
        ctx.lineTo(locateXa, small_height);
        //right
        ctx.moveTo(value_Width, this.y);
        ctx.lineTo(locateXb, locateY);
        ctx.moveTo(value_Width, this.y);
        ctx.lineTo(locateXb, locateYa);
        ctx.strokeStyle = "white";
        ctx.stroke();
    };
    this.drawLine = function (a,b) {
        // for (let i = 0; i < ; i++) {
        //    let  x = i;
        //    let  y = a*x+b*distanceUnit;
        //     if(x<800||y<800) {
        //         ctx.shadowBlur = 20;
        //         ctx.shadowColor = "yellow";
        //         ctx.drawImage(this.image, x+coorX, -y+coorY, width, height);
        //         ctx.drawImage(this.image, -x+coorX, y+coorY-2*b*distanceUnit, width, height);
        //     }
        // }

        ctx.beginPath();
        ctx.getLineDash([10]);
        ctx.moveTo(coorX,coorY);
        ctx.lineTo(a,b);
        let gradient = ctx.createLinearGradient(0, 0, 170, 0);
        gradient.addColorStop("0", "magenta");
        gradient.addColorStop("0.5", "blue");
        gradient.addColorStop("1.0", "red");
        ctx.strokeStyle=gradient;
        ctx.lineWidth = 3;
        ctx.stroke();
    };
    this.drawParabol= function (a,b) {
      let x=i;
      let y=a*x*x+b*distanceUnit;
        if(x<800||y<800) {
            ctx.shadowBlur = 20;
            ctx.shadowColor = "yellow";
            ctx.drawImage(this.image, x+coorX, -y+coorY, width, height);
            ctx.drawImage(this.image, -x+coorX, y+coorY-2*b*distanceUnit, width, height);

        }
    }
}