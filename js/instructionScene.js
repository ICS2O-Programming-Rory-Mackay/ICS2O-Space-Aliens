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
    // log 'Instruction Scene' to console
    console.log('Instruction Scene')
    // load background image
    this.load.image('instructionSceneBackground', './images/instructionSceneImage.jpg')
    // load back button image
    this.load.image('backButton', './images/backButton.png')
    // load button audio
    this.load.audio('button', 'sounds/buttonPress.mp3')
  }
  
  create (data) {
    // create instruction scene backround image
    this.instructionSceneBackgroundImage = this.add.sprite(0, 0, 'instructionSceneBackground').setScale(2.25)
    // orient instruction scene backround image
    this.instructionSceneBackgroundImage.x = 1920 / 2
    this.instructionSceneBackgroundImage.y = 1080 / 2
    // create instruction scene title text
    this.instructionSceneTitleText = this.add.text(1920 / 2, 1080 / 2 + -170, 'Instructions', this.instructionSceneTitleTextStyle).setOrigin(0.5)
    // create and orient instruction scene body text
    this.instructionSceneBodyText = this.add.text(1920 / 2, 666, 'Welcome to Cheese Shooter™!\nThis cave is filled to the brim with giant ants that are hungry for cheese.\nLuckily, you brought your cheese cannon along.\nShoot the cheese into the incoming ants mouth before they eat you instead!\nSelect 1P for single player, and 2P for two player\n\nPlayer 1 controls (Blue): Arrow keys to move and spacebar to shoot\nPlayer 2 controls (Red): WASD to move and shift to shoot', this.instructionSceneBodyTextStyle).setOrigin(0.5)
    // create back button
    this.backButton = this.add.sprite(350, (1080 / 6) + 1, 'backButton').setScale(0.37)
    // execute clickButtonBack function on button clicked
    this.backButton.setInteractive({ useHandCursor: true })
    this.backButton.on('pointerdown', () => this.clickButtonBack())
  }
  
  // update time
  update (time, delta) {
  }
  // switch to menuScene and play button sound on back button clicked
  clickButtonBack () {
    this.sound.play('button')
    this.scene.start('menuScene')
  }
}

export default InstructionScene