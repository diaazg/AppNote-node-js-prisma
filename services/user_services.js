const prisma = require('../client');
const jwt = require('jsonwebtoken')

class UserService{
    static async registerUser(userData){
        try {
            
            const user = await prisma.user.create({data : userData});
            return user;
        } catch (err) {
            throw err;
            
        }
    }
    static async getUsers(){
        const allUsers = await prisma.user.findMany();
        return allUsers;
    }
    static async checkuser(email){
        try {
            const existeUser = await prisma.user.findUnique({
                where : {
                    email:email,
                }
            });
              
            return existeUser; //to ensure that the function always return boolean add !! before
        
            
            
        } catch (err) {
            throw err;
        }
    }

    static generateToken = (tokenData) => {
        
        const payload = { tokenData};
      
        
        const secretKey = 'secretkey';
      
        // Options for the sign function
        const options = {
          expiresIn: '1h', // Token expiration time
        };
      
        // Sign the token
        const token = jwt.sign(payload, secretKey, options);
      
        return token;
      };
}


module.exports = UserService;