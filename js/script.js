const animated = document.querySelectorAll(".photos")


animated.forEach((photo)=>{
    photo.addEventListener('click',()=>{
        removeActiveClasses()
        photo.classList.add("active")
        console.log(photo)  
    })
})

function removeActiveClasses(){
    animated.forEach(photo=>{
    photo.classList.remove("active")
    });
}