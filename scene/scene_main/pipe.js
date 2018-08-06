class Pipes {
    constructor(game) {
        this.game = game
        this.pipes = []
        this.pipeSpace = 150
        this.intervalSpace = 200 // 管子横向间距
        this.columsOfPipe = 3
        for (var i = 0; i < this.columsOfPipe; i++) {
            var p1 = GuaImage.new(game, "pipe")
            p1.x = this.game.canvas.width + i * this.intervalSpace
            p1.flipY = true
            var p2 = GuaImage.new(game, "pipe")
            p2.x = p1.x
            p2.flipY = false
            this.resetPipesPosition(p1, p2)
            this.pipes.push(p1)
            this.pipes.push(p2)
        }
    }

    draw() {
        var context = this.game.context
        for (var p of this.pipes) {
            // 翻转
            // translate scale 操作的是当前的坐标系
            context.save()
            var w2 = p.w / 2
            var h2 = p.h / 2
            // 把坐标的原点放在角色的中心点上
            context.translate(p.x + w2, p.y + h2)
            var scaleX = p.flipX ? -1 : 1
            var scaleY = p.flipY ? -1 : 1
            context.scale(scaleX, scaleY)
            context.rotate(p.rotation * Math.PI / 180)
            context.translate(-w2, -h2)
            context.drawImage(p.texture, 0, 0)
            context.restore()
        }
    }

    resetPipesPosition(p1, p2) {
        p1.y = randomBetween(-200, 0)
        p2.y = p1.y + p1.h + this.pipeSpace
    }

    static new(game) {
        return new this(game)
    }

    update() {
        for (var p of this.pipes) {
            p.x -= 5
            if(p.x < -100) {
                p.x = this.intervalSpace * this.columsOfPipe
            }
        }
    }

}
