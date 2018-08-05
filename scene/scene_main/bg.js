class Bg extends GuaImage {
    constructor(props, name) {
        super(props, name)
        this.setup()
    }

    setup() {
        var o = this
        o.x = 0
        o.y = 0
        o.w = this.game.canvas.width
        o.h = this.game.canvas.height
    }
}
