const menuMessage = `Qué te gustaría saber?:
👚- Productos
🛍️- Sobre Iravic
📞- Contacto
📦- Envíos
📍- Ubicación
💲- Comprar
💳- Métodos de pago`;

const menuHandler = (agent) => {
    agent.add(menuMessage);
}

module.exports = { menuHandler }