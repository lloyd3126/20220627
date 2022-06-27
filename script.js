var app = new Vue({
  el: '#app',
  data: {
    inputVal: 0
  },
  computed: {
    a: function() {
      return Math.round(this.inputVal * 1.1 * 100) / 100
    },
    b: function() {
      return this.inputVal + 10
    },
    c: function() {
      return this.b - this.a
    }
  }
  
})