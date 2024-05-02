
import mongoose from "mongoose";


  const connection = () =>{ mongoose.connect("mongodb://localhost:27017/Weather_Data").then((connection) =>{
     console.log("connection successful")
    
  }).catch((error) =>console.log("Error occured"))


}

  export default connection