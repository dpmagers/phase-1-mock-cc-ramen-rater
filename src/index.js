// write your code here


const baseURL = 'http://localhost:3000/ramens'

fetch(baseURL)
    .then(respObj => respObj.json())
    .then(dataArray => {
        dataArray.forEach(dataObj => {
            renderRamenBanner(dataObj)
        })
        renderRamenDetail(dataArray[1])
    })
    
function renderRamenDetail(dataObj) {
    const imageDetail = document.querySelector(".detail-image")
    imageDetail.src = dataObj.image
    const ramenName = document.querySelector(".name")
    ramenName.textContent = dataObj.name
    const restaurantName = document.querySelector(".restaurant")
    restaurantName.textContent = dataObj.restaurant

    const ramenRating = document.getElementById('rating-display')
    ramenRating.textContent = dataObj.rating
    const ramenComment = document.getElementById('comment-display')
    ramenComment.textContent = dataObj.comment
}

//RAMEN DETAIL
function renderRamenBanner(dataObj) {
    const ramenContainer = document.getElementById('ramen-menu')
    const ramenImage = document.createElement('img')
    ramenImage.src = dataObj.image
    ramenContainer.append(ramenImage)

    ramenImage.addEventListener('click', () => {
//click on banner pic to display detail
        renderRamenDetail(dataObj)
    })
}

//NEW RAMEN FORM 
const ramenForm = document.getElementById("new-ramen")

ramenForm.addEventListener('submit', e => {
    e.preventDefault()
    let newRamen = {

        name: e.target.name.value,
        restaurant: e.target.restaurant.value,
        image: e.target.image.value,
        rating: e.target.rating.value,
        comment: e.target["new-comment"].value
    }
    renderRamenBanner(newRamen)
    renderRamenDetail(newRamen)
    console.log(newRamen)
    ramenForm.reset()
})

//OBJECT IN dataArray
    // 0:
        // comment: "Delish. Can't go wrong with a classic!"
        // id: 1
        // image: "./assets/ramen/shoyu.jpg"
        // name: "Shoyu Ramen"
        // rating: 7
        // restaurant: "Nonono"
        // [[Prototype]]: Object





























































// //http://localhost:3000
// //GET /ramens
// //GET /ramens/:id

// // See all ramen images in the div with the id of ramen-menu. 
// // When the page loads, request the data from the server to get all the ramen objects.
// // Then, display the image for each of the ramen using an img tag 
// //inside the #ramen-menu div.

// // Click on an image from the #ramen-menu div and see all the info about 
// //that ramen displayed inside the #ramen-detail div and where it says insert comment 
// //here and insert rating here.

// // Create a new ramen after submitting the new-ramen form. 
// // The new ramen should be added to the#ramen-menu div. 
// // The new ramen does not need to persist; in other words, if you refresh the page, 
// // it's okay that the new ramen is no longer on the page.


// //I've created the fetch
// //need to iterate array to populate the menu items 

// //need to create form that adds new ramen
// //need to create event listener that gives functionality to image clicks 



// // const menuImage = document.getElementById("ramen-menu")

// // const menuDetail = document.getElementById("ramen-detail")


// // fetch ('http://localhost:3000/ramens')
// //     .then (resObj => resObj.json())
// //     .then (ramenArray => {
// //         console.log(ramenArray)

// //         ramenArray.forEach(ramenObj => {
// //            //append image to div (menuImage)
// //            newImage = document.createElement('img') 
// //            newImage.src = url
// //            menuImage.appendChild(img)
        
// //             //append details to menuDetail 

// //             h2.textContent(name.value)
// //     })
    
// //     })

// //remember to make use of the diff url endpoints (all and id)
// //can do with two fetches or one 

// //

// console.log("are we hooked up?")

// function handleRamenStuff(ramenObj){
//     console.log("yep", ramenObj)
// }



// const menuContainer = document.getElementById('ramen-menu')

// const imageElement = document.querySelector('.detail-image')
// const nameElement = document.querySelector('.name')
// const restaurantElement = document.querySelector('.restaurant')
// const ratingElement = document.querySelector('rating-display')
// const commentElement = document.querySelector('comment-display')

// const formElement = document.getElementById('new-ramen')

// formElement.addEventListener( 'submit', e => {
//     e.preventDefault()
//     console.log("we good")
//     console.log(e.target.name.value) //will all be in the target attribute 
// //need to take ramenObj stuff and put it up here
//     const newRamenObj = {
//         name: e.target.name.value,
//         restaurant: e.target.restaurant.value,
//         image: e.target.image.value,
//         rating: e.target.rating.value,
//         comment: e.target["new-comment"].value, ///flag 
//     }
//     console.log(newRamenObj)
//     renderTopPic(newRamenObj)
// })

// function showRamen (ramenObj) {
//     imageElement.src = ramenObj.image
//     nameElement.textContent = ramenObj.name
//     restaurantElement.textContent = ramenObj.restaurant
//     ratingElement.textContent = ramenObj.rating
//     ratingComment.textContent = ramenObj.comment

// }
// //THIS IS SECOND DELIVERABLE 

// fetch('http://localhost:3000/ramens')
//   //  .then (function(respObj) {return respObj.json()})
//     .then (respObj => respObj.json())
//     .then ( ramensArray => console.log(ramensArray)) {  //needs a code block if you want to return an object
//           ramensArray.forEach(ramenObj => {
//             console.log(ramenObj)       //this is how to iterate through the array
//           //make a new image element

//           //change that new element to have the ramenObj's data
//           //append the new element to the DOM
        
//           //add image by calling on document object
//           const img = document.createElement('img')
//           console.log(img) //getting blank images; the img node has atribute
//           img.src  = ramenObj.image    //to value of the ramenObj data
//           menuContainer.append(img) //THIS IS FIRST DELIVERABLE 

//           //add a listener to new img element (2nd deliverable)
//           img.addEventListener('click', () =>  showRamen(ramenObj)) //          () => console.log('does it work'))
          
//             })                                              

//     } 
//     //go ahead and seperate this out from forEach 
//     function showRamen(ramenObj) {
//         console.log('want to see some ramen', ramenObj)
//         //all the spots located for all the info 
//     }


//     //argument forEach is a function (element, index, whole array)
//     //first iterating thorugh array 
        
    