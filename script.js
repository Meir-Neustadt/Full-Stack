const root = document.querySelector('#root')
const search = document.querySelector('#input')
const selector = document.querySelector('#selctor')
const checkbox = document.querySelector('#checkbox')


const data = [
    {
        "id": "1",
        "cat": "food",
        "name": "Milk",
        "price": "6",
        "image": "https://cdn.pixabay.com/photo/2017/07/05/15/41/milk-2474993_150.jpg"
    },
    {
        "id": "2",
        "cat": "food",
        "name": "Bread",
        "price": "8",
        "image": "https://cdn.pixabay.com/photo/2014/07/22/09/59/bread-399286_150.jpg"
    },
    {
        "id": "4",
        "cat": "food",
        "name": "Eggs",
        "price": "12",
        "image": "https://cdn.pixabay.com/photo/2015/09/17/17/19/egg-944495_150.jpg"
    },
    {
        "id": "3",
        "cat": "clothing",
        "name": "Coat",
        "price": "120",
        "image": "https://cdn.pixabay.com/photo/2015/05/29/19/19/person-789663_150.jpg"
    },
    {
        "id": "5",
        "cat": "clothing",
        "name": "Dress",
        "price": "4000",
        "image": "https://cdn.pixabay.com/photo/2016/06/29/04/17/wedding-dresses-1485984_150.jpg"
    },
    {
        "id": "6",
        "cat": "clothing",
        "name": "Shirt",
        "price": "70",
        "image": "https://cdn.pixabay.com/photo/2014/08/05/10/31/waiting-410328_150.jpg"
    },
    {
        "id": "7",
        "cat": "animals",
        "name": "Dog food",
        "price": "70",
        "image": "https://cdn.pixabay.com/photo/2017/04/07/10/53/dog-2210717_150.jpg"
    },
    {
        "id": "8",
        "cat": "animals",
        "name": "Cat toy",
        "price": "50",
        "image": "https://cdn.pixabay.com/photo/2018/07/21/09/17/cat-3552143_150.jpg"
    }
]


let currentData = data
let requieredSorting = 'price'
let searcheInput = ''
const list = []


const render = arr => {
    if(searcheInput.length != 0) arr = filterSearched(arr)
    if(arr.length > 0){
        sorting(arr,requieredSorting)
        const cards = arr.map(item =>
            `<div class="col-4 my-3">
                <div class="card w-100">
                    <img src="${item.image}" class="card-img-top">
                    <div class="card-body bg-warning-subtle">
                        <div class="card-title">
                            <h2>${item.name}</h2>
                        </div>
                        <div class="card-text">
                            <h3>price: <b>${item.price}</b> $</h3>
                        </div>
                        <div class="d-flex justify-content-between"> 
                            <a href="#" class="btn btn-primary">buy now</a>
                            <div class="text-end">
                              category: ${item.cat}
                            </div>
                        </div>
                    </div>
                </div>
            </div>`)
        root.innerHTML = cards.join('')
    } else root.innerHTML=`<h2>מצטערים, לא נמצאו פריטים התואמים לחיפושך</h2>`
}

const sorting = (arr, key) => {
    switch (key) {
        case 'price':
            arr.sort((a, b) => a.price - b.price)
            break
        case 'price-desc':
            arr.sort((a, b) => b.price - a.price)
            break
        case 'name':
            arr.sort((a, b) => a.name.localeCompare(b.name))
    }
}

const filterAsChecked = (arr, list)=>{
    currentData = (arr.filter(item => list.includes(item.cat)));
}

const filterSearched = arr => {
    return currentData.filter(item => item.name.toLowerCase().includes(searcheInput))
}


////////// Main ///////////


render(currentData)

search.addEventListener('input', e => {
    searcheInput = e.target.value.toLowerCase()
    render(currentData)
})

selector.addEventListener('change', e => {
    requieredSorting = e.target.value
    render(currentData)
})

checkbox.addEventListener('change', e => {
    const category = e.target.name
    const checked = e.target.checked
    if(checked){
        list.push(category)
    }else{
        const index = list.indexOf(category)
        list.splice(index, 1)
    }
    if(list.length == 0) currentData = data
    else filterAsChecked(data,list)
    render(currentData)
})

    
    








// const itemsContainer = document.querySelector('#content');
// const sortSelector = document.querySelector('#sort');
// const searcher = document.querySelector('#search');

// const products = [  // Using lowercase 'products' for consistency
//   { name: 'milk', category: 'food', price: 6 },
//   { name: 'milenium', category: 'medic', price: 39 },
//   { name: 'cheese', category: 'food', price: 25 }, 
//   { name: 'acamol', category: 'medic', price: 18 },
//   { name: 'cracker', category: 'food', price: 8 }
// ];

// const createProductCard = (product) => { 
//   const card = document.createElement('div');
//   card.classList.add('product-card'); 
//   card.innerHTML = `
//     <span class="product-name">${product.name}</span>
//     <span class="product-category">${product.category}</span>
//     <span class="product-price">$${product.price}</span>
//   `;
//   return card;
// };

// const renderProducts = (productsToRender, container) => {
//   container.innerHTML = '';  // Clear container before re-rendering
//   container.append(...productsToRender.map(createProductCard)); 
// };

