/* global phaser */

// Copyright (c) 2020 Mr Coxall All rights reserved
// Modified 2022 Rory Mackay
//
// Created by: Rory Mackay
// Date: June 2022
// This is a Title Scene

class TitleScene extends Phaser.Scene {
  constructor () {
    super({ key: 'titleScene' })

    this.titleSceneBackgroundImage = null
    this.titleSceneText = null
    this.titleSceneTextStyle = { font: '200px Calibri', fill: '#FF3A0F', align: 'center' }
  }
  
// set title scene background colour
  init (data) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }

  preload () {
    console.log('Title Scene')
    this.load.image('titleSceneBackground', './assets/titleSceneImage.jpeg')
  }
  
  create (data) {
    this.titleSceneBackgroundImage = this.add.sprite(0, 0, 'titleSceneBackground').setScale(2.75)
    this.titleSceneBackgroundImage.x = 1920 / 2
    this.titleSceneBackgroundImage.y = 1080 / 2

    this.titleSceneTest = this.add.text(1920 / 2, 1080 / 2 + -20, 'Super Strawberries', this.titleSceneTextStyle).setOrigin(0.5)
  }

  update (time, delta) {
  }
}

export default TitleScene