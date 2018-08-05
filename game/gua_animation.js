class Gua_Animation {
    constructor(game) {
        this.game = game
        this.animations = {

        }
        this.w = 150
        this.h = 130
        let a = this.frames()
        this.texture = a && a[0]
        this.frameIndex = 1 // 播放图片的下标
        this.frameCount = 3 // 每隔一段时间播放
        this.flipX = false
    }

    static new(game) {
        return new this(game)
    }

    // images 提供的是一组动画的名称
    addAnimations(name, images) {
        this.animations[name] = []
        for (var i = 0; i < images.length; i++) {
            var n = images[i]
            var t = this.game.textureByName(n)
            this.animations[name].push(t)
        }

    }

    removeAnimations(name) {
        this.animations[name] = null
    }

    draw() {
        var context = this.game.context
        if(this.texture) {
            if(this.flipX) {
                context.save()
                var x = this.x + this.w / 2
                context.translate(x, 0)
                context.scale(-1, 1)
                context.translate(-x, 0)
                context.drawImage(this.texture, this.x, this.y,  this.w, this.h)
                context.restore()
            }else {
                context.drawImage(this.texture, this.x, this.y, this.w, this.h)
            }
        }
    }

    frames() {
        return this.animationName && this.animations[this.animationName]
    }

    update() {
        if(this.animationName) {
            this.frameCount--
            if(this.frameCount === 0) {
                this.frameCount = 3
                // 切换下标
                this.frameIndex = (this.frameIndex + 1) % this.frames().length
                this.texture = this.frames()[this.frameIndex]
            }
        }
    }

    move(x, keyStatus) {
        this.flipX = x < 0
        var animationName = {
            down: "w",
            up: "idle",
        }
        var name = animationName[keyStatus]
        this.changeAnimation(name)
        this.x += x
    }

    changeAnimation(name) {
        this.animationName = name
    }

}
