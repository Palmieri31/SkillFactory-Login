
module.exports.getGreeting = (req, res) => {
    const {name} = req;
    const text = `Buenos dias ${name}!`;
    res.json(text);
}