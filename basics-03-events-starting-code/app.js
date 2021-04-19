const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: '',
      lastName: '',
      //fullName: '',
    };
  },
  watch: {
    counter(value) {
      if (value > 50) {
        const that = this;
        setTimeout(function () {
          that.counter = 0;
        }, 2000);
      }
    },
    // name(value) {
    //   if (this.name === '') {
    //     this.fullName = '';
    //   } else {
    //     this.fullName = value + ' ' + this.lastName;
    //   }
    // },
    // lastName(value) {
    //   if (this.name === '') {
    //     this.fullName = '';
    //   } else {
    //     this.fullName = this.name + ' ' + value;
    //   }
    // },
  },
  computed: {
    fullName() {
      console.log('Running again..');
      if (this.name === '' || this.lastName === '') {
        return '';
      }
      return this.name + ' ' + this.lastName;
    },
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
    },
    setName(event) {
      this.name = event.target.value;
    },
    submitForm(event) {
      // submitForm(event) {
      // event.preventDefault();
      alert('Submitted');
    },
    confirmInput() {
      this.confirmedName = this.name;
    },
    resetInput() {
      this.name = '';
    },
    outputFullName() {
      console.log('Running again..');
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + 'Abejo';
    },
  },
});

app.mount('#events');
