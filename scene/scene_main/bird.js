class Bird extends Gua_Animation {
    constructor(game) {
        super(game)
        this.game = game
        this.setup()
        this.setAnimationInfo()
        this.bindEvents()
    }

    bindEvents() {
        var self = this
        this.game.registerAction("a", function(event) {
            self.move(-3, event)
        })

        this.game.registerAction("d", function(event) {
            self.move(3, event)
        })

        this.game.registerAction("m", function(event) {
            self.jump()
        })
    }

    setup() {
        var o = this
        o.w = 50
        o.h = 50
        o.x = o.game.canvas.width / 2 - o.w / 2
        o.y = o.game.canvas.height / 2 - o.h
        this.gy = 10
        this.vy = 0
    }

    jump() {
        this.vy = -10
        this.riseHead()
    }

    setAnimationInfo() {
        var o = this
        // 给 bird 设置动画枚举
        o.animationType = {
            "idle": [],  // 正常状态
        }
        // 需要给 bird 提供一个动画列表
        o.addAnimations("idle", ["bird1", "bird2", "bird3"])
        o.changeAnimation("idle")
    }

    update() {
        // 更新受力
        this.y += this.vy
        this.vy += this.gy * 0.25
        let h = 485 - this.w / 2
        if(this.y > h) {
            this.y = h
        }
        //
        super.update()
    }
}
