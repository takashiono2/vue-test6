var app = new Vue({
  el: '#app',
  data: {
    show: true,
    activeColor: 'red',
    fontSize: 12
  },
  methods: {
    now1: function(){
      return (new Date()).toLocaleString();
    }
  },
  computed: {  
    now2: function(){
      return (new Date()).toLocaleString();
    }
  }
});

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