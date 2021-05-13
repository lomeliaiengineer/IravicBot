const { saveUser } = require("../helpers/manageUser");

const authMessage = 'Buenas, antes de continuar, indícame tu nombre por favor😊';

const authHandler = async (agent) => {
    if (agent.parameters.name) {
        agent.add('Ir a menu');
        saveUser(agent.parameters.name, agent.session.split('/sessions/')[1]);
        agent.setFollowupEvent('Welcome');
    } else {
        agent.add(authMessage);
    }
}

module.exports = { authHandler }