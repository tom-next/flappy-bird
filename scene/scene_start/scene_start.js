class SceneTitle extends Scene {
    constructor(game) {
        super(game)
        // log(game)
        var label = Label.new(game, 'hello')
        this.addElements(label)
        // var ps = ParticleSystems.new(game, 100, 200, "fire1")
        // this.addElements(ps)

        let w = Gua_Animation.new(game)
        w.x = 100
        w.y = 180
        this.w = w
        this.addElements(w)
        this.setupInputs()
    }
    setupInputs() {
        var self = this
        this.game.registerAction("a", function(event) {
            self.w.move(-3, event)
        })
        this.game.registerAction("d", function(event) {
            self.w.move(3, event)
        })
    }
}
