const door = document.querySelector("#axis_door")
const main_sound = document.querySelector("#jukebox_audio")
const gem = document.querySelector("#black_gem")
const pedestral = document.querySelector("#gem_pedestral")
const road = document.querySelector("#black_road")
const scary_img = document.querySelector("#plane_jumpscare")


door.addEventListener('click', () => {
    // importante this.id\
    // door opening animation
    door.setAttribute("animation", `property: rotation; from: 0 0 0; to: 0 90 0; dur:1500`);

    // make things visible again
    gem.setAttribute("position", {x:0.04094, y:1.5, z:-29})
    pedestral.setAttribute("position", {x:0.04094, y:-0.02127, z:-29})
    road.setAttribute("material", "src:#road; repeat: 4 1; opacity: 100")


    main_sound.setAttribute("src", "/sound/halo_song.mp3")
    main_sound.setAttribute("position", {x:0.04094, y:1.5, z:-29})
    
})

gem.addEventListener('click', () => {

    scary_img.setAttribute("rotation", "0 -180 0")
    scary_img.setAttribute("animation", "property: position; from: 0 2.5 -62.635; to: 0 2.5 62; dur:20000")
})
