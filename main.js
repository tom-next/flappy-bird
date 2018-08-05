var enableDebugMode = function(game, enable) {
    if(!enable) {
        return;
    }
    window.addEventListener("keydown", function(event) {
        var k = event.key
        if(k === "p") {
            // 暂停功能
            paused = !paused
        }else if ("123456789".includes(k)) {
            // 关卡
            blocks = loadLeves(game, Number(k))
        }
    })

    // 控制速度
    document.querySelector("#id-input-speed").addEventListener("input", function(e) {
        window.fps = Number(e.target.value)
    })
}

var __main = function() {
    var images = {
        bg: "img/flappy/bg.png",
        bird1: "img/flappy/bird1.png",
        bird2: "img/flappy/bird2.png",
        bird3: "img/flappy/bird3.png",
        ground: "img/flappy/ground.png",
    }
    // 异步记载
    var game = Game.instance(30, images, function(game) {
        var s = SceneStart.new(game)
        // var s = SceneTitle.new(game)
        game.runWithScene(s)
        enableDebugMode(game, true)
    })
}

__main()
