const { welcome } = require('./intents/welcome');
const { defaultFallback } = require('./intents/defaultFallback');
const { authHandler } = require('./intents/authIntent');
const { buyHandler } = require('./intents/buyIntent');
const { categoriesHandler } = require('./intents/categoryIntent');
const { clothesHandler } = require('./intents/clothesIntent');
const { menuHandler } = require('./intents/menuIntent');
const { paymentGatewayHandler } = require('./intents/paymentGatewayIntent');
const { YesHandler, NoHandler } = require('./intents/Yes&NoIntent');

const dialogflow = () => {
    let intentMap = new Map();
    intentMap.set('Default Welcome Intent', welcome);
    intentMap.set('Default Fallback Intent', defaultFallback);

    intentMap.set('Auth Intent', authHandler);
    intentMap.set('Buy Intent', buyHandler);
    intentMap.set('Categories Intent', categoriesHandler);
    intentMap.set('Clothes Intent', clothesHandler);
    intentMap.set('Menu Intent', menuHandler);
    intentMap.set('No Intent', NoHandler);
    intentMap.set('Payment Gateway Intent', paymentGatewayHandler);
    intentMap.set('Yes Intent', YesHandler);
    
    
    return intentMap;
}

module.exports = { dialogflow }