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
// set splash scene background colour
  init (data) {
    this.cameras.main.setBackgroundColor('#007aff')
  }
// log 'Splash Scene' in console and load in image file
  preload () {
    console.log('Splash Scene')
    this.load.image('splashSceneBackground', './images/splashSceneImage.png')
  }
  
  create (data) {
    // create and orient splashSceneBackgroundImage
    this.splashSceneBackgroundImage = this.add.sprite(0, 0, 'splashSceneBackground')
    this.splashSceneBackgroundImage.x = 1920 / 2
    this.splashSceneBackgroundImage.y = 1080 / 2
  }
// switch to title scene on update
  update (time, delta) {
    if (time > 4000) {
      this.scene.switch('titleScene')
    }
  }
}

export default SplashScene