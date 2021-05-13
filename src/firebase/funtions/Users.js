const db = require('../connection');

const saveUserFirebase = async (name, session) => {
    await db.collection('Users').doc(session).set({ name })
        .then(() => {
            console.log(`User ${name} saved.`);
        })
        .catch((error) => {
            console.log(`Error saving user ${name}: ${error}.`);
        })

}

const getUserFirebase = async (session) => {
    return await db.collection('Users').doc(session).get()
        .then((res) => {
            if(res.data()){
                const { name } = res.data();
                console.log(`User found: ${name}.`);
                return name;
            }else{
                console.log(`User not found.`);
                return false;
            }
            
        })
        .catch((error) => {
            console.log(`Error finding user: ${error}.`);
        })
}

module.exports = { saveUserFirebase, getUserFirebase }