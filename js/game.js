/* global phaser */

// Copyright (c) 2020 Mr Coxall All rights reserved
// Modified 2022 Rory Mackay
//
// Created by: Rory Mackay
// Date: June 2022
// This file contains the JS functions for the index.html file

// import js file for splash scene
import SplashScene from './splashScene.js'

// import js file for title scene
import TitleScene from './titleScene.js'

// import js file for menu scene
import MenuScene from './menuScene.js'

// import js file for game scene
import GameScene from './gameScene.js'

// import js file for game scene
import GameSceneSingle from './gameSceneSingle.js'

// import js file for instruction scene
import InstructionScene from './instructionScene.js'

// Our game scenes
const splashScene = new SplashScene
const titleScene = new TitleScene
const menuScene = new MenuScene
const gameScene = new GameScene
const gameSceneSingle = new GameSceneSingle
const instructionScene = new InstructionScene

// Game scene
const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  physics: {
    default: 'arcade',
    arcade: {
      debug: false
    }
  },
  // set background colour to grey
  backgroundColor: 0x5f6e7a,
  scale: {
    mode: Phaser.Scale.FIT,
    // we place it in the middle of the page
    autoCenter: Phaser.Scale.CENTER_BOTH
  }
}

const game = new Phaser.Game(config)

// load scenes
// NOTE: remember any "key" is global and CAN NOT be reused!
game.scene.add('splashScene', splashScene)
game.scene.add('titleScene', titleScene)
game.scene.add('menuScene', menuScene)
game.scene.add('gameScene', gameScene)
game.scene.add('instructionScene', instructionScene)
game.scene.add('gameSceneSingle', gameSceneSingle)

// start title
game.scene.start('splashScene')