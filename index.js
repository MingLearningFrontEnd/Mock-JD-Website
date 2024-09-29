const subMenu = document.querySelector(".sub-menu")
const leftHeader = document.querySelector(".header-left")
const subItems = document.querySelectorAll(".header-left .item")
for (let i = 0; i < subItems.length; i++) {
  leftHeader.addEventListener("mouseover", e => {
    if (e.target = subItems[i] || e.target.tagName === "A") {
      subMenu.style.display = "block"
      const old = document.querySelector(".header-left .item .active")
      if (old) {
        subItems[i].classList.remove("active")
      } else { subItems[i].classList.add("active") }

    }

  })



  leftHeader.addEventListener("mouseout", () => {
    subMenu.style.display = "none"
  })
}




const data = [
  { url: './imgs/1.jpg' },
  { url: './imgs/2.jpg' },
  { url: './imgs/3.jpg' },
  { url: './imgs/4.jpg' },
  { url: './imgs/5.jpg' },
  { url: './imgs/6.jpg' },
  { url: './imgs/7.jpg' },
  { url: './imgs/8.jpg' },
  { url: './imgs/9.jpg' },
  { url: './imgs/10.jpg' },
  { url: './imgs/11.jpg' },


]

let img = document.querySelector(".header-middle .lbt img")
let next = document.querySelector(".header-middle .lbt .next")
let prev = document.querySelector(".header-middle .lbt .prev")
let lbt = document.querySelector(".header-middle .lbt")
let lbtUl = document.querySelector(".indicator ul")
let imgIndex = 0

for (let i = 0; i < data.length; i++) {
  let ulIndex = document.createElement("li")
  lbtUl.appendChild(ulIndex)

}

let lbtLi = document.querySelectorAll(".indicator ul li")
lbtLi[0].classList.add('active')

for (let i = 0; i < lbtLi.length; i++) {
  lbtLi[i].index = i
  lbtLi[i].onclick = function () {
    imgIndex = this.index
    render()
  }
}

render()
next.addEventListener("click", () => {
  imgIndex++
  if (imgIndex >= data.length) {
    imgIndex = 0
  }

  render()

})

prev.addEventListener("click", () => {
  imgIndex--
  if (imgIndex < 0) {
    imgIndex = data.length - 1
  }
  render()
})

function render() {
  img.src = data[imgIndex].url
  document.querySelector(".header-middle .lbt .indicator .active").classList.remove("active")
  document.querySelector(`.header-middle .lbt .indicator li:nth-child(${imgIndex + 1})`).classList.add("active")

}


let timer = setInterval(() => {
  next.click()
}, 1500)

lbt.addEventListener("mouseenter", () => {
  clearInterval(timer)
})

lbt.addEventListener("mouseleave", () => {
  clearInterval(timer)
  timer = setInterval(() => {
    next.click()
  }, 1500)
})



const topItem = document.querySelector(".jd_top-items")
const elevator = document.querySelector(".elevator")

window.addEventListener("scroll", () => {
  const n = document.documentElement.scrollTop
  elevator.style.display = n >= topItem.offsetTop ? "block" : "none"
})

const backTop = document.querySelector('#backTop')
backTop.addEventListener("click", () => {
  window, scrollTo(0, 0)
})






const list = document.querySelector(".elevator-list")
list.addEventListener("click", e => {
  e.preventDefault()
  if (e.target.tagName === 'A' && e.target.dataset.name) {
    const old = document.querySelector(".elevator-list .active")
    if (old) {
      old.classList.remove('active')
    }

    e.target.classList.add("active")
    const top = document.querySelector(`.jd_${e.target.dataset.name}`).offsetTop
    document.documentElement.scrollTop = top
  }
})

