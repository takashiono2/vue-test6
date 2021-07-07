var app = document.querySelector('#app');
var btn = app.querySelector('.btn');
var num = app.querySelector('.num');

var stock = 10;

btn.addEventListener('click',()=>{
  stock--;
  updateStock();
});

function updateStock(){
  if(stock>=1){
    num.textContent = "在庫は残り"+stock+"個です"
  }else{
    // btn.classList.remove('btn');
    app.removeChild(btn);
    num.textContent =　"在庫がありません"
  }
}
updateStock();


// No.3 イベントハンドリング-Veuの場合-
// var app = new Vue({
//   el: '#app',
//   data: {
//     stock: 10
//   },
//   methods: {
//     onDeleteItem: function(){
//       this.stock--;
//     }
//   }
// });

// No.3 イベントハンドリング-練習-
// var app = new Vue({
//   el: '#app',
//   data: {
//     stock: 1
//   },
//   methods: {
//     onDeleteItem: function(){
//       this.stock++ ;
//     if(this.stock==4){
//       this.stock=1;
//      }
//   }
// }
// });

// No.2 算出プロパティ
// var app = new Vue({
//   el: '#app',
//   data: {
//     show: true,
//     activeColor: 'red',
//     fontSize: 12
//   },
//   methods: {
//     now1: function(){
//       return (new Date()).toLocaleString();
//     }
//   },
//   computed: {  
//     now2: function(){
//       return (new Date()).toLocaleString();
//     }
//   }
// });

// No.1 複数のフィルターをつなげる
// var app = new Vue({
//   el: "#app",
//   data: {
//     price: 1000
//   },
//   filters: {
//     number_format: function(val){
//       return val.toLocaleString();
//     },
//     unit: function(val){
//       return val+'円';
//     }
//   }
// });