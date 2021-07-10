var app = new Vue({//arrival_date、//result、//slice(-2),function(dt),var m,var d
  el: '#app',
  data:{
    arrival_date: null
  },
  created: function(){//初期値を設定する
    this.arrival_date = this.formatDate(new Date());
  },
  methods: {
    formatDate: function(dt){//日付をYYYY/MM/DDに変換
      var y = dt.getFullYear();
      var m = ('00'+(dt.getMonth()+1)).slice(-2);
      var d = ('00'+dt.getDate()).slice(-2);
      var result = y+"-"+m+"-"+d ;
    return result
  }
}
});

// No.3 イベントハンドリング-resizeのイベントハンドラ2
// var app = new Vue({ //mousemove,mousemoveHandler,clientX,clientY
//   el: '#app',
//   data: {
//     point:{
//       x: 0,
//       y: 0
//     }
//   },
//   created: function(){
//     addEventListener('mousemove',this.mousemoveHandler);
//   },
//   beforeDestroy: function(){
//     removeEventListener('mousemove',this.mousemoveHandler);
//   },
//   methods: {
//     mousemoveHandler: function($event){
//       this.point.x  = $event.clientX;
//       this.point.y = $event.clientY;
//     }
//   }
// });
// No.3 イベントハンドリング-resizeのイベントハンドラ-
// var app = new Vue({
//   el: '#app',
//   data:{
//     width: window.innerWidth,
//     height: window.innerHeight,
//   },
//   created: function(){
//     addEventListener('resize',this.resizeHandler);//（イベントのtype,通知を受け取るオブジェクトlistener）
//   },
//   beforeDestroy: function(){
//     removeEventListener('resize',this.resizeHandler);
//   },
//   methods:{
//     resizeHandler: function($event){//$eventはイベントを受け取るイベント変数名
//       this.width = $event.target.innerWidth;//e.target はイベントを発生させる原因となった要素をとってくる
//       this.height = $event.target.innerHeight;//ターゲットにはwindowオブジェクトが代入される。
//     }
//   }
// });

// No.3 イベントハンドリング-算出プロパティ-
// var app = document.querySelector('#app');
// var btn = app.querySelector('.btn');
// var num = app.querySelector('.num');

// var stock = 10;

// btn.addEventListener('click',()=>{
//   stock--;
//   updateStock();
// });

// function updateStock(){
//   if(stock>=1){
//     num.textContent = "在庫は残り"+stock+"個です"
//   }else{
//     // btn.classList.remove('btn');
//     app.removeChild(btn);
//     num.textContent =　"在庫がありません"
//   }
// }
// updateStock();


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