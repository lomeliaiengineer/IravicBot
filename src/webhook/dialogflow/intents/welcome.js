const { getUser } = require('../helpers/manageUser');

const welcome = async (agent) => {
    const userName = await getUser(agent.session.split('/sessions/')[1]);
    if(userName){
        const welcomeMessage = `Hola ${userName}, soy Ira el bot de tiendas Iravic🤖, estoy aquí para ayudarte en lo que necesites. Para ver cómo puedo asistirte solo debes decir: Menú.`;
        agent.add(welcomeMessage);
    }else{
        agent.add('Preguntar nombre');
        agent.setFollowupEvent('auth');
    } 
}

module.exports = { welcome }