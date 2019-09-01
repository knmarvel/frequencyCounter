function countStuff()   {
    let stuff = document.getElementById("textInput").value;
    stuff = stuff.toLowerCase();
    wordStuff = stuff.replace(/[^a-z'\s]+/g, "");
    letterStuff = stuff.replace(/[^a-z]+/g, "");
    /*here's where we start counting*/
    const letterCounts = {};
    for (let i = 0; i < letterStuff.length; i++)    {
        currentLetter = letterStuff[i];
        if(letterCounts[currentLetter] === undefined)   {
            letterCounts[currentLetter] = 1;
        } else {
            letterCounts[currentLetter]++;
        }}
/*turn it into an array to sort it*/
    let letterCountsArray = Object.entries(letterCounts);
    letterCountsArray = letterCountsArray.sort();
    console.log(letterCountsArray);
/*print it*/
    for (let letter in letterCountsArray)    {
        const span = document.createElement("span");
        const textContent = document.createTextNode(letterCountsArray[letter]+ "; ");
        span.appendChild(textContent);
        document.getElementById("lettersDiv").appendChild(span);
    }
    /*words*/
    let wordsStuff = wordStuff.split(" ");
    const wordsCounts = {};
    for(let i = 0; i < wordsStuff.length; i++)  {
        currentWord = wordsStuff[i];
        if(wordsCounts[currentWord] === undefined)  {
            wordsCounts[currentWord] = 1;
        } else {
            wordsCounts[currentWord]++;
        }
    }
    /*turn it into an array to sort it*/
    let wordCountsArray = Object.entries(wordsCounts);
    wordCountsArray = wordCountsArray.sort();
    console.log(wordCountsArray);

    for (let word in wordCountsArray)    {
        const span = document.createElement("span");
        const textContent = document.createTextNode(wordCountsArray[word] +"; ");
        span.appendChild(textContent);
        document.getElementById("wordDiv").appendChild(span);
    }
}
