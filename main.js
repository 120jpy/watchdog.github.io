const getapi = {

  data (){
      return{
        url : [],
        image : 500,
        disp : 1,
        buttonname : 'Clear'
      }
  },
  
   methods : {
     run(){
       axios
       .get("http://shibe.online/api/shibes")
       .then(response => (this.url = response.data[0] ))
     },
     stchange(){
       if (this.disp > 0) {
         this.disp = 0
         this.buttonname='Show'
       } else {
         this.disp = 1
         this.buttonname='Clear'
       }
     },
     load() {
       this.disp = 1
       this.buttonname='Clear'
     },
   },

   mounted (){
     this.run()
   }
}
Vue.createApp(getapi).mount('#api')