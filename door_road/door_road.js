const door = document.querySelector("#axis_door")
const main_sound = document.querySelector("#jukebox_audio")
const gem = document.querySelector("#black_gem")
const pedestral = document.querySelector("#gem_pedestral")
const road = document.querySelector("#black_road")
const scary_img = document.querySelector("#plane_jumpscare")
const phone = document.querySelector("#table_phone")
const soundScare = document.querySelector("#jsound")


door.addEventListener('click', () => {
    // importante this.id\
    // door opening animation
    door.setAttribute("animation", `property: rotation; from: 0 0 0; to: 0 90 0; dur:1500`);

    // make things visible again
    gem.setAttribute("scale", "0.001 0.001 0.001")
    pedestral.setAttribute("scale", "0.010 0.010 0.010")
    road.setAttribute("material", "src:#road; repeat: 4 1; opacity: 100")


    main_sound.setAttribute("src", "/sound/halo_song.mp3")
    main_sound.setAttribute("position", {x:0.04094, y:1.5, z:-29})
    
})

gem.addEventListener('click', () => {delay(scary_img, soundScare, phone)})

async function delay(scary_img, soundScare, phone) {
    
    scary_img.setAttribute("rotation", "0 -180 0")
    scary_img.setAttribute("animation", "property: position; from: 0 2.5 -35; to: 0 2.5 100; dur:1500")
    
    soundScare.setAttribute("volume", "1000")
    soundScare.setAttribute("animation", "property: position; from: 0 2.5 -35; to: 0 2.5 100; dur:1500")
    
    phone.setAttribute("scale", "0.01 0.01 0.01")

    await sleep(1500)


    soundScare.setAttribute("volume", "0")

}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  
}