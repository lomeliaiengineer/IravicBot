const buyMessage = 'Gracias por su interes🛍️, en breve será contactado por uno de nuestros agentes para concretar la venta y verificar los datos para el envío📍.\n Puedo ayudarte en algo más?🤖';

const buyHandler = (agent) => {
    agent.add(buyMessage);
}

module.exports = { buyHandler }