/* global phaser */

// Copyright (c) 2020 Mr Coxall All rights reserved
// Modified 2022 Rory Mackay
//
// Created by: Rory Mackay
// Date: June 2022
// This is a splash scene

class SplashScene extends Phaser.Scene {
  constructor () {
    super({ key: 'splashScene' })
  }

  init (data) {
    this.cameras.main.setBackgroundColor('#ffdfff')
  }

  preload () {
    console.log('Splash Scene')
  }
  
  create (data) {
  }

  update (time, delta) {
  }
}

export default SplashScene