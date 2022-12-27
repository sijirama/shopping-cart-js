let label = document.getElementById("label")
let shoppingcart = document.getElementById("shopping-cart")

let basket = JSON.parse(localStorage.getItem("data")) || []

let update = () => {
    let value = basket.map((x)=>x.item).reduce((a, b) => a + b, 0)
    cartamount.textContent = `${value}`
}
update()


let generatecarditems = () =>{
    
    //cart is not empty
    if(basket.length !== 0){
        return shoppingcart.innerHTML = basket.map((x) => {
            let{id , item} = x
            let shop = shopitemdata.find((z) => z.id == id) || []
            return(`
    

                <div class="cart-item">
                    <img width=100 src=${shop.img} alt="">
                
                    <div class="details">
                        <!-- <h1>ID:${id}</h1> -->
                
                        <div class="title-price-x">
                            <h4>
                                <p>${shop.name}</p>
                                <p class="item-price">$${shop.price}</p>
                            </h4>
                            <i onclick = "deleteitem(${x.id})" class="bi bi-x-lg"></i>
                        </div>
                
                
                        <div class="cart-buttons">
                        
                            <div class="buttons">
                                <i onclick = "increment(${x.id})" class="bi bi-plus-lg"></i>
                                <div id=${x.id} class="quantity">
                                ${x.item === undefined? 0 : x.item}
                                </div>
                                <i onclick = "decrement(${x.id})" class="bi bi-dash-lg"></i>
                            </div>

                        </div>

                        <h2 class="total-item-price">
                            $${x.item * shop.price}
                        </h2>
                        
                    </div>
                </div>
        



            `
        )}).join(' ')
    }

    //cart is empty
    else{
        shoppingcart.innerHTML = ``
        label.innerHTML = `
        <h2>Cart is Empty</h2>
        <a href="index.html">
            <button class="HomeBtn">Back to Home</button>
        </a>
        `
    }
}

generatecarditems()




let increment = (id) => { 
    let search = basket.find((x)=> x.id === id)
    if(search === undefined){
        basket.push(
            {
            id:id,
            item:1
            }
        )
    }else{
        search.item += 1
    }

    localStorage.setItem("data" , JSON.stringify(basket))

    generatecarditems()
    updatebutton(id)
}

let decrement = (id) => {
    let search = basket.find((x) => x.id === id)

    if (search !== undefined){
        if (search.item > 1){
            search.item -= 1
        }else{
            let indexx = basket.indexOf(search)
            basket.splice(indexx, 1)
        }
    }

    localStorage.setItem("data" , JSON.stringify(basket))

    generatecarditems()
    updatebutton(id)
}

let updatebutton = (id) =>{
    const value = document.getElementById(`${id}`)
    let search = basket.find((x) => x.id === id )
    if(search == undefined){
        value.innerHTML = '0'
    }else{
        value.innerHTML = search.item
    }
    update()
    
}

let deleteitem  = (id) =>{
    basket = basket.filter((x) => x.id !== id)
    localStorage.setItem("data" , JSON.stringify(basket))
    generatecarditems()
}
