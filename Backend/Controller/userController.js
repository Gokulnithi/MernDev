import students from "../Model/userModal.js";
export const create = async (req,res)=>{
    try{
        let userdata = new students(req.body);
        const {name} = userdata
        let userAvailable = await students.findOne({name:name})
        if(userAvailable){
            return res.status(400).json({mes:'Already Here'})
        }
        const saved = await userdata.save()
        res.status(200).json({saved})
    }catch(err){
        res.status(500)
    }
}

export const update = async (req,res)=>{
    try{
        const {id} = req.params
        let data = await students.findByIdAndUpdate(id,req.body);
        if(!data){
            return res.status(404).json({message:"Not Found"})
        }
        let re = await students.findById(id);
        console.log(re);
        res.status(200).json(re);
    }catch(err){
        res.status(500)
    }
}

export const del = async(req,res)=>{
    try{
        const {id} = req.params
        console.log(id);
        let data = await students.findByIdAndDelete(id);
        if(!data){
            return res.status(404).json({message:"Nof found"})
        }
        res.status(200).json({message:"Deleted successfully"})
    }catch(err){
        res.status(500)
    }
}

export const fetch = async(req,res)=>{
    try{
        let users = await students.find()
        // let obj = users.map((val)=>{
        //     let name = val.name;
        //     let age = val.age;
        //     return {name,age}
        // })
        res.status(200).json(users)
    }catch(err){
        res.status(500)
    }
}