const User = require('./models/User');
const Role = require('./models/Role');
const bcrypt = require('bcrypt');

class authController {
    async registration(req, res) {
        try {
            const {username, password} = req.body;
            const candidate = await User.findOne({username});
            if (candidate) {
                return res.status(400).json({message: "User with this name already exists!"})
            }
            const hashPassword = bcrypt.hashSync(password, 6);
            const userRole = await Role.findOne({value:"USER"});
            const user = new User({username, password: hashPassword, role:[userRole.value]});
            await user.save();
            return res.json({message: "user has been registered"})
        }catch(e){
            console.log(e);
            res.status(400).json({message:"Registration error"})

        }
    }
    async login(req, res) {
        try {

        }catch(e){
            console.log(e)
            res.status(400).json({message:"Login error"})
        }
    }
    async getUsers(req, res) {
        try {
            /*creating roles without endPoint
            ----------------------------------------
            const userRole = new Role();
            const adminRole = new Role({value: "ADMIN"});
            await userRole.save();
            await adminRole.save();*/
            res.json("server works");

        }catch(e){

        }
    }
}
module.exports = new authController()