const app = {
  data() {
    return {
      // message: "",
      name: 'John Doe',
      gender: 'male',
      picture: 'https://randomuser.me/portraits/men/10.jpg'
    };
  },
  methods: {
    async getUser() {
      const res = await fetch('https://randomuser.me/api')
      const {results} = await res.json();
      this.name = results[0].name.first + " " + results[0].name.last;
      this.picture = results[0].picture.large
      console.log(results);
    }
  }
};

Vue.createApp(app).mount('#app');
