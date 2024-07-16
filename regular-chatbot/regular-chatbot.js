// @ts-check

/**
 * Given a certain command, help the chatbot recognize whether the command is valid or not.
 *
 * @param {string} command
 * @returns {boolean} whether or not is the command valid
 */

export function isValidCommand(command) {
    return  Boolean(command.match(/^Chatbot/i));

}

/**
 * Given a certain message, help the chatbot get rid of all the emoji's encryption through the message.
 *
 * @param {string} message
 * @returns {string} The message without the emojis encryption
 */
export function removeEmoji(message) {
    return message.replace(/emoji[0-9]{1,4}/gi, '');
}

/**
 * Given a certain phone number, help the chatbot recognize whether it is in the correct format.
 *
 * @param {string} number
 * @returns {string} the Chatbot response to the phone Validation
 */
export function checkPhoneNumber(number) {
    if (Boolean(number.match(/\(\+[0-9]{2}\)\s[0-9]{3}\-[0-9]{3}-[0-9]{3}/g)))
        return "Thanks! You can now download me to your phone.";
    return "Oops, it seems like I can't reach out to "+number;
}

/**
 * Given a certain response from the user, help the chatbot get only the URL.
 *
 * @param {string} userInput
 * @returns {string[] | null} all the possible URL's that the user may have answered
 */
export function getURL(userInput) {
    return userInput.match(/[a-z]*\.[0-z]{2,3}/gm);
}

/**
 * Greet the user using the full name data from the profile.
 *
 * @param {string} fullName
 * @returns {string} Greeting from the chatbot
 */
export function niceToMeetYou(fullName) {
    const name = fullName.replace(/\s/g,'').split(/,/);
    return `Nice to meet you, ${name[1]} ${name[0]}`;
}
