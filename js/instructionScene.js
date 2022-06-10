/* global phaser */

// Copyright (c) 2020 Mr Coxall All rights reserved
// Modified 2022 Rory Mackay
//
// Created by: Rory Mackay
// Date: June 2022
// This is an instruction

class InstructionScene extends Phaser.Scene {
  constructor () {
    super({ key: 'instructionScene' })
    // create variable for instruction scene backround image
    this.instructionSceneBackgroundImage = null
    // create variable for instruction scene text
    this.instructionSceneText = null
    // style instruction scene text
    this.instructionSceneTextStyle = { font: '122px Verdana', fontStyle: 'bold', fill: '#006400', align: 'center' }
    // create variable for back button
    this.backButton = null
  }
  
// set instruction scene background colour
  init (data) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }
  
  preload () {
    console.log('Instruction Scene')
    this.load.image('instructionSceneBackground', './assets/instructionSceneImage.jpg')
    this.load.image('backButton', './assets/backButton.png')
  }
  
  create (data) {
    // create instruction scene backround image
    this.instructionSceneBackgroundImage = this.add.sprite(0, 0, 'instructionSceneBackground').setScale(2.25)
    // orient instruction scene backround image
    this.instructionSceneBackgroundImage.x = 1920 / 2
    this.instructionSceneBackgroundImage.y = 1080 / 2
    // create instruction scene text
    this.instructionSceneText = this.add.text(1920 / 2, 1080 / 2 + +22, 'Cheese Shooter', this.instructionSceneTextStyle).setOrigin(0.5)
    // create back button
    this.backButton = this.add.sprite(350, (1080 / 6) + 1, 'backButton').setScale(0.37)
    // execute clickButtonBack function on button clicked
    this.backButton.setInteractive({ useHandCursor: true })
    this.backButton.on('pointerdown', () => this.clickButtonBack())
  }
  
  // update time
  update (time, delta) {
  }
  // switch to menuScene on back button clicked
  clickButtonBack () {
    this.scene.start('menuScene')
  }
}

export default InstructionScene