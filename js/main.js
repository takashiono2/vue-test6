//6-2.リスト3
var app = new Vue({
  el: '#app',
  data: {
    // 商品リスト
    products: [
      { id: 1, name: 'Michael<br>スマホケース', price: 1580, image: 'images/01.jpg', delv: 0, isSale: true },
      { id: 2, name: 'Raphael<br>スマホケース', price: 1580, image: 'images/02.jpg', delv: 0, isSale: true },
      { id: 3, name: 'Gabriel<br>スマホケース', price: 1580, image: 'images/03.jpg', delv: 240, isSale: true },
      { id: 4, name: 'Uriel<br>スマホケース', price: 980, image: 'images/04.jpg', delv: 0, isSale: true },
      { id: 5, name: 'Ariel<br>スマホケース', price: 980, image: 'images/05.jpg', delv: 0, isSale: false },
      { id: 6, name: 'Azrael<br>スマホケース', price: 1580, image: 'images/06.jpg', delv: 0, isSale: false },
    ]
  }
});


// 6.リスト25
// var app = new Vue({
//   el: '#app',
//   data: {
//     products:[
//       { id:1, name:'商品A', price:1280 },
//       { id:2, name:'商品B', price:1580 },
//       { id:3, name:'商品C', price:1980 }
//     ]
//   }
// });


// 6.リスト24
// var app = new Vue({
//   el: '#app',
//   data: {
//     price: 980
//   },
//   methods: {
//     priceDown: function(){
//       var discount = 0;
//       if(this.price - 50 < 500){
//         discount = this.price - 500;
//       } else {
//         discount = 50;
//       }
//         this.price -= discount;
//       }
//   }
// });

// 6.リスト10リスト20
// var app = new Vue({
//   el: '#app',
//   data: {
//     price: 980
//   },
//   methods: {
//     priceDown: function(discount){
//       if(discount == undefined) discount = 100;
//       this.price -= discount;
//     }
//   }
// });

// 6.リスト7リスト20
// var app = new Vue({
//   el: '#app',
//   components: {
//     'my-component': myComponent
//   }


// });
//  6.リスト4
// Vue.component('my-product',{
//   template:`
//   <div>
//     <span>{{name}}</span>:<span>{{price}}円</span>
//   </div>`,
//   data: function(){
//     return {
//       name: 'スマホゲーム',
//       price: 980
//     }
//   }
// })


//  6.リスト3
// Vue.component('show-hellow',{
//               template:`<p>{{message}}</p>`,
//               data: function(){
//                 return {
//                   message: 'Hello Vue!'
//                 }
//               },
//               methods: {},
//               computed: {},
//               watch: {},
//               filters: {},
//               created: function(){}
//               });

// var app = new Vue({
//   el: '#app'
  // data: {
  //   // 商品リスト
  //   products: [
  //     { id: 1, name: 'Michael<br>スマホケース', price: 1580, image: 'images/01.jpg', delv: 0, isSale: true },
  //     { id: 2, name: 'Raphael<br>スマホケース', price: 1580, image: 'images/02.jpg', delv: 0, isSale: true },
  //     { id: 3, name: 'Gabriel<br>スマホケース', price: 1580, image: 'images/03.jpg', delv: 240, isSale: true },
  //     { id: 4, name: 'Uriel<br>スマホケース', price: 980, image: 'images/04.jpg', delv: 0, isSale: true },
  //     { id: 5, name: 'Ariel<br>スマホケース', price: 980, image: 'images/05.jpg', delv: 0, isSale: false },
  //     { id: 6, name: 'Azrael<br>スマホケース', price: 1580, image: 'images/06.jpg', delv: 0, isSale: false },
  //   ]
//   // }
// });