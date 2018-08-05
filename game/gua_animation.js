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
        this.rotation = 0
        this.alpha = 1
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
            // 翻转
            // translate scale 操作的是当前的坐标系
            context.save()
            var w2 = this.w / 2
            var h2 = this.h / 2
            // 把坐标的原点放在角色的中心点上
            context.translate(this.x + w2, this.y + h2)
            context.globalAlpha = this.alpha
            if(this.flipX) {
                context.scale(-1, 1)
            }
            context.rotate(this.rotation * Math.PI / 180)
            context.translate(-w2, -h2)
            context.drawImage(this.texture, 0, 0)
            context.restore()
        }
    }

    frames() {
        return this.animationName && this.animations[this.animationName]
    }

    update() {
        if(this.animationName) {
            if(this.rotation < 45) {
                this.rotation += 5
            }
            // 更新 alpha
            if(this.alpha == 0) {
                this.alpha = 1
            }
            this.alpha -= 0.08
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
        this.x += x
    }

    riseHead() {
        this.rotation = -45
    }

    changeAnimation(name) {
        this.animationName = name
    }

}
