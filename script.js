//Make Random Number
const generateRandNum = num => {
    return Math.floor(Math.random() * num);
};

//Store the arrays with the quotes
const programmingQuotes = {
    shortQuote: ["Talk is cheap, shoe me the code" , "How you look at it is pretty much how you'll see it" , "Truth can only be found in one place: the code"]
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
//Format output to look nice
const getQuotes = selectedQuote => {
    const formatted = selectedQuote.join('\n')
    console.log(formatted)
};
//Run this badboy 
getQuotes(selectedQuote);