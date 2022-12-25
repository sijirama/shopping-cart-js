const shop = document.getElementById('shop')
const cartamount = document.getElementById('cartamount')

let shopitemdata = [
{
    id:'1',
    name:'Jean Pants',
    price:45,
    desc:'Jean Pants for a good fit by uniqlo',
    img:'img/corp.jpg'
},
{
    id:'2',
    name:'Casual suit jackets',
    price:60,
    desc:'Suit jackets for a good fit by uniqlo',
    img:'img/casgrey.jpg'
},
{   
    id:'3',
    name:'Casual T-shirts',
    price:50,
    desc:'Casual T-shirts for a good fit by uniqlo',
    img:'img/casorange.jpg',
},
{
    id:'4',
    name:'Angels and Roses T-shirts',
    price:60,
    desc:'Angel and roses merchandise shirts (1999)',
    img:'img/casonhanger.jpg',
},
// {
//     id:'005',
//     name:'Demons and Roses T-shirts',
//     price:59,
//     desc:'Angel and roses merchandise shirts (1999)',
//     img:'img/casonhanger.jpg',
// },
]

let basket = []

let generateshop = () => {
    return(shop.innerHTML = shopitemdata.map((x) => {
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
                    <div id=${x.id} class="quantity">0</div>
                    <i onclick = "decrement(${x.id})" class="bi bi-dash-lg"></i>
                </div>
            </div>
        </div>
    </div>
    `)
    }
    ).join(' '))
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
    // console.log(basket)
    // update()
    updatebutton(id)
}

let decrement = (id) => {
    let search = basket.find((x) => x.id === id)
    if (search.item > 1){
        search.item -= 1
    }else{
        let indexx = basket.indexOf(search)
        basket.splice(indexx, 1)
    }
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

let update = () => {
    let value = basket.map((x)=>x.item).reduce((a, b) => a + b, 0)
    cartamount.textContent = `${value}`
}
