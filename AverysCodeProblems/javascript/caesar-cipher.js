// Example input:
let test1 = caesarCypher('a', 2);
console.log(test1);

let test2 = caesarCypher('doggo', 7);
console.log(test2);

let test3 = caesarCypher('hello', 13);
console.log(test3);

let alphabet = 'abcdefghijklmnopqrstuvwxyz';

function caesarCypher(secret, shift) {
    let answer = '';

    for (let i = 0; i < secret.length; i++) {

        // Find the position of the current letter in the alphabet.
        let alphaPosition = alphabet.indexOf(secret[i]);

        // Accounts for elements that do not exist in the alphabet
        // i.e. spaces.
        if (alphaPosition === -1) {

            // Concatenate the character to the answer.
            answer += secret[i];
        }
        else {
            // Concatenate letter of alphabet with regard to shift to the answer.
            answer += alphabet[(alphaPosition + shift) % alphabet.length];
        }
    }

    return answer;
}