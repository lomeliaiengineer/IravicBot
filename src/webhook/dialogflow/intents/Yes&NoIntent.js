const { getContext } = require('../helpers/getContext');


const YesHandler = (agent) => {
    const intent = getContext(agent, 'intent');
    if (intent) {
        const { clothesCategory, start } = intent.parameters;
        console.log(start)
        agent.add('Ir a cloth intent');
        agent.setFollowupEvent({ name: 'clothes', parameters : {clothesCategory: clothesCategory, start: parseInt(start) + 3}});
    }
}

const NoHandler = (agent) => {
    agent.add('Ok, excelente. En qué más puedo ayudarte?');
}

module.exports = { YesHandler, NoHandler }