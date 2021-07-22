//6.リスト22
Vue.component('my-product',{
  template:'<button>現在の価格{{price}}円</button>',
  props:['price']
});

//  6.リスト16リスト19リスト20
// Vue.component(`my-product`,{
//   template:`
//     <div>
//       <button v-on:click="clickHandler">値下げする</button>{{price}}円
//     </div>`,
//   props:['price'],
//   methods: {
//     clickHandler: function(){
//       var discount = 0;
//       if(this.price - 50 < 500){
//         discount = this.price - 500;
//       } else {
//         discount = 50;
//       }
//         this.$emit('child-click',discount);
//       }
//   }
// });

//  6.リスト10
// Vue.component(`my-product`,{
//   template:`
//     <div>
//       <span>{{name}}</span>：<span>{{price}}円</span>
//     </div>`,
//   props: ['name','price']
// });
