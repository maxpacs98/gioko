/* global game */
lastP = {}

var RemotePlayer = function (index, game, startX, startY, p) {
    var x = startX
    var y = startY

    this.scene = game.scene.keys.GameScene
    // this.health = 3
    this.alive = true
    // console.log(p);
    if (p !== undefined) {
        this.player = p;
    } else {
        this.player = this.scene.impact.add.sprite(startX, startY, 'enemyShip');
    }


    // this.player.setMaxVelocity(1000).setFriction(800, 600).setPassiveCollision();


    // this.player.animations.add('move', [0, 1, 2, 3, 4, 5, 6, 7], 20, true)
    // this.player.animations.add('stop', [3], 20, true)

    // this.player.anchor.setTo(0.5, 0.5)

    this.player.name = index.toString()
    // game.physics.enable(this.player, Phaser.Physics.ARCADE)
    this.player.body.immovable = true
    this.player.body.collideWorldBounds = true

    // this.player.angle = angle

    // this.lastPosition = {x: x, y: y, angle: angle}
    lastP = {x: 1600, y: 200}
}

RemotePlayer.prototype.update = function () {
    console.log(this.player.x, lastP.x);
    if (this.player.x !== lastP.x || this.player.y !== lastP.y) {
        if (lastP.y - this.player.y > -2) {
            this.player.setAccelerationY(800);
        } else if (lastP.y - this.player.y < 2) {
            this.player.setAccelerationY(-800);
        } else {
            this.player.setAccelerationY(0);
        }

        if (lastP.x - this.player.x > -2) {
            this.player.setAccelerationX(800);
            this.player.flipX = false;
        } else if (lastP.x - this.player.x < 2) {
            this.player.flipX = true;
            this.player.setAccelerationX(-800);
        }

        lastP.x = this.player.x
        lastP.y = this.player.y

    }
}

window.RemotePlayer = RemotePlayer
