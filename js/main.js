/* 3-2.オブジェクトの並び替え
var products = [
  {id:1,price:1280},
  {id:2,price:1980},
  {id:3,price:1580},
  {id:4,price:980},
  {id:5,price:1680},
  {id:6,price:1780}
];
products.sort(function(a,b){
  return a.price - b.price;
});

console.log(products); */

// 3-2.sort関数の使用例（関数定義を分離）
// var array_price= [1280,1980,1580,980,1680,1780];

// function desc_order(a,b){
//   // if(a < b){return -1;}
//   // if(a == b){return 1;}
//   // return 0;
//   return a-b;
// }

// array_price.sort(desc_order);

// console.log(array_price);

// 3-2.絞り込み機能をjsで実装、商品一覧の並べ替え
// コンポーネントのルートノード
var nodeApp = document.querySelector('#app');

// チェックボックスのイベントハンドラを登録
var nodeCheckbox = nodeApp.querySelectorAll('input[type="checkbox"]');
nodeCheckbox[0].addEventListener('change',onCheckChanged ,false);
nodeCheckbox[1].addEventListener('change',onCheckChanged ,false);

// セレクトボックスのイベントハンドラを登録
var nodeSelect = nodeApp.querySelector('.sorting');
nodeSelect.addEventListener('change',onOrderChanged ,false);

// 初期表示時の商品ノードリスト（保存用）
var nodeItemsOrg = nodeApp.querySelectorAll('.item');

// チェック状態変更イベントハンドラ
function onCheckChanged(event) {

  var nodeItems = nodeApp.querySelectorAll('.item'); // 商品ノードのリスト
  var nodeCount = nodeApp.querySelector('.count');   // 表示件数のノード
  var count = nodeItems.length                // 表示件数

  // 全ての商品ノードをいったん表示する
  for (var i=0; i<nodeItems.length; i++) {
    showNode(nodeItems[i]);
  }

  // セール対象のチェックがついている場合
  if (nodeCheckbox[0].checked) {
    // 全ての商品ノードを捜査
    for (var i=0; i<nodeItems.length; i++) {
      // セール対象の商品ではない場合
      if (!isSaleItem(nodeItems[i])) {
        // この商品を非表示にする
        hideNode(nodeItems[i]);
        // 件数のカウントを減らす
        count--;
      }
    }
  }
  // 送料無料のチェックがついている場合
  if (nodeCheckbox[1].checked) {
    // 全ての商品ノードを捜査
    for (var i=0; i<nodeItems.length; i++) {
      // 送料無料の商品ではない場合
      if (!isDelvFreeItem(nodeItems[i])) {
        // この商品を非表示にする
        hideNode(nodeItems[i]);
        // 件数のカウントを減らす
        count--;
      }
    }
  }
  // 件数を更新
  nodeCount.textContent = count +'件';
}

// 並び順の変更イベントハンドラ
function onOrderChanged(event) {
  var nodeList  = nodeApp.querySelector('.list')     // 商品一覧ノード
  var nodeItems = nodeList.querySelectorAll('.item') // 商品ノードのリスト
  // 商品ノードのリストを新しい配列に詰め替える（退避しておく）
  var products = [];
  for (var i=0; i<nodeItems.length; i++) {
    products.push(nodeItems[i]);
  }
  // DOMから全ての商品ノードを削除する
  while (nodeList.firstChild) {
    nodeList.removeChild(nodeList.firstChild);
  }

  //「標準」が選択されている場合
  if (event.target.value == '1') {
    // 初期表示時の商品ノードを復元する
    for (var i=0; i<products.length; i++) {
      nodeList.appendChild(nodeItemsOrg[i]);
    }
  }
  //「価格が安い順」が選択されている場合
  else if (event.target.value == '2') {
    // 配列を並び替え
    products.sort(function(a,b){
      // 商品価格のノードからカンマを除去した数値を読み取る
      var prevPrice    = parseInt(a.querySelector('.price span').textContent.replace(',',''));
      var currentPrice = parseInt(b.querySelector('.price span').textContent.replace(',',''));
      return prevPrice - currentPrice;
    });
    // 並び替え後の商品ノードをDOMに追加する
    for (var i=0; i<products.length; i++) {
      nodeList.appendChild(products[i]);
    }
  }
}

