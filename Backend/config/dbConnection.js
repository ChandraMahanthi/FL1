// const mongoose=require("mongoose");

// const connectionString = 'mongodb://localhost:27017/'
// const connectDb=async()=>{ 
//    console.log(process.env.CONNECTION_STRING)
//     try{
//         const connect=await mongoose.connect(connectionString,process.env.CONNECTION_STRING)
//         console.log("Database connected:",connect.connection.host,connect.connection.name);
    

//     }catch(err){
//         console.log(err);
//         process.exit(1);
//     }

// };
// module.exports=connectDb;

const mongoose=require("mongoose");
const connectDb=async()=>{ 
    // console.log("CONNECTION_STRING:", process.env.CONNECTION_STRING); 
    // console.log("envconnectionstring56655655",process.env)
    
    const connectionString = 'mongodb://127.0.0.1:27017/admin';
    console.log("conectionhdsjhfiwfjw",connectionString)
    try{

        const connect = await mongoose.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Database connected:",connect.connection.host,connect.connection.name);
    

    }catch(err){
        console.log(err);
        process.exit(1);
    }

};
module.exports=connectDb;