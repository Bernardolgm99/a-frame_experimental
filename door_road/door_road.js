//const Panel = document.querySelector("#Panel_Signs")
const door = document.querySelector("#old_door")
//const Plane_Image = document.querySelector("#Plane_Image")


door.addEventListener('click', (event) => {
    // importante this.id\
    
    door.setAttribute("position", {x:0.644, y:2.513, z:-23.138})
    door.setAttribute("animation", `property: rotation; from: 0 180 0; to: 0 90 0; dur:500`);
    
})
