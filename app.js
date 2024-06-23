let main = document.querySelector('.main')

let mobile =[

    { company: "Samsung",
     model:"S24 Ultra",
     memory: "1TB 12GB RAM",
     camera: "200 MP",
     battery:"45W 5000 mAh",
     image:"images/samsung-galaxy-s24-ultra-5g-sm-s928-stylus.jpg"
    },
    
    { company: "Apple",
     model:"Iphone 15 PRO MAX",
     memory: "1TB 8GB RAM",
     camera: "48 MP",
     battery:"15W 4441 mAh",
     image:"images/apple-iphone-15-pro-max.jpg"
    },
    { company: "Huawei",
     model:"Huawei Pura 70 Pro+",
     memory: "1TB 16GB RAM",
     camera: "50 MP",
     battery:"100W 5050 mAh",
     image:"images/huawei-pura70-pro-plus.jpg"
    },
    { company: "Nokia",
     model:"Nokia X30",
     memory: "256GB 8GB RAM",
     camera: "50 MP",
     battery:"33W 4200 mAh",
     image:"images/nokia-x30-5g.jpg"
    },
    { company: "Sony",
     model:"Sony Xperia 1 III",
     memory: "512GB 12GB RAM",
     camera: "12 MP",
     battery:"30W 4500 mAh",
     image:"images/sony-xperia-1-iii.jpg"
    },
    { company: "LG",
     model:"LG K92 5G",
     memory: "128GB 6GB RAM",
     camera: "64 MP",
     battery:"45W 4000 mAh",
     image:"images/lg-k92-5g.jpg"
    },
    { company: "HTC",
     model:"HTC U23 Pro",
     memory: "256GB 12GB RAM",
     camera: "108 MP",
     battery:"33W 4600 mAh",
     image:"images/htc-u23-pro.jpg"
    },
    { company: "Motorola",
     model:"Moto X50 Ultra",
     memory: "1TB 16GB RAM",
     camera: "50 MP",
     battery:"125W 4500 mAh",
     image:"images/motorola-edge-50-ultra.jpg"
    },
    { company: "Lenovo",
     model:"Legion Y90",
     memory: "640GB 18GB RAM",
     camera: "64 MP",
     battery:"68W 5600 mAh",
     image:"images/lenovo-legion-y90.jpg"
    },
    { company: "Xiomi",
     model:"14 Civi",
     memory: "512GB 12GB RAM",
     camera: "50 MP",
     battery:"67W 4700 mAh",
     image:"images/xiaomi-14-civi-.jpg"
    },
    { company: "Google",
     model:"Pixel 8 Pro",
     memory: "1TB 12GB RAM",
     camera: "50 MP",
     battery:"30W 5050 mAh",
     image:"images/google-pixel-8-pro.jpg"
    },
    { company: "Honor",
     model:"X6b",
     memory: "256GB 6GB RAM",
     camera: "50 MP",
     battery:"45W 5200 mAh",
     image:"images/honor-x6b.jpg"
    },
    { company: "Oppo",
     model:"Reno12 Pro",
     memory: "512GB 12GB RAM",
     camera: "50 MP",
     battery:"80W 5000 mAh",
     image:"images/oppo-reno12-pro-cn.jpg"
    },
    { company: "Realme",
     model:"GT 6",
     memory: "512GB 16GB RAM",
     camera: "200 MP",
     battery:"50W 5000 mAh",
     image:"images/realme-gt6.jpg"
    },
    { company: "Oneplus",
     model:" Nord CE4",
     memory: "256GB 12GB RAM",
     camera: "50 MP",
     battery:"100W 5500 mAh",
     image:"images/oneplus-nord-ce4-.jpg"
    },
    { company: "Nothing",
     model:" Phone (2a)",
     memory: "256GB 12GB RAM",
     camera: "50 MP",
     battery:"45W 5000 mAh",
     image:"images/nothing-phone-2a.jpg"
    },
    { company: "Vivo",
     model:"Y58",
     memory: "128GB 8GB RAM",
     camera: "50 MP",
     battery:"44W 6000 mAh",
     image:"images/vivo-u38.jpg"
    },
    { company: "Asus",
     model:"ROG Phone 8 Pro",
     memory: "1TB 24GB RAM",
     camera: "50 MP",
     battery:"65W 5500 mAh",
     image:"images/asus-rog-phone-8-pro.jpg"
    },
    { company: "Infinix",
     model:"GT 20 Pro",
     memory: "256GB 12GB RAM",
     camera: "108 MP",
     battery:"45W 5000 mAh",
     image:"images/infinix-gt20-pro.jpg"
    },
    { company: "Tecno",
     model:"Pova 6 Neo",
     memory: "256GB 8GB RAM",
     camera: "50 MP",
     battery:"33W 7000 mAh",
     image:"images/tecno-pova-6-neo.jpg"
    },

]
for(let keys in mobile){

main.innerHTML+=`<div class="card" style="width: 18rem ;">
  <img src="${mobile[keys].image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${mobile[keys].company} ${mobile[keys].model}</h5>
    <p class="card-text">${mobile[keys].camera} ${mobile[keys].battery}</p>
    <a href="https://www.gsmarena.com/" class="btn btn-primary">More Details</a>
  </div>
</div>`


}
