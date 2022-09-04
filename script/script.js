new Vue ({
    
    el:"#app",
    data: {
      
        User: "Shourav",
        age: "29",
        requiredAge: "22",

        user:{


            nasmeIS: "Sara",
            age: "10",
            skinColor: "white",
        },

        cars:["toyota","corolla","alllion"],
      
    },

    methods: {
        changeUser(){

            return this.User === "Shourav" ? true:false;
        }
    },

 



  
});