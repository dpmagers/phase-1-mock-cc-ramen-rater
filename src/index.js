
// http://localhost:3000

// GET /ramens
// GET /ramens/:id

//Global Variables
const newRamenForm = document.querySelector("#new-ramen")
const updateRamenForm = document.querySelector("#edit-ramen")
const titleElement = document.querySelector('.name')
const restaurantElement = document.querySelector('.restaurant')
const ratingElement = document.querySelector('#rating-display')
const imageDetail = document.querySelector('.detail-image')
const commentElement = document.querySelector('#comment-display')
let updatedRamen

//fetches 
fetch('http://localhost:3000/ramens')
    .then(res => res.json())
    .then(ramenArray => {
        ramenArray.forEach(ramen => {
            renderRamenMenu(ramen)
            renderRamenDetail(ramen)
        })
    })

//fetch for bonus deliverable (loading first ramen when page loads)
fetch('http://localhost:3000/ramens/1')
    .then(res => res.json())
    .then(data => {
        renderRamenDetail (data)
    })

//functions
function renderRamenDetail (ramen) {
    titleElement.textContent = ramen.name
    restaurantElement.textContent = ramen.restaurant
    imageDetail.src = ramen.image
    ratingElement.textContent = ramen.rating
    commentElement.textContent = ramen.comment
}

function renderRamenMenu(ramen) {
    const menuContainer = document.querySelector("#ramen-menu")
    const ramenMenuImg = document.createElement('img')
    ramenMenuImg.src = ramen.image
    menuContainer.append(ramenMenuImg)

    ramenMenuImg.addEventListener('click', ()=>{
        renderRamenDetail (ramen)
    })
}

function handleNewRamenForm (e) {
    e.preventDefault()
    const newRamen = {
        name: e.target.name.value,
        restaurant: e.target.restaurant.value,
        image: e.target.image.value,
        rating: e.target.rating.value,
        comment: e.target["new-comment"].value
    }
    renderRamenMenu(newRamen)
    renderRamenDetail(newRamen)
    newRamenForm.reset()
}

//event handler 
newRamenForm.addEventListener('submit', handleNewRamenForm)


////ATTEMPT TO DO EDIT FORM 
// updateRamenForm.addEventListener('submit', e => {
//     e.preventDefault()
//     updatedRamen = {
//     name: updatedRamen.textContent = ramen.name,
//     restaurant: e.target.restaurant.value,
//     image: e.target.image.value,
//     rating: e.target.rating.value,
//     comment: e.target["new-comment"].value
//     }
//     renderRamenDetail(ramen)
//     renderRamenDetail(updatedRamen)
//     updateRamenForm.reset()
// })
//it's only updating the two fields not the whole thing 
//so it's missing name, restaurant, image

    // updateRamenForm.addEventListener('submit', e => {
    //     e.preventDefault()
    //     updatedRamen = {
    //     // name: ramen.name,
    //     // restaurant: restaurantElement.textContent = ramen.restaurant,
    //     // image: imageDetail.src = ramen.image,
    //     rating: e.target.rating.value,
    //     comment: e.target["new-comment"].value
    //     }
    //     renderRamenDetail(ramen)
    //     renderRamenDetail(updatedRamen)
    //     updateRamenForm.reset()
    // })