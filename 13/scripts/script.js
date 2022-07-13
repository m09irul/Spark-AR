// Load in the required modules
const NativeUI = require('NativeUI');
const Textures = require('Textures');
const Patches = require('Patches');

// Load in the Diagnostics module
const Diagnostics = require('Diagnostics');

(async function () {  // Enables async/await in JS [part 1]

    // Create a reference to the NativeUI's picker object
    const picker = NativeUI.picker;

    // Locate the material and textures in the project
    const [tex0, tex1, tex2, tex3, tex4, tex5, tex6, tex7, tex8, tex9] = await Promise.all([
        Textures.findFirst('ui-01'),
        Textures.findFirst('ui-02'),
        Textures.findFirst('ui-03'),
        Textures.findFirst('ui-04'),
        Textures.findFirst('ui-05'),
        Textures.findFirst('ui-06'),
        Textures.findFirst('ui-07'),
        Textures.findFirst('ui-08'),
        Textures.findFirst('ui-09'),
        Textures.findFirst('ui-10')
    ]);

    // A JSON configuration for the picker object, with an initial index and
    // the items to include in the picker
    const configuration = {
      selectedIndex: 0,
      items: [
        {image_texture: tex0},
        {image_texture: tex1},
        {image_texture: tex2},
        {image_texture: tex3},
        {image_texture: tex4},
        {image_texture: tex5},
        {image_texture: tex6},
        {image_texture: tex7},
        {image_texture: tex8},
        {image_texture: tex9}
      ]
    };

    // Configure the picker with the previously created configuration
    picker.configure(configuration);

    //Display the picker
    picker.visible = true;

    // Assign the first item from the configuration as the material's 
    // diffuse texture
    //mat.diffuse = configuration.items[0].image_texture;

    // Update the material's diffuse texture with the currently selected item
    // in the picker
    picker.selectedIndex.monitor().subscribe(function(index) {
       // mat.diffuse = configuration.items[index.newValue].image_texture;
       Patches.inputs.setScalar('selectedIndex', index.newValue);
    });

})(); // Enables async/await in JS [part 2]