/* global phaser */

// Copyright (c) 2022 Rory Mackay All rights reserved
//
// Created by: Rory Mackay
// Date: June 2022
// This file contains the JS functions for the index.html file

// Game scene
const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  physics: {
    default: 'arcade',
    arcade: {
      debug: true
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
console.log(game)