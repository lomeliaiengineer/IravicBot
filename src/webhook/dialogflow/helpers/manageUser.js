const { getUserFirebase, saveUserFirebase } = require('../../../firebase/funtions/Users');

const saveUser = async (name, session) =>{
    const userExists = await getUser(session);
    if(!userExists){
        saveUserFirebase(name, session);
    }else{
        console.log('User already exists');
    }
    
}

const getUser = async (session) =>{
    return await getUserFirebase(session);
}


module.exports = { saveUser, getUser }