
let myGameArea = {
    canvas: document.createElement("canvas"),
    start: function () {
        this.canvas.width = value_Width;
        this.canvas.height = value_Height;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    },
};

