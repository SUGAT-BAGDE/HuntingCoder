import * as fs from 'fs'

const GetBlog = async (req, res) => {
  try{
    let data = await fs.promises.readFile(`./blogdata/${req.query.slug.concat(".json")}`, 'utf-8')
    res.status(200).json(JSON.parse(data))
  }
  catch(err){
    res.status(500).json({ err: "No such blog found" })
  }
}

export default GetBlog