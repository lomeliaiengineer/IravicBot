const getContext = (agent, name) => {
    const res = agent.contexts.filter(el => el.name === name);
    if (res.length > 0) {
        return res[0];
    } else {
        return false;
    }
}

module.exports = { getContext };