/* global phaser */

// Copyright (c) 2020 Mr Coxall All rights reserved
// Modified 2022 Rory Mackay
//
// Created by: Rory Mackay
// Date: June 2022
// This is a Game Scene

class GameScene extends Phaser.Scene {

  // create an alien
  createAlien() {
    // get a number between 1 and 1920
    const alienXLocation = Math.floor(Math.random() * 1920) + 1
    // get a number between 1 and 50
    let alienXVelocity = Math.floor(Math.random() * 50) + 1
    // add minus sign in 50% of cases
    alienXVelocity *= Math.round(Math.random()) ? 1 : -1
    // physics for sprite
    const anAlien = this.physics.add.sprite(alienXLocation, -100, 'alien').setScale(0.31)
    // alien spaceship move in difefrent directions
    anAlien.body.velocity.y = 200
    anAlien.body.velocity.x = alienXVelocity
    this.alienGroup.add(anAlien)
  }
  constructor () {
    super({ key: 'gameScene' })
    // creating variables
    // backround variable
    this.background = null
    // ship variable
    this.ship = null
    // ship1 variable
    this.ship1 = null
    // cannon projectile variable
    this.fireMissile = false
    // cannon1 projectile variable
    this.fireMissile1 = false
    // score variable
    this.score = 0
    // score text variable
    this.scoreText = null
    // score text variable styling
    this.scoreTextStyle = { font: '65px Arial', fill: '#ffffff', align: 'center' }
    // game over text variable
    this.gameOverText = null
    // game over text variable styling
    this.gameOverTextStyle = { font: '65px Arial', fill: '#ff0000', align: 'center' }
    // game win text variable
    this.gameWinText = null
    // game over text variable styling
    this.gameWinTextStyle = { font: '65px Arial', fill: '#ff0000', align: 'center' }

  }
// set game scene background colour
  init (data) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }

  preload () {
    console.log('Game Scene')

    // images
    this.load.image('basicCave', 'assets/basic-cave.png')
    this.load.image('ship', 'assets/cannon.png')
    this.load.image('ship1', 'assets/cannon1.png')
    this.load.image('missile', 'assets/cheese-projectile.png')
    this.load.image('alien', 'assets/hungry_ant.png')
    //sound files
    this.load.audio('laser', 'assets/cannon_sound.wav')
    this.load.audio('explosion', 'assets/crunch.mp3')
    this.load.audio('death', 'assets/death.wav')
    this.load.audio('button', 'assets/buttonPress.mp3')
    this.load.audio('win', 'assets/win.mp3')
  }
  
  create (data) {
    this.background = this.add.image(0, 0, 'basicCave').setScale(2.25)
    this.background.setOrigin(0, 0)
    // show score on screen
    this.scoreText = this.add.text(10, 10, 'Score: ' + this.score.toString(), this.scoreTextStyle)
    // physics for ship
    this.ship = this.physics.add.sprite(1920 / 2, 1080 - 100, 'ship').setScale(0.75)
    // physics for ship1
    this.ship1 = this.physics.add.sprite(1920 / 2, 1080 - 100, 'ship1').setScale(0.75)
    // create a group for the missiles and add physics
    this.missileGroup = this.physics.add.group()

    // create a group for the ants
    this.alienGroup = this.add.group()
    this.createAlien()

    // collisions between cheese projectiles and ants
    this.physics.add.collider(this.missileGroup, this.alienGroup, function (missileCollide, alienCollide) {
      alienCollide.destroy()
      missileCollide.destroy()
      // explosion sound on contact
      this.sound.play('explosion')
      // increase score on contact
      this.score = this.score + 5
      this.scoreText.setText('Score : ' + this.score.toString()) 
      // create two more ants for each ant hit
      this.createAlien()
      this.createAlien()
      // end game if 100 points is reached
    if (this.score >= 50) {
      // pause physics to stop new enemies from spawning
      this.physics.pause()
      // play win sound
      this.sound.play('win')
      // display and style win text
      this.gameWinText = this.add.text(1920 / 2, 1080 / 2, 'You won!\nClick to play again.', this.gameWinTextStyle).setOrigin(0.5)
      // make game win text clickable to take you back to gameScene
      this.gameWinText.setInteractive({ useHandCursor: true })
      this.gameWinText.on('pointerdown', () => this.scene.start('gameScene')) 
    }
      }.bind(this))
    
      // collisions between cannon and ants
      this.physics.add.collider(this.ship, this.alienGroup, function (shipCollide, alienCollide) {
        // death sound on contact
        this.sound.play('death')
        // pause physics to stop new enemies from spawning
        this.physics.pause()
        // destroy cannon on contact with ant
        alienCollide.destroy()
        shipCollide.destroy()
        // set score to 0 score on contact
        this.score = this.score * 0
        // display game over text
        this.gameOverText = this.add.text(1920 / 2, 1080 / 2, 'Game Over!\nClick to play again.', this.gameOverTextStyle).setOrigin(0.5)
        this.gameOverText.setInteractive({ useHandCursor: true })
        this.gameOverText.on('pointerdown', () => this.scene.start('gameScene'))
      }.bind(this))
    // collisions between cannon1 and ants
      this.physics.add.collider(this.ship1, this.alienGroup, function (ship1Collide, alienCollide) {
        // death sound on contact
        this.sound.play('death')
        // pause physics to stop new enemies fro spawning
        this.physics.pause()
        // destroy cannon on contact with ant
        alienCollide.destroy()
        ship1Collide.destroy()
        // set score to 0 score on contact
        this.score = this.score * 0
        // display game over text
        this.gameOverText = this.add.text(1920 / 2, 1080 / 2, 'Game Over!\nClick to play again.', this.gameOverTextStyle).setOrigin(0.5)
        this.gameOverText.setInteractive({ useHandCursor: true })
        this.gameOverText.on('pointerdown', () => this.scene.start('gameScene'))
      }.bind(this))
    }


  update (time, delta) {
    const audioObj = new Audio("/assets/backgroundMusic.mp3")
    audioObj.play()
    // called 60 times a second
    // creating local variable for arrow keys
    const keyLeftObj = this.input.keyboard.addKey('LEFT')
    const keyRightObj = this.input.keyboard.addKey('RIGHT')
    const keyUpObj = this.input.keyboard.addKey('UP')
    const keyDownObj = this.input.keyboard.addKey('DOWN')
    // creating local variable for WASD
    const keyAObj = this.input.keyboard.addKey('A')
    const keyDObj = this.input.keyboard.addKey('D')
    const keyWObj = this.input.keyboard.addKey('W')
    const keySObj = this.input.keyboard.addKey('S')
    // creating local variable for spacebar
    const keySpaceObj = this.input.keyboard.addKey('SPACE')
    // creating local variable for shift
    const keyShiftObj = this.input.keyboard.addKey('SHIFT')
    // if statements for arrow keys and cannon
    // if statement for left arrow pressed
    if (keyLeftObj.isDown === true) {
      this.ship.x -= 15
      if (this.ship.x <0) {
        this.ship.x = 1920
      }
    }
    // if statement for right arrow pressed
    if (keyRightObj.isDown === true) {
      this.ship.x += 15
      if (this.ship.x > 1920) {
        this.ship.x = 0
      }
    }
    // if statement for up arrow pressed
    if (keyUpObj.isDown === true) {
      this.ship.y -= 15
      if (this.ship.y < 0) {
        this.ship.y = 10
      }
    }
    // if statement for down arrow pressed
    if (keyDownObj.isDown === true) {
      this.ship.y += 15
      if (this.ship.y > 1080) {
        this.ship.y = 1070
      }
    }
    // if statements for WASD and cannon1
    // if statement for A pressed
    if (keyAObj.isDown === true) {
      this.ship1.x -= 15
      if (this.ship1.x <0) {
        this.ship1.x = 1920
      }
    }
    // if statement for D pressed
    if (keyDObj.isDown === true) {
      this.ship1.x += 15
      if (this.ship1.x > 1920) {
        this.ship1.x = 0
      }
    }
    // if statement for W pressed
    if (keyWObj.isDown === true) {
      this.ship1.y -= 15
      if (this.ship1.y < 0) {
        this.ship1.y = 10
      }
    }
    // if statement for S pressed
    if (keySObj.isDown === true) {
      this.ship1.y += 15
      if (this.ship1.y > 1080) {
        this.ship1.y = 1070
      }
    }
    // firing key for cannon
    // if statement for spacebar pressed
    if (keySpaceObj.isDown === true) {
      if (this.fireMissile === false) {
        // fire missile
        this.fireMissile = true
        const aNewMissile = this.physics.add.sprite(this.ship.x, this.ship.y -120, 'missile').setScale(0.15)
        this.missileGroup.add(aNewMissile)
        this.sound.play('laser')
      }
    }
    // allow multiple missiles to be fired
    if (keySpaceObj.isUp === true) {
      this.fireMissile = false
    }   
    // allow missiles to travel up screen
    this.missileGroup.children.each(function (item) {
      item.y = item.y - 15
      if (item.y < 0) {
        item.destroy()
      }
    })
    // firing key for cannon1
    // if statement for shift pressed
    if (keyShiftObj.isDown === true) {
      if (this.fireMissile1 === false) {
        // fire missile
        this.fireMissile1 = true
        const aNewMissile = this.physics.add.sprite(this.ship1.x, this.ship1.y -120, 'missile').setScale(0.15)
        this.missileGroup.add(aNewMissile)
        this.sound.play('laser')
      }
    }
    // allow multiple missiles to be fired
    if (keyShiftObj.isUp === true) {
      this.fireMissile1 = false
    }   
    // allow missiles to travel up screen
    this.missileGroup.children.each(function (item) {
      item.y = item.y - 15
      if (item.y < 0) {
        item.destroy()
      }
    })
  }
}

export default GameScene