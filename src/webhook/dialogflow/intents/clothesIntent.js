const clothesHandler = (agent) => {
    const { clothesCategory, start } = agent.parameters;
    console.log('START', start, 'sss', start.stringValue, 'sv');
    if (start) {
        console.log('aqui1');
        agent.context.set({ name: 'intent', lifespan: 2, parameters: { clothesCategory: clothesCategory, start: start } });
    } else {
        console.log('aqui2');
        agent.context.set({ name: 'intent', lifespan: 2, parameters: { clothesCategory: clothesCategory, start: 0 } });
    }
    const productMessage = `Perfecto, te mostraré ${clothesCategory}👑`;

    agent.add(productMessage);
}

module.exports = { clothesHandler }