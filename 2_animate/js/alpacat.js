class Alpacat {

    constructor(ctx, canvasSize, posY, size, speed) {

        this.ctx = ctx
        this.canvasSize = canvasSize
        this.imageInstance = undefined

        this.alpacatSpecs = {
            size: { w: size, h: size },
            pos: { x: 0, y: posY },
            speed: speed
        }

        this.init()
    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = './img/alpacat.png'
    }

    draw() {

        this.move()

        this.ctx.drawImage(
            this.imageInstance,
            this.alpacatSpecs.pos.x,
            this.alpacatSpecs.pos.y,
            this.alpacatSpecs.size.w,
            this.alpacatSpecs.size.h,
        )
    }

    move() {
        if (this.alpacatSpecs.pos.x >= this.canvasSize.w - this.alpacatSpecs.size.w) this.turn()
        if (this.alpacatSpecs.pos.x < 0) this.turn()

        this.alpacatSpecs.pos.x += this.alpacatSpecs.speed
    }

    turn() {
        this.alpacatSpecs.speed *= -1
    }
}