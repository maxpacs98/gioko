/* global game */
var RemotePlayer = function (index, game, startX, startY, p) {
    var x = startX
    var y = startY

    this.lastP = {x: 1600, y: 200}

    this.scene = game.scene.keys.GameScene
    // this.health = 3
    this.alive = true
    // console.log(p);
    if (p !== undefined) {
        this.player = p;
    } else {
        this.player = this.scene.impact.add.sprite(startX, startY, 'enemyShip').setDepth(1);
        this.player.setMaxVelocity(1000).setFriction(800, 600).setPassiveCollision();
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
    // lastP =
}

RemotePlayer.prototype.update = function () {
    this.player.setX(this.x);
    this.player.setY(this.y);
    if (this.lastP.x  > this.x) {
        this.player.flipX = true;
    } else if (this.lastP.x  < this.x) {
        this.player.flipX = false;
    }
    this.lastP.x = this.x
    this.lastP.y = this.y
}

window.RemotePlayer = RemotePlayer
