module.exports = function generateUserEmail(length, characters) {
    let partBeforeAt = "test.";
    for (let i = 0; i < length; i++) {
        partBeforeAt += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return partBeforeAt + "@gmail.com";
};