const UserModel = require('../model/UserModel');
const userRegistration = async (req,res) => {
    try {
        // console.log('ritesh');
        // console.log("req.file",req.file);
        // return;
        const {email, name , password , role , lat, long } = req.body;
        console.log('req.body', req.body);
        const newUser = new UserModel({
            email: email,
            name: name,
            password: password,
            role: '1',
            location: {
                type: 'Point',
                Coordinates: [parseFloat(lat), parseFloat(long)],
            },
            coverphoto: req.file.path,
             
        });
        console.log('newUser', newUser);
        const savedUser = await  newUser.save();
        res.send(savedUser);
        }catch(err){
         console.log('err', err);
         res.send(err);
        }
    }
    module.exports = {
        userRegistration,
    }
