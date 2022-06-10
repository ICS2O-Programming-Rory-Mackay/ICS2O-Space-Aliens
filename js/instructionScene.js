/* global phaser */

// Copyright (c) 2020 Mr Coxall All rights reserved
// Modified 2022 Rory Mackay
//
// Created by: Rory Mackay
// Date: June 2022
// This is an instruction scene

class InstructionScene extends Phaser.Scene {
  constructor () {
    super({ key: 'instructionScene' })
    // create variable for instruction scene backround image
    this.instructionSceneBackgroundImage = null
    // create variable for instruction scene title text
    this.instructionSceneTitleText = null
    // create variable for instruction scene body text
    this.instructionSceneBodyText = null
    // style instruction scene title text
    this.instructionSceneTitleTextStyle = { font: '122px Verdana', fontStyle: 'bold', fill: '#0000FF', align: 'center' }
    // style instruction scene body text
    this.instructionSceneBodyTextStyle = { font: '40px Verdana', backgroundColor: '#C4A484', fontStyle: 'bold', fill: '#0047AB', align: 'center' }
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
    this.load.audio('button', 'assets/buttonPress.mp3')
  }
  
  create (data) {
    // create instruction scene backround image
    this.instructionSceneBackgroundImage = this.add.sprite(0, 0, 'instructionSceneBackground').setScale(2.25)
    // orient instruction scene backround image
    this.instructionSceneBackgroundImage.x = 1920 / 2
    this.instructionSceneBackgroundImage.y = 1080 / 2
    // create instruction scene title text
    this.instructionSceneTitleText = this.add.text(1920 / 2, 1080 / 2 + -170, 'Instructions', this.instructionSceneTitleTextStyle).setOrigin(0.5)
    // create instruction scene body text
    this.instructionSceneBodyText = this.add.text(1920 / 2, 1080 / 2 + 60, 'Welcome to Cheese Shooter™!\nThis cave is filled to the brim with giant ants that are hungry for cheese.\nLuckily, you and your partner brought your cheese cannons along.\nShoot the cheese into the incoming ants mouth before they eat you instead!\n\nPlayer 1 controls (Blue): Arrow keys to move and spacebar to shoot\nPlayer 2 controls (Red): WASD to move and shift to shoot', this.instructionSceneBodyTextStyle).setOrigin(0.5)
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
    this.sound.play('button')
    this.scene.start('menuScene')
  }
}

export default InstructionScene