const express = require('express');
const { where } = require('sequelize');
const app=express();
const port =3000

let model=require('./models/index')
//middleware
app.use(express.json())

app.get('/',(req, res) =>{
    res.send('connection success')
})


//get all province
app.get('/province',(req, res) =>{
    let findProvince = model.Province.findAll().then((result)=>{
        if (result.length < 1){
            res.json({message:'Data Tidak Di Temukan'})
        }
        res.json(result)
    })
})

//get province by id
app.get('/province/:id',(req,res)=>{
    let findProvince= model.Province.findOne({where:{id : req.params.id}}).then((result)=>{
        if (result.length < 1) {
            res.json({message: 'Province Not Found'})
        }
        res.json(result)
    })
})

//Add new Province
app.post('/province',(req, res)=>{
    let createProvince=model.Province.create(req.body)
    if(!createProvince){
        console.error('ERROR create Province')
    }
    res.json(req.body)
})

//update province
app.put('/province/:id',(req, res)=>{
    let update =model.Province.update(req.body,{where:{id:req.params.id}})
    res.json({message:"Update Province success"})

})

//delete province
app.delete('/province/:id',(req, res)=>{
    let hapus= model.Province.destroy({where:{id:req.params.id}})
    res.json({message:"Delete  succses"})
    
})



//get all cities
app.get('/cities',(req, res) =>{
    let findCities = model.Cities.findAll().then((result)=>{
        if (result.length < 1){
            res.json({message:'Data Tidak Di Temukan'})
        }
        res.json(result)
    })
})

//get cities by id 
app.get('/cities/:id',(req, res) =>{
    let findCities= model.Cities.findOne().then((result)=>{
        if (result.length < 1){
            res.json({message:'Data Tidak Di Temukan'})
        }
        res.json(result)
    })
})

//post cities
app.post('/cities/addcities',(req, res)=>{
    let createCities=model.Cities.create(req.body)
    if(!createCities){
        console.error('ERROR create Province')
    }
    res.json(req.body)
})

//update cities
app.put('/cities/:id',(req, res)=>{
    let update =model.Cities.update(req.body,{where:{id:req.params.id}})
    res.json({message:"Update success"})

})

//delete cities 
app.delete('/cities/:id',(req, res)=>{
    let hapus= model.Cities.destroy({where:{id:req.params.id}})
    res.json({message:"Delete succses"})
    
})





app.listen(3000,()=>{
    console.log(`listening on port ${port}`)
})