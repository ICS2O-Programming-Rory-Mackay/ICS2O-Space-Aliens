/* global phaser */

// Copyright (c) 2020 Mr Coxall All rights reserved
// Modified 2022 Rory Mackay
//
// Created by: Rory Mackay
// Date: June 2022
// This is a Game Scene

class GameScene extends Phaser.Scene {
  constructor () {
    super({ key: 'gameScene' })
    // creating variables
    this.background = null
  }
// set game scene background colour
  init (data) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }

  preload () {
    console.log('Game Scene')

    // images
    this.load.image('basicCave', 'assets/basic-cave.png')
    
  }
  
  create (data) {
    this.background = this.add.image(0, 0, 'basicCave').setScale(2.25)
    this.background.setOrigin(0, 0)

  }

  update (time, delta) {
  }
}

export default GameScene