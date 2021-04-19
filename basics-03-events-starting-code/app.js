const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    // incrementCtr() {
    //   this.counter++;
    // },
    // decrementCtr() {
    //   this.counter--;
    // }     
    incrementCtr(num) {
      this.counter = this.counter + num;
    },
    decrementCtr(num) {
      this.counter = this.counter - num;
    }
  },
});

app.mount('#events');
