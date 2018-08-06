class SceneStart extends Scene {
    constructor(game) {
        super(game)
        this.game = game
        this.setup()
    }

    setup() {
        // 背景
        this.bg = Bg.new(this.game, "bg")
        this.addElements(this.bg)

        // 管子
        this.pipe = Pipes.new(this.game)
        this.addElements(this.pipe)

        // 地板动画
        this.ground = Ground.new(this.game, "ground")
        this.addElements(this.ground)

        // 小鸟
        this.bird = Bird.new(this.game, "bird")
        this.addElements(this.bird)
    }

    update() {
        super.update()
    }
}
