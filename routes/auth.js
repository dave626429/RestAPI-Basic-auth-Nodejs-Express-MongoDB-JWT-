const router = require("express").Router();
const deivce =require("../models/device")

router.get("/deives", (req, res) =>{
  const result = await CONCOX.findAll()
  res.send()
})  

router.get("/locations/:device", (req, res) =>{
  try {
  const deviceId =req.params.device
  const page =parseInt(req.query.page)
  const result = await device.findById(deviceId).paginate({page: page, limit: 10}).exec();
  res.status(200).send(result);
  } catch (error) {
    res.status("403").send(error);
  }
  
})  


module.exports = router;