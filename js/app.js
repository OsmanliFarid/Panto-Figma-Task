const HeaderShop = document.querySelector("#HeaderShop")
const ShopShow = document.querySelector("#ShopShow")




HeaderShop.addEventListener("click",() =>{
    ShopShow.classList.toggle("ShopShow")
})
const MainProductList = document.querySelector("#MainProductList")

const arr1 = [
  { id: 1, list: "Chair" },
  { id: 2, list: "Beds" },
  { id: 3, list: "Sofa" },
  { id: 4, list: "Lamp" }
]

let selectedId = 1

const ShopIndex = document.querySelector("#ShopIndex")
const ShowBtn = (selectId) => {
  selectedId = selectId 
  
  show(arr1)
}
const show = (array) => {
    MainProductList.innerHTML = ""
    
  array.forEach((item) => {
    
    let className = "MainProductListTitle"
    if (item.id === selectedId) {
        className += " active"
        
    }

    MainProductList.innerHTML += `<h1 class="${className}" onclick="ShowBtn(${item.id})">${item.list}</h1>`
  })
}

show(arr1)
const MainProductListGarder = document.querySelector("#MainProductListGarder")

const array2 = [
    {id:10,img:"./images/productImage.png",title:"Sakarias Armchair",value:392,},
    {id:10,img:"./images/productImage2.png",title:"Sakarias Armchair",value:299,},
    {id:10,img:"./images/productImage3.png",title:"Sakarias Armchair",value:519,},
    {id:10,img:"./images/productImage4.png",title:"Sakarias Armchair",value:921,},
]
const ShowChair = (arr3) =>{
    MainProductListGarder.innerHTML = ""
   arr3.forEach((item) =>{
    MainProductListGarder.innerHTML += `<div class="MainProductChairBox">
                            <img src="${item.img}" alt="" class="img3">
                            <div class="MainProductChairBox2">
                                <h3 class="MainProductChairTitle">Chair</h3>
                            <h1 class="MainProductChairTitle2">${item.title}</h1>
                            <img src="./images/star.png" alt="">
                            <div class="MainProductChairBox3">
                                <h1>$'${item.value}'</h1>
                                <h1 class="collect2">+</h1>
                            </div>
                            </div>
                            
                        </div>`
                                      
    
   })
   
   const collect2 = document.querySelectorAll(".collect2")
   collect2.forEach((item) =>{
    item.addEventListener("click",() =>{
        ShopIndex.innerText++
        
    })
    
   })
   
   
   
} 


ShowChair(array2)
