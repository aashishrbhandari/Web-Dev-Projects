console.log(`I am Index.js`);


/*

class: wallart-birds-btn
Wall Arts: Brids

class: wallart-animals-btn
Wall Arts: Animals
                              
class: wallart-flowers-btn
Wall Arts: Flowers

class: wallart-frames-btn
Wall Arts: Frames

*/

productCardInfo = [

    {
        "img": "images/products/product_wallart_birds_1.jpg",
        "title": "Wall Cart: Birds 1",
        "category": "birds",
        "price": "2300.00",
        "link": "products/wallcard_birds_1.html"
    },

    {
        "img": "images/products/product_wallart_birds_2.jpg",
        "title": "Wall Cart: Birds 2",
        "category": "birds",
        "price": "1900.00",
        "link": "products/wallcard_birds_2.html"
    },

    {
        "img": "images/products/product_wallart_birds_3.jpg",
        "title": "Wall Cart: Birds 3",
        "category": "birds",
        "price": "2700.00",
        "link": "products/wallcard_birds_3.html"
    },

    {
        "img": "images/products/product_wallart_animals_1.jpg",
        "title": "Wall Cart: Animals 1",
        "category": "animals",
        "price": "2700.00",
        "link": "products/wallcard_animals_1.html"
    },

    {
        "img": "images/products/product_wallart_animals_2.jpg",
        "title": "Wall Cart: Animals 2",
        "category": "animals",
        "price": "2700.00",
        "link": "products/wallcard_animals_2.html"
    },

    {
        "img": "images/products/product_wallart_animals_3.jpg",
        "title": "Wall Cart: Animals 3",
        "category": "animals",
        "price": "2700.00",
        "link": "products/wallcard_animals_3.html"
    },

    {
        "img": "images/products/product_wallart_flowers_1.jpg",
        "title": "Wall Cart: Flowers 1",
        "category": "flowers",
        "price": "2300.00",
        "link": "products/wallcard_flowers_1.html"
    },

    {
        "img": "images/products/product_wallart_flowers_2.jpg",
        "title": "Wall Cart: Flowers 2",
        "category": "flowers",
        "price": "1900.00",
        "link": "products/wallcard_flowers_2.html"
    },

    {
        "img": "images/products/product_wallart_flowers_3.jpg",
        "title": "Wall Cart: Flowers 3",
        "category": "flowers",
        "price": "2700.00",
        "link": "products/wallcard_flowers_3.html"
    },

    {
        "img": "images/products/product_wallart_frames_1.jpg",
        "title": "Wall Cart: Frames 1",
        "category": "frames",
        "price": "2700.00",
        "link": "products/wallcard_frames_1.html"
    },

    {
        "img": "images/products/product_wallart_frames_2.jpg",
        "title": "Wall Cart: Frames 2",
        "category": "frames",
        "price": "2700.00",
        "link": "products/wallcard_frames_2.html"
    },

    {
        "img": "images/products/product_wallart_frames_3.jpg",
        "title": "Wall Cart: Frames 3",
        "category": "frames",
        "price": "2700.00",
        "link": "products/wallcard_frames_3.html"
    },




]



document.querySelector(".wallart-birds-btn").addEventListener("click", () => {
    document.querySelector(".product-cards-details").innerHTML = ""
    let productCardInfoFiltered = productCardInfo.filter((oneCategory) => oneCategory.category === "birds");

    /*
     // Use This For Actual Work

     for (let oneProductCardInfo of productCardInfoFiltered) {
        document.querySelector(".product-cards-details").innerHTML += createProductCard(oneProductCardInfo);
     }

    */

    // To Show More Data

    for (let i = 0; i < 5; i++) {
        for (let oneProductCardInfo of productCardInfoFiltered) {
            document.querySelector(".product-cards-details").innerHTML += createProductCard(oneProductCardInfo);
        }
    }



})

document.querySelector(".wallart-animals-btn").addEventListener("click", () => {
    document.querySelector(".product-cards-details").innerHTML = ""
    let productCardInfoFiltered = productCardInfo.filter((oneCategory) => oneCategory.category === "animals");

    /*
     // Use This For Actual Work


    for (let oneProductCardInfo of productCardInfoFiltered) {
        document.querySelector(".product-cards-details").innerHTML += createProductCard(oneProductCardInfo);
    }

    */


    for (let i = 0; i < 5; i++) {
        for (let oneProductCardInfo of productCardInfoFiltered) {
            document.querySelector(".product-cards-details").innerHTML += createProductCard(oneProductCardInfo);
        }
    }


})

document.querySelector(".wallart-flowers-btn").addEventListener("click", () => {
    document.querySelector(".product-cards-details").innerHTML = ""
    let productCardInfoFiltered = productCardInfo.filter((oneCategory) => oneCategory.category === "flowers");

    /*
     // Use This For Actual Work

     for (let oneProductCardInfo of productCardInfoFiltered) {
        document.querySelector(".product-cards-details").innerHTML += createProductCard(oneProductCardInfo);
     }

    */

    // To Show More Data

    for (let i = 0; i < 5; i++) {
        for (let oneProductCardInfo of productCardInfoFiltered) {
            document.querySelector(".product-cards-details").innerHTML += createProductCard(oneProductCardInfo);
        }
    }


})

document.querySelector(".wallart-frames-btn").addEventListener("click", () => {
    document.querySelector(".product-cards-details").innerHTML = ""
    let productCardInfoFiltered = productCardInfo.filter((oneCategory) => oneCategory.category === "frames");


    /*
     // Use This For Actual Work

     for (let oneProductCardInfo of productCardInfoFiltered) {
        document.querySelector(".product-cards-details").innerHTML += createProductCard(oneProductCardInfo);
     }

    */

    // To Show More Data

    for (let i = 0; i < 5; i++) {
        for (let oneProductCardInfo of productCardInfoFiltered) {
            document.querySelector(".product-cards-details").innerHTML += createProductCard(oneProductCardInfo);
        }
    }


})


function createProductCard(productCardInfo) {
    productInfoCard = `<div class="col">
        <div class="card p-2 border-none h-100 shadow-sm">
            <img
                src="${productCardInfo.img}"
                class="card-img-top"
                alt="..."
            />
            <div class="card-body">
            </div>
            <div class="card-footer bg-transparent border-none p-0">
                <h5 class="card-title">
                    ${productCardInfo.title}
                </h5>
                <h6 class="card-text">INR: Rs. ${productCardInfo.price}</h6>
                <a href="${productCardInfo.link}" class="btn btn-outline-dark"
                    >Explore</a
                >
            </div>
        </div>
    </div>`
    return productInfoCard;
}

//Default
document.querySelector(".wallart-birds-btn").click();


document.querySelector(".change-class-container").addEventListener("click", () => {
    document.querySelectorAll(".container-custom").forEach((oneElement) => {
        oneElement.classList.replace("container-custom", "container");
    })
})