import * as fs from "fs"

export default (req, res) =>{
    fs.readdir('./blogdata', (err, data)=>{
        if (err){
            res.status(500).json({ err: err })
        }
        else{
            res.status(200).json(data.map((str)=> { return str.replace(".json", "")}))
        }
    })
}