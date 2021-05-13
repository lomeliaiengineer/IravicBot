const defaultFallbackMessage = 'Lo siento, no entendí lo que querías decir, ¿podrías intentar preguntarlo de otra forma?🙇‍♀️';

const defaultFallback = (agent) => {
    agent.add(defaultFallbackMessage);
}

module.exports = { defaultFallback }