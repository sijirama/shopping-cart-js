const shop = document.getElementById('shop')
let shopitemdata = [
{
    id:'001',
    name:'Jean Pants',
    price:45,
    desc:'Jean Pants for a good fit by uniqlo',
    img:'img/corp.jpg'
},
{
    id:'002',
    name:'Casual suit jackets',
    price:60,
    desc:'Suit jackets for a good fit by uniqlo',
    img:'img/casgrey.jpg'
},
{   
    id:'003',
    name:'Casual T-shirts',
    price:50,
    desc:'Casual T-shirts for a good fit by uniqlo',
    img:'img/casorange.jpg',
},
{
    id:'004',
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
                    <i class="bi bi-plus-lg"></i>
                    <div id=${x.id} class="quantity">0</div>
                    <i class="bi bi-dash-lg"></i>
                </div>
            </div>
        </div>
    </div>
    `)
    }
    ).join(' '))
}

generateshop()