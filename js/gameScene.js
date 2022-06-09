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
    const anAlien = this.physics.add.sprite(alienXLocation, -100, 'alien').setScale(0.38)
    // alien spaceship move in difefrent directions
    anAlien.body.velocity.y = 200
    anAlien.body.velocity.x = alienXVelocity
    this.alienGroup.add(anAlien)
  }
  constructor () {
    super({ key: 'gameScene' })
    // creating variables
    this.background = null
    this.ship = null
    this.fireMissile = false
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
    this.load.image('missile', 'assets/cheese-projectile.png')
    this.load.image('alien', 'assets/hungry_ant.png')
    //sound files
    this.load.audio('laser', 'assets/cannon_sound.wav')
    this.load.audio('explosion', 'assets/crunch.mp3')
  }
  
  create (data) {
    this.background = this.add.image(0, 0, 'basicCave').setScale(2.25)
    this.background.setOrigin(0, 0)
    // physics for ship
    this.ship = this.physics.add.sprite(1920 / 2, 1080 - 100, 'ship').setScale(0.75)
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
      // create two more ants for each ant hit
      this.createAlien()
      this.createAlien()
      }.bind(this))
    }

  update (time, delta) {
    // called 60 times a second
    // creating local variable
    const keyLeftObj = this.input.keyboard.addKey('LEFT')
    const keyRightObj = this.input.keyboard.addKey('RIGHT')
    const keyUpObj = this.input.keyboard.addKey('UP')
    const keyDownObj = this.input.keyboard.addKey('DOWN')
    const keySpaceObj = this.input.keyboard.addKey('SPACE')

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
    // if statement for spacebar pressed
    if (keySpaceObj.isDown === true) {
      if (this.fireMissile === false) {
        // fire missile
        this.fireMissile = true
        const aNewMissile = this.physics.add.sprite(this.ship.x, this.ship.y -120, 'missile').setScale(0.20)
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
  }
}

export default GameScene