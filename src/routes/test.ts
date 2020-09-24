import express from 'express';
import Add from '../database/Add';
const router = express.Router();


 router.post('/test', express.json(), (req, res, next) => {
  const data : object = req.body
  const statusCode =  Add(data)
      res.send({msg: `${statusCode}儲存成功`})
  
 
});

export default router;