// renderProducts(products, itemsContainer);  // Initial render

// const sortProducts = (event) => {
//   const sortBy = event.target.value;
//   let sortedProducts;
//   if (sortBy === '1') {
//     sortedProducts = [...products].sort((a.name, b.name));  // Create copy to avoid mutating original array
//   } else if (sortBy === 'price-asc') {
//     sortedProducts = [...products].sort((a, b) => a.price - b.price);
//   } else if (sortBy === 'price-desc') {
//     sortedProducts = [...products].sort((a, b) => b.price - a.price);
//   } else {
//     console.warn('Invalid sort option selected:', sortBy);
//     return;  // Exit if invalid option
//   }
//   renderProducts(sortedProducts, itemsContainer);
// };

// sortSelector.addEventListener('change', sortProducts);




// const printer = document.querySelector('#p')
// const updater = document.querySelector('#u')
// const subber = document.querySelector('#s')
// const search = document.querySelector('#c')
// const ia = document.querySelector('#ia')
//const ul = document.querySelector('ul')
// const body = document.querySelector('body')

// const is = document.querySelector('#is') 
// const content = document.querySelector('#content')
// const sorter = document.querySelector('#sort')

// const Products = [
//     {name: 'milk', category: 'food', price: 6},
//     {name: 'milenium', category: 'medic', price: 39},
//     {name: 'chease', category: 'food', price: 25},
//     {name: 'acamol', category: 'medic', price: 18},
//     {name: 'cracker', category: 'food', price: 8}
// ]

// const createCard = (x) => {
//     myCard = document.createElement('div')
//     myCard.innerHTML = `${x.name} ${x.category} ${x.price}`
//     return myCard
// }
// const addContent = (A, a) => {
//     A.append(a)
//     return A
// }
// const render = (arr, holder) => {
//     holder.innerHTML = ''
//     arr.map(product => addContent(holder, createCard(product)))
// }
// render(Products, content)
// const sortProducts = e =>{
//     const sortBy = e.target.value
//     if(sortBy==1) render(Products.sort(), content)
//     else render(Products.sort((a,b) => a - b),content)
// }


// sorter.addEventListener('change', sortProducts())
// const myEl = document.createElement('div')
// myEl.setAttribute('id', 'arty')
// myEl.setAttribute('id', 'ajawa')
// const el1 = document.createElement('div')
// myEl.append(el1)
// content.append(myEl)


// const arr = [
//     {name: 'Meir' , grade: 100},
//     {name: 'Rafy' , grade: 87},
//     {name: 'Guy' , grade: 49},
//     {name: 'Doody' , grade: 76},
// ]

// const newArr = arr.map(student =>{
//     if(student.name === 'Meir'){
//         const newStudent = {...student}
//         newStudent.grade -= 10
//         newStudent.comment = 'special'
//         return newStudent
//     }
//     return student
// })

// newArr.map(student => {
//     content.innerHTML += ` <div>${student.name} ${student.grade} ${(student.comment != null)? student.comment: ''}</div>`
// })


// const totalGrades = arr.reduce((curr,next) =>
//     next.name === 'Meir'?  curr + next.grade : curr
// , 0)
// console.log(totalGrades);

// console.log(newArr[0].grade, newArr[0].comment)


// arr.push({name: 'ghj' , grade: 89})
// const last = arr.pop()
// console.log(last.name)
// arr.unshift({name: 'ghj' , grade: 89})
// const first = arr.shift()
// console.log(first.name)

// const deleteStudent = (arr, student) => {
//     return arr.filter(el => el.name != 'Meir')
// }
// const deleteStudent1 = (arr, student) => {
//     return arr.filter(el => !el.name.startsWith('M') && !el.name.startsWith('R'))
// }
// const filtered = deleteStudent1(arr)
// console.log(filtered)

// //a.toLowerCase(); el.startsWith(a)



// const Fruits = ['Apple', 'Banana', 'Peach', 'Lemon']
// const Numbers = [1,7,23,4]
// Fruits.sort((a,b) => a.localeCompare(b))
// console.log(Fruits)
// console.log(Numbers.sort((a,b) => a - b))
// console.log(Numbers.sort((a,b) => b - a))
























// printer.addEventListener('click', () => {
//     ul.innerHTML = ``
//     for (let i = 0; i < arr.length; i++) {
//         ul.innerHTML += ` <li><div>${arr[i].name}</div><div class="${(arr[i].grade<55)? 'red' :((arr[i].grade<85)? 'yelow': 'green')}">${arr[i].grade}</li>`
//     }
// })
// updater.addEventListener('click', () => ul.innerHTML = ``)
// subber.addEventListener('click', () => arr[arr.length] = {name: ia.value, grade: ib.value})
// search.addEventListener('click', () => {
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i].name == ia.value) ul.innerHTML = ` <li>The grade of ${arr[i].name} is ${arr[i].grade}</li>`      
//     }
// })




// const MyName = prompt("Please enter your name:")
// let date = new Date()
// let time = date.getHours()
// alert(MyName +' '+ time)
// const num = 4.56789
// console.log(Math.ceil(num*1000)/1000)