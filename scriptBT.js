//Make Random Number
const generateRandNum = num => {
    return Math.floor(Math.random() * num);
};
const generateRandNum2 = num => {
    return Math.floor(Math.random() * num);
}
//Store the arrays with the quotes
const programmingQuotes = {
    shortQuote: ["Talk is cheap, shoe me the code" , "How you look at it is pretty much how you'll see it" , "Truth can only be found in one place: the code"]
};
const programmingQuotes2 = {
    shortQuote2: ["A constant quest to be myself" , "If we don't fight, who's gonna eat", "Tomorrow isn't promised in coding"]
};

let selectedQuote = [];
//Decide which array to use
for (let i in programmingQuotes) {
    let index = generateRandNum(programmingQuotes[i].length);
    switch(i) {
        case 'shortQuote' :
            selectedQuote.push(`Your programming quote is "${programmingQuotes[i][index]}".`)
            break;
    };
};
let selectedQuote2 = [];
for (let i in programmingQuotes2) {
    let index2 = generateRandNum2(programmingQuotes2[i].length);
    switch(i) {
    case 'shortQuote2' : 
        selectedQuote2.push(`The quote you shared is "${programmingQuotes2[i][index2]}".`)
    }
}
//Format output to look nice
const getQuotes = selectedQuote => {
    const formatted = selectedQuote.join('\n')
    console.log(formatted)
};
const getQuotes2 = selectedQuote2 => {
    const formatted = selectedQuote2.join('\m')
    console.log(formatted)
}
//Run this badboy 
getQuotes(selectedQuote);
getQuotes2(selectedQuote2);