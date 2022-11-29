/**
 * (c) Meta Platforms, Inc. and affiliates. Confidential and proprietary.
 */

//==============================================================================
// Welcome to scripting in Meta Spark Studio! Helpful links:
//
// Scripting Basics - https://fb.me/spark-scripting-basics
// Reactive Programming - https://fb.me/spark-reactive-programming
// Scripting Object Reference - https://fb.me/spark-scripting-reference
// Changelogs - https://fb.me/spark-changelog
//
// Meta Spark Studio extension for VS Code - https://fb.me/spark-vscode-plugin
//
// For projects created with v87 onwards, JavaScript is always executed in strict mode.
//==============================================================================

// Load the modules
const Scene = require('Scene');
const Materials = require('Materials');
const NativeUI = require('NativeUI');
const Textures = require('Textures');

// Use export keyword to make a symbol available in scripting debug console
export const Diagnostics = require('Diagnostics');

// To use variables and functions across files, use export/import keyword
// export const animationDuration = 10;

// Use import keyword to import a symbol from another file
// import { animationDuration } from './script.js'

Promise.all([

  Textures.findFirst('blank'),
  Textures.findFirst('1'),
  Textures.findFirst('2'),
  Textures.findFirst('3'),
  Textures.findFirst('4'),
  Textures.findFirst('5'),
  Textures.findFirst('6'),
  Textures.findFirst('7'),
  Textures.findFirst('8'),
  Textures.findFirst('9'),
  Textures.findFirst('10'),
  Textures.findFirst('11'),
  Textures.findFirst('12'),
  Textures.findFirst('13'),
  Textures.findFirst('14'),
  Textures.findFirst('15'),
  Textures.findFirst('16'),
  Textures.findFirst('17'),
  Textures.findFirst('18'),
  Textures.findFirst('19'),
  Textures.findFirst('20'),
  Textures.findFirst('21'),
  Textures.findFirst('22'),
  Textures.findFirst('23'),
  Textures.findFirst('24'),
  Textures.findFirst('25'),
  Textures.findFirst('26'),
  Textures.findFirst('27'),
  Textures.findFirst('28'),
  Textures.findFirst('29'),
  Textures.findFirst('30'),
  Textures.findFirst('31'),
  Textures.findFirst('32'),

  Textures.findFirst('1(1)'),
  Textures.findFirst('2(1)'),
  Textures.findFirst('3(1)'),
  Textures.findFirst('4(1)'),
  Textures.findFirst('5(1)'),
  Textures.findFirst('6(1)'),
  Textures.findFirst('7(1)'),
  Textures.findFirst('8(1)'),
  Textures.findFirst('9(1)'),
  Textures.findFirst('10(1)'),
  Textures.findFirst('11(1)'),
  Textures.findFirst('12(1)'),
  Textures.findFirst('13(1)'),
  Textures.findFirst('14(1)'),
  Textures.findFirst('15(1)'),
  Textures.findFirst('16(1)'),
  Textures.findFirst('17(1)'),
  Textures.findFirst('18(1)'),
  Textures.findFirst('19(1)'),
  Textures.findFirst('20(1)'),
  Textures.findFirst('21(1)'),
  Textures.findFirst('22(1)'),
  Textures.findFirst('23(1)'),
  Textures.findFirst('24(1)'),
  Textures.findFirst('25(1)'),
  Textures.findFirst('26(1)'),
  Textures.findFirst('27(1)'),
  Textures.findFirst('28(1)'),
  Textures.findFirst('29(1)'),
  Textures.findFirst('30(1)'),
  Textures.findFirst('31(1)'),
  Textures.findFirst('32(1)'),

  Materials.findFirst('meshMat0'),

// Now, we wait for a "go ahead" from the script to let us know when
// we can start using our assets and creating the NativeUI Picker

]).then(function(results){
    
    // Assets are loaded, so let's set them all so we can use them later in the script.
    // The assets are all returned in an object called "results" in the order that we 
    // loaded them. Remember, the index starts at 0 so the first asset is always results[0],
    // the next is results[1], etc.

    // First, we set the buttons for the NativeUI Picker
    const res = [];

    for (let i = 0, len = results.length-1; i < len; i++) 
    {
      res[i] = results[i];
    };

    const mat = results[results.length-1];
    mat.opacity = 0;

    // Now, we can finally start building the NativeUI Picker
    const configuration = {

      // This index controls where the NativeUI Picker starts.
      // Let's keep things simple for now and start on the first 
      // button, so we keep it at 0. Remember most things start at 0, not 1.
      selectedIndex: 0,

      // These are the image textures to use as the buttons in the NativeUI Picker
      items: [
        
        {image_texture: res[0]},
        {image_texture: res[1]},
        {image_texture: res[2]},
        {image_texture: res[3]},
        {image_texture: res[4]},
        {image_texture: res[5]},
        {image_texture: res[6]},
        {image_texture: res[7]},
        {image_texture: res[8]},
        {image_texture: res[9]},
        {image_texture: res[10]},
        {image_texture: res[11]},
        {image_texture: res[12]},
        {image_texture: res[13]},
        {image_texture: res[14]},
        {image_texture: res[15]},
        {image_texture: res[16]},
        {image_texture: res[17]},
        {image_texture: res[18]},
        {image_texture: res[19]},
        {image_texture: res[20]},
        {image_texture: res[21]},
        {image_texture: res[22]},
        {image_texture: res[23]},
        {image_texture: res[24]},
        {image_texture: res[25]},
        {image_texture: res[26]},
        {image_texture: res[27]},
        {image_texture: res[28]},
        {image_texture: res[29]},
        {image_texture: res[30]},
        {image_texture: res[31]},
        {image_texture: res[32]}
      ],

      matTextures: [
        {image_texture: res[33]},
        {image_texture: res[34]},
        {image_texture: res[35]},
        {image_texture: res[36]},
        {image_texture: res[37]},
        {image_texture: res[38]},
        {image_texture: res[39]},
        {image_texture: res[40]},
        {image_texture: res[41]},
        {image_texture: res[42]},
        {image_texture: res[43]},
        {image_texture: res[44]},
        {image_texture: res[45]},
        {image_texture: res[46]},
        {image_texture: res[47]},
        {image_texture: res[48]},
        {image_texture: res[49]},
        {image_texture: res[50]},
        {image_texture: res[51]},
        {image_texture: res[52]},
        {image_texture: res[53]},
        {image_texture: res[54]},
        {image_texture: res[55]},
        {image_texture: res[56]},
        {image_texture: res[57]},
        {image_texture: res[58]},
        {image_texture: res[59]},
        {image_texture: res[60]},
        {image_texture: res[61]},
        {image_texture: res[62]},
        {image_texture: res[63]},
        {image_texture: res[64]}
      ]

    };

    // Create the NativeUI Picker
    const picker = NativeUI.picker;

    // Load our configuration
    picker.configure(configuration);

    // Show the NativeUI Picker
    picker.visible = true;

    // This is a monitor that watches for the picker to be used.
    picker.selectedIndex.monitor().subscribe(function(val) 
    {
      if(val.newValue == 0)
        mat.opacity = 0;
      else{
        mat.diffuse = configuration.matTextures[(val.newValue)-1].image_texture;
        mat.opacity = 1;
      }
    });

});
