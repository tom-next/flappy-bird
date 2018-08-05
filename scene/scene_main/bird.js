class Bird extends Gua_Animation {
    constructor(game) {
        super(game)
        this.game = game
        this.setPosition()
        this.setAnimationInfo()

    }

    setPosition() {
        var o = this
        o.w = 50
        o.h = 50
        o.x = o.game.canvas.width / 2 - o.w / 2
        o.y = o.game.canvas.height / 2 - o.h
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

    
}
