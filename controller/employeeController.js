
const EmployeeModel =require( "../model/employee.js");
class EmployeeController{
    static createDoc= async (req,res) =>{
    try{
      const {name,age,employeeid}=req.body
      const doc =new EmployeeModel({
        name : name,
        age : age,
        employeeid :employeeid
      })  
      const result = await doc.save()
      console.log(result);
      res.redirect('/employee')
    }
    catch (error){
        console.log(error);
    }
        
    }
    
    static getAllDoc = async (req,res) =>{
        try{
           const result = await EmployeeModel.find(); 
           //console.log(result);
           if (result===null){
            console.log("nothing to show");
           }
           else{res.render('index',{result})}
           
        }
        catch(error){

        }
        
    }
    static editDoc = async (req,res) =>{
        //console.log(req.params.id);
try{
    const result = await EmployeeModel.findById(req.params.id)
    res.render('edit',{data:result})
}
catch(error){console.log(error);}

    }
    static updateDocById = async (req,res) =>{
        try{
            const result= await EmployeeModel.findByIdAndUpdate(req.params.id,req.body)
            res.redirect('/employee')
        }
        catch(error){
            console.log(error);
        }
        
    }
    static deleteDocById = async (req,res) =>{
        try{
            const result=await EmployeeModel.findOneAndDelete(req.params.id)
            res.redirect('/employee')
        }
        catch(error){

        }
        
    }
}
module.exports=EmployeeController;