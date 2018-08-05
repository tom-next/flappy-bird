class Ground {
    constructor(game) {
        this.game = game
        this.setup()
    }
    setup() {
        this.grounds = []
        this.skipCount = 5
        for (var i = 0; i < 2; i++) {
            var ground = GuaImage.new(this.game, 'ground')
            ground.x = i * 310
            ground.y = 500
            this.grounds.push(ground)
        }
    }
    static new(game) {
        return new this(game)
    }
    update() {
        this.skipCount--
        var offSet = 5
        if(this.skipCount == 0) {
            this.skipCount = 5
            offSet = -20
        }
        // 移动地面
        for (var g of this.grounds) {
            g.x -= offSet
        }
    }
    draw(){
        for(var g of this.grounds) {
            this.game.drawImage(g)
        }
    }
}
