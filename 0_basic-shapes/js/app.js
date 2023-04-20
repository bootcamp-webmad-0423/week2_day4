
const basicShapesApp = {
    appName: 'Basic shapes app',
    author: 'Germán Álvarez',
    version: '1.0.0',
    license: undefined,
    description: 'Basic app for shapes drawing',
    ctx: undefined,
    canvasSize: {
        w: undefined,
        h: undefined
    },
    init() {
        this.setContext()
        this.setDimensions()
    },
    setContext() {
        this.ctx = document.querySelector('canvas').getContext('2d')
        console.log('contexto ->', this.ctx)
    },
    setDimensions() {
        this.canvasSize = {
            w: window.innerWidth,
            h: window.innerHeight
        }
        document.querySelector('canvas').setAttribute('width', this.canvasSize.w)
        document.querySelector('canvas').setAttribute('height', this.canvasSize.h)
    },
    drawFilledRectangle() {
        this.ctx.fillStyle = 'red'
        this.ctx.fillRect(this.canvasSize.w / 2 - 250, 0, 500, this.canvasSize.h)
        this.ctx.fillStyle = 'black'
        this.ctx.fillRect(this.canvasSize.w / 2 - 50, this.canvasSize.h / 2 - 50, 100, 100)
    },
    drawLines() {
        this.ctx.beginPath()
        this.ctx.moveTo(100, 100)
        this.ctx.lineTo(500, 500)
        this.ctx.lineTo(200, 300)
        this.ctx.stroke()
        this.ctx.closePath()
    },
    drawDashedLines() {
        this.ctx.beginPath()
        this.ctx.lineWidth = 20
        this.ctx.strokeStyle = 'blue'
        this.ctx.setLineDash([60, 20])      // <-- patrón de repetición
        this.ctx.moveTo(0, this.canvasSize.h / 2)
        this.ctx.lineTo(this.canvasSize.w, this.canvasSize.h / 2)
        this.ctx.stroke()
        this.ctx.closePath()
    },
    drawCircle() {
        this.ctx.beginPath()

        this.ctx.arc(600, 200, 100, 0, Math.PI * 2)

        this.ctx.lineWidth = 10
        this.ctx.strokeStyle = 'green'
        this.ctx.setLineDash([0, 0])      // <-- patrón de repetición
        this.ctx.stroke()
        this.ctx.closePath()

        this.ctx.fillStyle = 'blue'
        this.ctx.fill()
    },
    drawText(text) {
        this.ctx.font = '50px arial'
        this.ctx.fillText(text, 100, 100)
    }
}