// セール商品かどうかを判定する関数
function isSaleItem(nodeItem) {
  var node = nodeItem.querySelector('.status');
  return (node && node.textContent == 'SALE');
}

// 送料無料かどうかを判定する関数
function isDelvFreeItem(nodeItem) {
  var node = nodeItem.querySelector('.shipping-fee');
  return (node && node.textContent == '送料無料');
}

// ノードを非表示にする関数
function hideNode(node) {
  node.setAttribute('style','display:none;');
}

// ノードを表示する関数
function showNode(node) {
  node.removeAttribute('style');
}


// 2-10.フェードイン・フェードアウト、name属性値でエフェクトを分類する、カスタムトランジションクラスの使用例
// var app = new Vue({
//   el: '#app',
//   data:{
//     show: true
//   }
// });

// 2-9.フォームコントロールの同期
// var app = new Vue({
//   el: '#app',
//   data:{
//     color: '#000000',
//     red: 0,
//     green: 0,
//     blue: 0
//   },
//   computed:{
//     colorElement: function(newRGB,oleRGB){
//       return [this.red,this.green,this.blue];
//     }
//   },
//   watch:{
//     colorElement: function(newRGB,oleRGB){
//       var r = ('00'+newRGB[0].toString(16)).slice(-2);
//       var g = ('00'+newRGB[1].toString(16)).slice(-2);
//       var b = ('00'+newRGB[2].toString(16)).slice(-2);
//       this.color = '#'+r+g+b;
//     },
//     color: function(newColor,oldColor){
//       this.red = parseInt(newColor.substr(1,2),16);
//       this.green = parseInt(newColor.substr(3,2),16);
//       this.bule = parseInt(newColor.substr(5,2),16);
//     }
//   }
// });

// 2-9.カレンダーの範囲を制限する
// var app = new Vue({//arrival_date、min_date、result、slice(-2)、function(dt)、var m、var d、setDate()
//   el: '#app',
//   data: {
//     arrival_date: null,
//     min_date: null
//   },
//   created: function(){
//     var dt = new Date();
//     dt.setDate(dt.getDate()+1);
//     this.arrival_date = this.formatDate(dt);
//     this.min_date = this.arrival_date;
//   },
//   methods:{
//     formatDate: function(dt){
//       var y = dt.getFullYear();
//       var m = ('00'+(dt.getMonth()+1)).slice(-2);
//       var d = ('00' + dt.getDate()).slice(-2);
//       result = y +'-'+ m +'-' + d;
//       return result;
//     }
//   }
// });

// 2-9.カレンダーにバインディングする
// var app = new Vue({
//   el: '#app',
//   data:{
//     arrival_date: null
//   },
//   created: function(){//初期値を設定する
//     this.arrival_date = this.formatDate(new Date());
//   },
//   methods: {
//     formatDate: function(dt){//日付をYYYY/MM/DDに変換
//       var y = dt.getFullYear();
//       var m = ('00'+(dt.getMonth()+1)).slice(-2);
//       var d = ('00'+dt.getDate()).slice(-2);
//       var result = y+"-"+m+"-"+d ;
//     return result
//   }
// }
// });

// 2-7.resizeのイベントハンドリング-
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

// 2-7.イベントハンドリング-resizeのイベントハンドラ-
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

// 2-7.クリックイベントの使用例(vue未使用)
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


// 2-7.クリックイベントの使用例
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

// 2-7.クリックイベントの使用例
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

// 2-5.フィルターを組み合わせて使用する
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

// 2-5.フィルターを組み合わせて使用する
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