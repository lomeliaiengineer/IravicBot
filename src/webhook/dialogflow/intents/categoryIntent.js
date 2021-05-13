const categoriesMessage = `Contamos con las siguientes categorías de ropa:
👶- Ropa de bebe
👧- Ropa de niña
👩- Ropa de mujer
Cuál te gustaría ver?`;

const categoriesHandler = (agent) => {
    agent.add(categoriesMessage);
}

module.exports = { categoriesHandler }