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
  ShopIndex.innerText++
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
