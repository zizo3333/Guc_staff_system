const express=require('express');
const router = express.Router();
const Users=require('../models/Users');


//check login page status

router.get('/',(req,res)=>{
    res.send("login page");
    });
 
router.route('/login').post(async(req, res) => {
    const {email, password} = req.body
    // TODO Validate the inputs required exist
   
    const user = await userModel.findOne({email: email});
    // TODO What if user not existing in database
    const correctPassword = bcrypt.compare(password, user.password);
    if (!correctPassword) {
    return res.status(400).send('Invalid Password');
    }
    const token = jwt.sign({_id: user.id, role: user.role}, process.env.TOKEN_SECRET);
    res.header('token', token).send(token);
 
    res.send('Logged In!');
   })
 

module.exports=router;