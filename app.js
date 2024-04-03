// let arr = [
//   {
//     name: "Iphone 15",
//     imgSrc: "https://3dplanet.am/wp-content/uploads/2023/09/30069430bb.jpg",
//     price: 900,
//     color: "blue",
//   },
//   {
//     name: "Iphone 15 Pro",
//     imgSrc:
//       "https://allgood.uz/storage/products/November2023/nAbovokjI95ZsJWwg6g8.webp",
//     price: 1100,
//     color: "Silver",
//   },
//   {
//     name: "Iphone 15 Pro Max",
//     imgSrc:
//       "https://static.insales-cdn.com/r/NhLt3PLW5Os/rs:fit:1000:0:1/q:100/plain/images/products/1/6640/748984816/bt8s83xuxadzcy0cl4rk2b42i60lnarc.jpeg@jpeg",
//     price: 1300,
//     color: "Dark",
//   },
// ];

// let container = document.querySelector(".container");

// let htmlProducts = "";

// arr.forEach(({ name, price, imgSrc, color }) => {
//   const div = document.createElement("div");
//   div.classList.add("productList");
  // div.innerHTML = `<div class="list-item">
  //   <img src=${imgSrc} alt="">
  //   <h2>${name}</h2>
  //   <p>${price}</p>
  //   <span style='background=${color}'class="color"></span>
  // </div>`;
//   container.appendChild(div);
// });

let section = document.querySelector('#section');

let data = [
  {
    title: "Apple Iphone",
    products: [
    {
      name: "Iphone 15",
      imgSrc: "https://3dplanet.am/wp-content/uploads/2023/09/30069430bb.jpg",
      price: 900,
      color: "blue",
    },

    {
      name: "Iphone 15 Pro",
      imgSrc: "https://3dplanet.am/wp-content/uploads/2023/09/30069430bb.jpg",
      price: 1100,
      color: "Silver",
    },
    {
      name: "Iphone 15 Pro Max",
      imgSrc: "https://3dplanet.am/wp-content/uploads/2023/09/30069430bb.jpg",
      price: 1300,
      color: "Dark",
    },
   ],
  },
]

data.forEach((title, products) => {
  
  let productList = ''
  products.forEach(({name, imgSrc, price, color}) => {
    productList += `<a href=${imgSrc} 'style=text-decoration: none;' target='_blank'>
    <img src=${imgSrc} alt="">
    <h2>${name}</h2>
    <p>${price}</p>
    <span style='background=${color}'class="color"></span>
    </a>`;
  });
  section.innerHTML += `
  <div class="section-item">
    <h2>Sarlavha</h2>
      <ul class="list">
        ${productList}
        </li>
      </ul>
  </div>`;
})