window.addEventListener("scroll", () => {
  const old = document.querySelector(".elevator-list .active")
  if (old) {
    old.classList.remove("active")
  }

  const channel = document.querySelector(".jd_channel")
  const recommend = document.querySelector(".jd_recommend")
  const n = document.documentElement.scrollTop
  if (n >= topItem.offsetTop && n < channel.offsetTop) {
    document.querySelector('[data-name=top-items]').classList.add('active')
  } else if (n >= channel.offsetTop && n < recommend.offsetTop) {
    document.querySelector('[data-name=channel]').classList.add('active')
  } else if (n >= recommend.offsetTop) {
    document.querySelector('[data-name=recommend').classList.add('active')
  }
})


const dataset = [
  {
    "name": "得力(deli)48色水溶性油画棒 可水洗蜡笔炫彩棒旋转不脏手彩笔 儿童礼盒画画绘画套装工具文具涂色美术72057毕业礼物",
    "price": 72.99,
    "img": "./imgs/recommend.png",
    "url":"https://www.dfoneople.com"
  },
  {
    "name": "得力(deli)48色水溶性油画棒 可水洗蜡笔炫彩棒旋转不脏手彩笔 儿童礼盒画画绘画套装工具文具涂色美术72057毕业礼物",
    "price": 72.99,
    "img": "./imgs/recommend.png"
  },
  {
    "name": "得力(deli)48色水溶性油画棒 可水洗蜡笔炫彩棒旋转不脏手彩笔 儿童礼盒画画绘画套装工具文具涂色美术72057毕业礼物",
    "price": 72.99,
    "img": "./imgs/recommend.png"
  },
  {
    "name": "得力(deli)48色水溶性油画棒 可水洗蜡笔炫彩棒旋转不脏手彩笔 儿童礼盒画画绘画套装工具文具涂色美术72057毕业礼物",
    "price": 72.99,
    "img": "./imgs/recommend.png"
  },
  {
    "name": "得力(deli)48色水溶性油画棒 可水洗蜡笔炫彩棒旋转不脏手彩笔 儿童礼盒画画绘画套装工具文具涂色美术72057毕业礼物",
    "price": 72.99,
    "img": "./imgs/recommend.png"
  },
  {
    "name": "得力(deli)48色水溶性油画棒 可水洗蜡笔炫彩棒旋转不脏手彩笔 儿童礼盒画画绘画套装工具文具涂色美术72057毕业礼物",
    "price": 72.99,
    "img": "./imgs/recommend.png"
  },
  {
    "name": "得力(deli)48色水溶性油画棒 可水洗蜡笔炫彩棒旋转不脏手彩笔 儿童礼盒画画绘画套装工具文具涂色美术72057毕业礼物",
    "price": 72.99,
    "img": "./imgs/recommend.png"
  },
  {
    "name": "得力(deli)48色水溶性油画棒 可水洗蜡笔炫彩棒旋转不脏手彩笔 儿童礼盒画画绘画套装工具文具涂色美术72057毕业礼物",
    "price": 72.99,
    "img": "./imgs/recommend.png"
  }, 
  {
    "name": "得力(deli)48色水溶性油画棒 可水洗蜡笔炫彩棒旋转不脏手彩笔 儿童礼盒画画绘画套装工具文具涂色美术72057毕业礼物",
    "price": 72.99,
    "img": "./imgs/recommend.png"
  },
   {
    "name": "得力(deli)48色水溶性油画棒 可水洗蜡笔炫彩棒旋转不脏手彩笔 儿童礼盒画画绘画套装工具文具涂色美术72057毕业礼物",
    "price": 72.99,
    "img": "./imgs/recommend.png"
  }, 
  {
    "name": "得力(deli)48色水溶性油画棒 可水洗蜡笔炫彩棒旋转不脏手彩笔 儿童礼盒画画绘画套装工具文具涂色美术72057毕业礼物",
    "price": 72.99,
    "img": "./imgs/recommend.png"
  },
   {
    "name": "得力(deli)48色水溶性油画棒 可水洗蜡笔炫彩棒旋转不脏手彩笔 儿童礼盒画画绘画套装工具文具涂色美术72057毕业礼物",
    "price": 72.99,
    "img": "./imgs/recommend.png"
  }, 
  {
    "name": "得力(deli)48色水溶性油画棒 可水洗蜡笔炫彩棒旋转不脏手彩笔 儿童礼盒画画绘画套装工具文具涂色美术72057毕业礼物",
    "price": 72.99,
    "img": "./imgs/recommend.png"
  },
   {
    "name": "得力(deli)48色水溶性油画棒 可水洗蜡笔炫彩棒旋转不脏手彩笔 儿童礼盒画画绘画套装工具文具涂色美术72057毕业礼物",
    "price": 72.99,
    "img": "./imgs/recommend.png"
  },
  {
    "name": "得力(deli)48色水溶性油画棒 可水洗蜡笔炫彩棒旋转不脏手彩笔 儿童礼盒画画绘画套装工具文具涂色美术72057毕业礼物",
    "price": 72.99,
    "img": "./imgs/recommend.png"
  },
  {
    "name":"得力(deli)48色水溶性油画棒 可水洗蜡笔炫彩棒旋转不脏手彩笔 儿童礼盒画画绘画套装工具文具涂色美术72057毕业礼物",
    "price":72.99,
    "img":"./imgs/recommend.png"
  }, {
    "name":"得力(deli)48色水溶性油画棒 可水洗蜡笔炫彩棒旋转不脏手彩笔 儿童礼盒画画绘画套装工具文具涂色美术72057毕业礼物",
    "price":72.99,
    "img":"./imgs/recommend.png"
  },
  {
    "name":"得力(deli)48色水溶性油画棒 可水洗蜡笔炫彩棒旋转不脏手彩笔 儿童礼盒画画绘画套装工具文具涂色美术72057毕业礼物",
    "price":72.99,
    "img":"./imgs/recommend.png"
  }, {
    "name":"得力(deli)48色水溶性油画棒 可水洗蜡笔炫彩棒旋转不脏手彩笔 儿童礼盒画画绘画套装工具文具涂色美术72057毕业礼物",
    "price":72.99,
    "img":"./imgs/recommend.png"
  }, {
    "name":"得力(deli)48色水溶性油画棒 可水洗蜡笔炫彩棒旋转不脏手彩笔 儿童礼盒画画绘画套装工具文具涂色美术72057毕业礼物",
    "price":72.99,
    "img":"./imgs/recommend.png"
  }, {
    "name":"得力(deli)48色水溶性油画棒 可水洗蜡笔炫彩棒旋转不脏手彩笔 儿童礼盒画画绘画套装工具文具涂色美术72057毕业礼物",
    "price":72.99,
    "img":"./imgs/recommend.png"
  }, {
    "name":"得力(deli)48色水溶性油画棒 可水洗蜡笔炫彩棒旋转不脏手彩笔 儿童礼盒画画绘画套装工具文具涂色美术72057毕业礼物",
    "price":72.99,
    "img":"./imgs/recommend.png"
  }, {
    "name":"得力(deli)48色水溶性油画棒 可水洗蜡笔炫彩棒旋转不脏手彩笔 儿童礼盒画画绘画套装工具文具涂色美术72057毕业礼物",
    "price":72.99,
    "img":"./imgs/recommend.png"
  },
]

const recommendItem = document.querySelector(".layout-r")
for (let ele of dataset) {
  let product = document.createElement("div")
  product.classList.add("item")
  product.innerHTML = `<a href="${ele.url}"><img src="${ele.img}" alt=""></a>
                        <div class="item-des">
                            ${ele.name}
                        </div>
                        <div class="price">
                            <span class="symbol">¥</span><span class="price-number">${ele.price.toString().slice(0, -2)}</span><span class="price-remain">${ele.price.toString().slice(-2)}</span>
                        </div>
                    ` 
  recommendItem.appendChild(product)
}