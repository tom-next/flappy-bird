class GuaImage {
    constructor(game, name) {
        this.game = game
        this.texture = game.textureByName(name)
        log("111", this.texture)
        this.x = 0
        this.y = 0
        this.w = this.texture.width
        this.h = this.texture.height
        this.flipY = false
        this.rotation = 0
    }

    static new(game, name) {
        return new this(game, name)
    }

    update() {

    }

    aInb(x, x1, x2) {
        return x >= x1 && x <= x2
    }

    collide(o, ball) {
        var a = o
        var b = ball
        var aInb = this.aInb
        if(aInb(a.x, b.x, b.x + b.w) || aInb(b.x, a.x, a.x + a.w)) {
            if(aInb(a.y, b.y, b.y + b.h) || aInb(b.y, a.y, a.y + a.h)) {
                return true
            }
        }
        return false
    }

    draw() {
        this.game.drawImage(this)
    }
}
