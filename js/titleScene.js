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
    // create variables for image and text
    this.titleSceneBackgroundImage = null
    this.titleSceneText = null
    // style titleSceneText
    this.titleSceneTextStyle = { font: '122px Verdana', fontStyle: 'bold', fill: '#006400', align: 'center', backgroundColor: '#C4A484' }
  }
  
// set title scene background colour
  init (data) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }
  
  preload () {
    // log 'Title Scene' to console
    console.log('Title Scene')
    // load background image
    this.load.image('titleSceneBackground', './images/titleSceneImage.webp')
  }
  
  create (data) {
    // create, scale, and orient background image
    this.titleSceneBackgroundImage = this.add.sprite(0, 0, 'titleSceneBackground').setScale(2.25)
    this.titleSceneBackgroundImage.x = 1920 / 2
    this.titleSceneBackgroundImage.y = 1080 / 2
    // create, scale, title scene text
    this.titleSceneText = this.add.text(1920 / 2, 1080 / 2 + +22, 'Cheese Shooter', this.titleSceneTextStyle).setOrigin(0.5)
  }
  
  // switch to menu scene on update
  update (time, delta) {
    if (time > 6000) {
      this.scene.switch('menuScene')
    }
  }
}
export default TitleScene