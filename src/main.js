const shop = document.getElementById('shop')
const cartamount = document.getElementById('cartamount')


let basket = JSON.parse(localStorage.getItem("data")) || []

let generateshop = () => {

    //is the basket getting updated? Yes
    let see = basket
    //console.log(see)

    return(shop.innerHTML = shopitemdata.map((x) => {
        
        //TODO: Why cant i use (===) to check?
        let search = basket.find((z) => z.id == x.id) || []

        return(`
    <div id="product-id-${x.id}" class="item">
        <img width="220" src=${x.img} alt="">
        <div class="details">
            <h3>${x.name}</h3>
            <p>${x.desc}</p>
            <div class="price-quant">
                <h2>$${x.price}</h2>
                <div class="buttons">
                    <i onclick = "increment(${x.id})" class="bi bi-plus-lg"></i>
                    <div id=${x.id} class="quantity">
                    ${search.item === undefined? 0 : search.item}
                    </div>
                    <i onclick = "decrement(${x.id})" class="bi bi-dash-lg"></i>
                </div>
            </div>
        </div>
    </div>
    `)}).join(' '))
}

generateshop()

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

    // console.log(basket)
    // update()
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
    // console.log(basket)
    // update()
    updatebutton(id)
}

let updatebutton = (id) =>{
    const value = document.getElementById(`${id}`)
    let search = basket.find((x) => x.id === id )
    if(search == undefined){
        value.innerHTML = '0'
    }else{
        value.innerHTML = search.item
        // console.log(search.item)
    }
    update()
    
}

// Update the cart amount carton (Top right.)
let update = () => {
    let value = basket.map((x)=>x.item).reduce((a, b) => a + b, 0)
    cartamount.textContent = `${value}`
}

//Call th update func to join main process thread.
update()