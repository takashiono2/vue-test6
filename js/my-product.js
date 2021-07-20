//  6.リスト10
Vue.component(`my-product`,{
  template:`
  <div>
    <span>{{name}}</span>：<span>{{price}}円</span>
  </div>`,
  props: ['name','price']
});