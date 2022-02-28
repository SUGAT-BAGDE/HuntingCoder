import * as fs from 'fs'

export default function handler(req, res) {
  fs.readFile(`./blogdata/${req.query.slug.concat(".json")}`,'utf-8' ,(err, data)=>{
    if (err){
      res.status(500).json({ err: "not found" })
    }
    else{
      res.status(200).json(data)
    }
  })
}
