const animateApp = {
    appName: 'Animate app',
    author: 'Germán Álvarez',
    version: '1.0.0',
    license: undefined,
    description: 'Basic app for shapes animating',
    ctx: undefined,
    framesIndex: 0,         // para los obstaculos
    canvasSize: {
        w: undefined,
        h: undefined
    },
    alpacats: [],
    init() {
        this.setContext()
        this.setDimensions()
        this.createAlpacats()
        this.start()
    },
    setContext() {
        this.ctx = document.querySelector('canvas').getContext('2d')
    },
    setDimensions() {
        this.canvasSize = {
            w: window.innerWidth,
            h: window.innerHeight
        }
        document.querySelector('canvas').setAttribute('width', this.canvasSize.w)
        document.querySelector('canvas').setAttribute('height', this.canvasSize.h)
    },
    createAlpacats() {
        this.alpacats.push(
            new Alpacat(this.ctx, this.canvasSize, 500, 100, 10),
            new Alpacat(this.ctx, this.canvasSize, 300, 50, 20),
            new Alpacat(this.ctx, this.canvasSize, 100, 140, 7),
            new Alpacat(this.ctx, this.canvasSize, 600, 40, 30),
        )
    },
    start() {
        setInterval(() => {
            this.clearAll()
            this.drawAll()
            this.framesIndex++
        }, 50)
    },
    drawAll() {
        this.alpacats.forEach(elm => elm.draw())
        if (this.framesIndex % 20 === 0) this.createObstacle()
    },
    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },
    createObstacle() {
        console.warn('aquí harías un push al array de obstáculos con uno nuevo')
    }
}