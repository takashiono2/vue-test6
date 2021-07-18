// #フィルターを定義

var app = new Vue({
  el: '#app',
  data: {
    // 消費税率
    taxRate: 0.08,
    // 制作したいムービー
    movieType: '余興ムービー',
    // 基本料金（税抜き）
    basePrice: 30000,
    // 割増料金
    addPrice1: 5000,  // 納期が1ヵ月未満の場合
    addPrice2: 10000, // 納期が3週間未満の場合
    addPrice3: 15000, // 納期が2週間未満の場合
    addPrice4: 20000, // 納期が1週間未満の場合
    addPrice5: 40000, // 納期が3日後の場合
    addPrice6: 45000, // 納期が2日後の場合
    addPrice7: 50000, // 納期が翌日の場合
    // オプション料金（税抜き）
    optPrice: 0,
    // 合計金額（税抜き）
    totalPrice: 0,
    // 挙式日（日付）
    wedding_date: '',
    // DVD仕上がり予定日（日付）
    delivery_date: '',
    // オプション「BGM手配」
    opt1_use: false,              // true：利用する、false：利用しない
    opt1_price: 5000,             // 料金（税抜き）
    // オプション「撮影」
    opt2_use: false,              // true：利用する、false：利用しない
    opt2_price: 5000,             // 料金（税抜き）
    // オプション「DVD盤面印刷」
    opt3_use: false,              // true：利用する、false：利用しない
    opt3_price: 5000,             // 料金（税抜き）
    // オプション「写真スキャニング」
    opt4_num: 0,                  // 利用枚数
    opt4_price: 500,              // 料金（税抜き）
  },
  methods: {
    // 税抜（切り捨て）金額を税込金額に変換するメソッド
    incTax: function(untaxed) {
      return Math.floor(untaxed * (1+ this.taxRate));
    },
    // 日付の差を求めるメソッド
    getDateDiff: function(dateString1、dateString2) {
      // 日付を表す文字列から日付オブジェクトを生成
      var date1 = new Date(dateString1);
      var date2 = new Date(dateString2);
      // 2つの日付の差分（ミリ秒）を計算
      var msDiff  = date1.getTime()-date2.getTime();
      // 求めた差分（ミリ秒）を日付に変換
      // 差分÷(1000ミリ秒×60秒×60分×24時間)切りあげ
      ruturn Math.ceil(msDiff/(1000 * 60 * 60 *24);
    },
    // 日付をYYYY-MM-DDの書式で返すメソッド
    formatDate: function(dt) {
      var y = dt.getFullYear();
      var m = ('00'+(dt.getMonth()+1)).slice(-2);
      var d = ('00'+ dt.getDay()).slice(-2);
      return (y + '-' + m + '-' + d);
    }
  },
  computed: {
    // オプション「BGM手配」の税込金額を返す算出プロパティ
    taxedOpt1: function() {
      return this.incTax(this.opt1_price);
    },
    // オプション「撮影」の税込金額を返す算出プロパティ
    taxedOpt2: function() {
      return this.incTax(this.opt2_price);
    },
    // オプション「DVD盤面印刷」の税込金額を返す算出プロパティ
    taxedOpt3: function() {
      return this.incTax(this.opt3_price);
    },
    // オプション「写真スキャニング」の税込金額を返す算出プロパティ
    taxedOpt4: function() {
      return this.incTax(this.opt4_price);
    },
    // 基本料金（税込）を返す算出プロパティ
    taxedBasePrice: function() {
      // 割増料金
      var addPrice = 0;
      // 納期までの残り日数を計算、仕上げ日delivery_date
      var dateDiff = this.getDateDiff( , );
      // 割増料金を求める
      if (21 <= dateDiff && dateDiff < 30) {
        // 納期が1ヵ月未満の場合
        addPrice = this.addPrice1;
      }
      else if (14 <= dateDiff && dateDiff < 21) {
        // 納期が3週間未満の場合
        addPrice = this.addPrice2;
      }
      else if (7 <= dateDiff && dateDiff < 14) {
        // 納期が2週間未満の場合
        addPrice = this.addPrice3;
      }
      else if (3 < dateDiff && dateDiff < 7) {
        // 納期が1週間未満の場合
        addPrice = this.addPrice4;
      }
      else if (dateDiff == 3) {
        // 納期が3日後の場合
        addPrice = this.addPrice5;
      }
      else if (dateDiff == 2) {
        // 納期が2日後の場合
        addPrice = this.addPrice6;
      }
      else if (dateDiff == 1) {
        // 納期が翌日の場合
        addPrice = this.addPrice7;
      }
      // 基本料金（税込）を返す
      return this.incTax(this.basePrice + addPrice);
    },
    // オプション料金（税込）を返す算出プロパティ
    taxedOptPrice: function() {
      // オプション料金
      var optPrice = 0;
      // BGM手配
      if (this.opt1_use) { optPrice += this.opt1_price; }
      // 撮影
      if (this.opt2_use) { optPrice += this.opt2_price; }
      // DVD盤面印刷
      if (this.opt3_use) { optPrice += this.opt3_price; }
      // 写真スキャニング
      if (this.opt4_num == '') { this.opt4_num = 0; }
      optPrice += this.opt4_num * this.opt4_price;
      // オプション料金（税込）を返す
      return this.incTax(optPrice);
    },
    // 合計金額（税込）を返す算出プロパティ
    taxedTotalPrice: function() {
      // 基本料金（税込）とオプション料金（税込）の合計を返す
      return (this.taxedBasePrice + this.taxedOptPrice);
    },
    // 明日(+1)の日付をYYYY-MM-DDの書式で返す算出プロパティ、formatDate()関数と引数dtを使用
    tommorow: function() {
      var dt = new Date();
      ;
      return;
    }
  },
  created: function() {
    // 今日の日付を取得 dt
    var dt = new Date();
    // 挙式日に2ヵ月後の日付を設定(Monthで設定)
    dt.setMonth(dt.getMonth()+2);
    this.wedding_date = ;
    // DVD仕上がり予定日に、挙式日の１週間前(-7)の日付を設定
    dt.setDate(dt.getDate()-7);
    this.delivery_date = formatDate(dt);
  }
// コンポーネントのルートノード
var app = document.querySelector('#app');
// 消費税率
var taxRate = 0.08;

//-----------------------------------------------
// イベントハンドラの割り当て
//-----------------------------------------------

// ページの読み込み完了イベント
window.addEventListener('load', onPageLoad, false);
// 入力内容変更イベント（DVD仕上がり予定日）
app.querySelector('#delivery_date').addEventListener('change', onInputChanged, false);
// 入力内容変更イベント（BGM手配）
app.querySelector('#opt1').addEventListener('change', onInputChanged, false);
// 入力内容変更イベント（撮影）
app.querySelector('#opt2').addEventListener('change', onInputChanged, false);
// 入力内容変更イベント（DVD盤面印刷）
app.querySelector('#opt3').addEventListener('change', onInputChanged, false);
// 入力内容変更イベント（写真スキャニング）バリューの値が変化するたびに発生する
app.querySelector('#opt4').addEventListener('input',onInputChanged, false);

//-----------------------------------------------
// イベントハンドラ
//-----------------------------------------------

// ページの読み込みが完了したとき呼び出されるイベントハンドラ
function onPageLoad(event) {
  // フォームコントロールを取得
  var wedding_date  = app.querySelector('#wedding_date');   // 挙式日
  var delivery_date = app.querySelector('#delivery_date');  // DVD仕上がり予定日
  // 今日の日付を取得
  var dt = new Date();
  // 挙式日に2ヵ月後の日付を設定(inputのvalue値)
  dt.setMonth(dt.getMonth()+2);
  wedding_date.value = formatDate(dt); 
  // DVD仕上がり予定日に、挙式日の１週間前の日付を設定(inputのvalue値)
  dt.setDate(dt.getDate()-7);
  delivery_date.value = formatDate(dt);
  // DVD仕上がり予定日に翌日以降しか入力できないようにする
  delivery_date.setAttribute('min',tommorow());
  // フォームの表示を更新する
  updateForm();
}

// 入力内容を変更したとき呼び出されるイベントハンドラ
function onInputChanged(event) {
  // フォームの表示を更新する
  updateForm();
}

//-----------------------------------------------
// 関数
//-----------------------------------------------

// 日付をYYYY-MM-DDの書式で返すメソッド
function formatDate(dt) {
  var y = dt.getFullYear();
  var m = ('00'+(dt.getMonth()+1)).slice(-2);
  var d = ('00'+(dt.getDate())).slice(-2);
  return (y + '-' + m + '-' + d);
}

// 明日の日付をYYYY-MM-DDの書式で返す関数
function tommorow() {
  var dt = new Date();
  dt.setDate(dt.getDate()+1);
  return formatDate(dt);
}

// 税抜き金額（切り捨て）を税込み金額に変換する関数 untaxed（価格）、taxRate（税率）
function incTax(untaxed) {
}

// 数値を通貨書式「#,###,###」に変換する関数
function number_format(val) {
  return val.toLocaleString();
}

// 日付の差（dateString1、dateString2）を求める関数
function　getDateDiff（dateString1、dateString2）{
  // 日付を表す文字列から日付オブジェクトを生成
  var date1 = new Date(dateString1);
  var date2 = new Date(dateString2);
  // 2つの日付の差分（ミリ秒）を計算
  var msDiff = date1.getTime() - date2.getTime();
  // 求めた差分（ミリ秒）を日付に変換
  // 差分÷(1000ミリ秒×60秒×60分×24時間)
  return Math.ceil( msDiff / (1000*60*60*24) );
}

// 再計算した基本料金（税込）を返す関数
function taxedBasePrice() {
  // 割増料金
  var addPrice = 0;
  // フォームコントロールを取得（DVD仕上がり予定日）
  var delivery_date = app.querySelector('#delivery_date');
  // 納期までの残り日数を計算
  var dateDiff = this.getDateDiff(this.delivery_date, (new Date()).toLocaleString());
  // 割増料金を求める(21以上30未満)
  if ( 21 <= dateDiff && dateDiff < 30 ) {
    // 納期が1ヵ月未満の場合
    addPrice = 5000;
  }
  else if ( 14 <= dateDiff && dateDiff < 21 ) {
    // 納期が3週間未満の場合
    addPrice = 10000;
  }
  else if ( 7 < dateDiff && dateDiff <=　14 ) {
    // 納期が2週間未満の場合
    addPrice = 15000;
  }
  else if ( 3 < dateDiff && dateDiff <= 7) {
    // 納期が1週間未満の場合
    addPrice = 20000;
  }
  else if (dateDiff == 3) {
    // 納期が3日後の場合
    addPrice = 40000;
  }
  else if (dateDiff == 2) {
    // 納期が2日後の場合
    addPrice = 45000;
  }
  else if (dateDiff == 1) {
    // 納期が翌日の場合
    addPrice = 50000;
  }
  // 基本料金（税込）を返す
  return incTax(30000 + addPrice);
}

// 再計算したオプション料金（税込）を返す関数
function taxedOptPrice() {
  // オプション料金
  var optPrice = 0;
  // フォームコントロールを取得
  var opt1 = app.querySelector('#opt1');  // BGM手配
  var opt2 = app.querySelector('#opt2');  // 撮影
  var opt3 = app.querySelector('#opt3');  // DVD盤面印刷
  var opt4 = app.querySelector('#opt4');  // 写真スキャニング
  // BGM手配
  if (opt1.checked) { optPrice += 5000; }
  // 撮影
  if (opt2.checked) { optPrice += 5000; }
  // DVD盤面印刷
  if (opt3.checked) { optPrice += 5000; }
  // 写真スキャニング
  if (opt4.value == '') { opt4 = 0; }
  optPrice += opt4.value * 500;
  // オプション料金（税込）を返す
  return incTax(optPrice);
}

// 金額の表示を更新する関数
function updateForm() {
  // フォームコントロールを取得
  var sum_base  = app.querySelector('#sum_base');   // 基本料金（税込）
  var sum_opt   = app.querySelector('#sum_opt');    // オプション料金（税込）
  var sum_total = app.querySelector('#sum_total');  // 合計（税込）

  // 金額を再計算
  var basePrice  = taxedBasePrice();     // 基本料金（税込）
  var optPrice   = taxedOptPrice();      // オプション料金（税込）
  var totalPrice = basePrice + optPrice; // 合計（税込）

  // 表示を更新
  sum_base.value = number_format(basePrice);   // 基本料金（税込）
  sum_opt.value = number_format(optPrice);    // オプション料金（税込）
  sum_total.value = number_format(totalPrice);  // 合計（税込）
}
});