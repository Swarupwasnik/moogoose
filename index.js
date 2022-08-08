let mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/hr',{useFindAndModify:true,useNewUrlParser:true})
.then(()=>console.log("Connection Suceessfull.."))
.catch((err)=>console.log(err));
let StudentSchema=new mongoose.Schema({
    fname:{
        type:String,
        required:true

    },
    lname:{
        type:String,
        required:true},
      Salary:{  
    type:Number,
    required:true
},
    Dept:{
       type: String,
       required:true
    },
    gradstream:{
        type:String,
        required:true
},
    yearGrad:{
        type:Number,
        required:true
    },
    contact:{ Number,
        required:true

    },
    active:{
        type:Boolean
    },
   date:{
    type:Date,
    Default:Date.now
   }

})
let Employee=new mongoose.model("Employee",StudentSchema);

let  createDocument=async()=>{
    try{
        let nodeStudent1=new Employee({
            fname:"John",
            lname:"Doe",
            Salary:30000,
            Dept:"Admin",
            gradstream:"CH",
            yearGrad:2016,
            contact:5586651155,
active:true
            
        })
        let nodeStudent2=new Employee({
            fname:"Rohan",
            lname:"Jame",
            Salary:35000,
            Dept:"Acct",
            gradstream:"CA",
            yearGrad:2018,
            contact:5586158625,
active:true
            
        })
        let nodeStudent3=new Employee({
            fname:"Sao",
            lname:"Avika",
            Salary:30000,
            Dept:"Examination",
            gradstream:"engineering",
            yearGrad:2014,
            contact:55865551155,
active:true
            
        })
        let result=await Employee.insertMany([nodeStudent1,nodeStudent2,nodeStudent3]);
        console.log(result);
    }catch(err){
        console.log(err)
    }
        

}
let getDocument=async()=>{
    let result=await Employee.find({type:""})
    .select({Salary:30000}).limit(2);
    console.log(result)
}
let updateDocument=async(_id)=>{
    try{
        let result=await Employee.findByIdAndUpdate({_id},{$set:{
            name:"Javascript"
         },
new:true,
useFindAndModify:false
         
        });
    console.log(result);
    }catch(err){
        console.log(err);
    }
     

}

updateDocument("62e82d55278035a67f67500c");


let deleteDocument= async(_id)=>{
    try{
        let result =await Employee.findByIdAndDelete({_id});
console.log(result);
    }catch(err){
        console.log(err);
    }

}
deleteDocument("62e81a45742570f2bf115f6f");