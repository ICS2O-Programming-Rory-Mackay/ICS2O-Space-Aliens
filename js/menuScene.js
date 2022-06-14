/* global phaser */

// Copyright (c) 2020 Mr Coxall All rights reserved
// Modified 2022 Rory Mackay
//
// Created by: Rory Mackay
// Date: June 2022
// This is a Menu Scene

class MenuScene extends Phaser.Scene {
  constructor () {
    super({ key: 'menuScene' })
  // creating variable for background image
  this.menuSceneBackgroundImage = null
  // creating variable for start button
  this.startButton = null
  // creating variable for start button
  this.startButton1 = null
  // creating variable for instruction button
  this.instructionButton = null
  }
// set menu scene background colour
  init (data) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }

  preload () {
    // log 'Menu Scene' in comsole
    console.log('Menu Scene')
    // load images
    this.load.image('menuSceneBackground', 'images/cavern.png')
    this.load.image('singlePlayer', 'images/single_player.png')
    this.load.image('twoPlayer', 'images/two_player.png')
    this.load.image('instructionButton', 'images/instruction.png')
    // load sounds
    this.load.audio('button', 'sounds/buttonPress.mp3')
  }
  
  create (data) {
    // create backround image
    this.menuSceneBackgroundImage = this.add.sprite(0, 0, 'menuSceneBackground').setScale(1.75)
    this.menuSceneBackgroundImage.x = 1920 / 2
    this.menuSceneBackgroundImage.y = 1080 / 2
    // create duo start button
    this.startButton = this.add.sprite(1170, (1080 / 2) + 1, 'twoPlayer').setScale(1.1)
    this.startButton.setInteractive({ useHandCursor: true })
    this.startButton.on('pointerdown', () => this.clickButton())
    // create single start button
    this.startButton1 = this.add.sprite(750, (1080 / 2) + 1, 'singlePlayer').setScale(1.1)
    this.startButton1.setInteractive({ useHandCursor: true })
    this.startButton1.on('pointerdown', () => this.clickButton2())
    // create instruction button
    this.instructionButton = this.add.sprite(350, (1080 / 7) + 1, 'instructionButton').setScale(0.50)
    this.instructionButton.setInteractive({ useHandCursor: true })
    this.instructionButton.on('pointerdown', () => this.clickButton1())
  }

  update (time, delta) {
  }
  // switch to gameScene on start button clicked
  clickButton () {
    this.scene.start('gameScene')
    this.sound.play('button')
  }
    // switch to gameSceneSingle on start single button clicked
  clickButton2 () {
    this.scene.start('gameSceneSingle')
    this.sound.play('button')
  }
  // switch to instructionScene on instruction button clicked
  clickButton1 () {
    this.scene.start('instructionScene')
    this.sound.play('button')
  }
}

export default MenuScene