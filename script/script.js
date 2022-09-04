new Vue ({
    
    el:"#app",
    data: {
      
       name: "Shourav",
       age: "20",
       x: 0,
       y: 0,

       formData: {

        firstName: "",
        lastName: ""

       }
      
    },

    methods: {

        getUpdateName(){

            this.name ="khan Shourav",
            this.age = "18"
        },

        updateCoor(event){
            this.x=event.clientX;
            this.y = event.clientY;
        },

        handleForm(){
                console.log(this.formData);
        }
       
    },

 



  
});