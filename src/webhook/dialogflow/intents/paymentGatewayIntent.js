const paymentGatewayMessage = `Estos son nuestros métodos de pago, sólo aceptamos efectivo sí te encuentras en Calabozo:

💳 Pago Móvil: 
041400000000 C.I 00000000
💳 Transferencias: 
Banco 00000000000000000000 Iravic C.I 00000000
💳 Zelle: 
Iravic iravic@gmail.com`;

const paymentGatewayHandler = (agent) => {
    agent.add(paymentGatewayMessage);
}

module.exports = { paymentGatewayHandler }