
const controlsApp = {
    appName: 'Controls app',
    author: 'Germán Álvarez',
    version: '1.0.0',
    license: undefined,
    description: 'Basic app for shapes controlling',
    ctx: undefined,
    canvasSize: {
        w: undefined,
        h: undefined
    },
    dogInstance: undefined,
    dogSpecs: {
        pos: { x: 100, y: 100 },
        size: { w: 100, h: 100 }
    },
    init() {
        this.setContext()
        this.setDimensions()
        this.setEventListeners()
        this.setImageInstances()
        this.start()
    },
    setContext() {
        this.ctx = document.querySelector('canvas').getContext('2d')
    },
    setEventListeners() {
        document.onkeyup = event => {

            const { key } = event

            if (key == 'ArrowLeft') {
                this.dogSpecs.pos.x -= 10
            }

            if (key == 'ArrowRight') {
                this.dogSpecs.pos.x += 10
            }
        }
    },
    setImageInstances() {
        this.dogInstance = new Image()
        this.dogInstance.src = './img/doggy.png'
    },
    setDimensions() {
        this.canvasSize = {
            w: window.innerWidth,
            h: window.innerHeight
        }
        document.querySelector('canvas').setAttribute('width', this.canvasSize.w)
        document.querySelector('canvas').setAttribute('height', this.canvasSize.h)
    },
    start() {
        setInterval(() => {
            this.clearAll()
            this.drawAll()
        }, 50)
    },
    drawAll() {
        this.ctx.drawImage(
            this.dogInstance,
            this.dogSpecs.pos.x,
            this.dogSpecs.pos.y,
            this.dogSpecs.size.w,
            this.dogSpecs.size.h
        )
    },
    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    }

}