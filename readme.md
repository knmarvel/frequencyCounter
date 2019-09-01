
Assessment: Frequency Counter

    Due Sep 6 by 11:59pm Points 5 Submitting a website url

In any written text, some letters will be used more often than others. Similarly, some words will be used more often than others. You are going to create a web page to count how frequently different letters and words are used in a block of text.

 
Getting Started

Create a new directory for this project. Create an index.html file, and a corresponding .js file.

Next, you need a way to let the user enter some text. The following snippet of HTML defines a text area and a button:

<textarea rows="15" cols="60" id="textInput"></textarea><br>
<button id="countButton">Count Frequencies</button>

At this point, let's also add two divs that you can use later for presenting the results:

<div id="lettersDiv"></div>
<div id="wordsDiv"></div>

The button you added earlier doesn't actually do anything yet; you need to attach a click handler to it using javascript:

document.getElementById("countButton").onclick = function() {
   // your code will go here ...
}

You also need a way to find out what was typed into the text field:

   let typedText = document.getElementById("textInput").value;

Lastly, you need a way to ignore capitalization and punctuation. In a sentence like "Dogs enjoy sniffing other dogs!" you want both occurrences of the word "dogs" to be counted the same, even though one is capitalized and one isn't. Likewise, you don't care that one has an exclamation point and the other doesn't.

typedText = typedText.toLowerCase();
// This changes all the letter to lower case.

typedText = typedText.replace(/[^a-z'\s]+/g, "");
// This gets rid of all the characters except letters, spaces, and apostrophes.
// We will learn more about how to use the replace function in an upcoming lesson.

 
Counting letters and words

You can index into strings just like you can index into arrays. The expression typedText[4] will give you the 5th character of typedText. That means you can write a loop over all the characters in typedText like this:

for (let i = 0; i < typedText.length; i++) {
   currentLetter = typedText[i];

   // do something for each letter.
}

You will use the idea of objects (a form of "associative array"), introduced in the lesson, to keep count of the number of times each different letter is used in the text.

const letterCounts = {};

When encountering a letter for the first time, you will initialize the corresponding count to 1. Otherwise, you will add one to the count.

if(letterCounts[currentLetter] === undefined) {
   letterCounts[currentLetter] = 1;
} else {
   letterCounts[currentLetter]++;
}

To output how many times each letter occurred, you can use a for..in loop over letterCounts.

for (let letter in letterCounts) {
   const span = document.createElement("span");
   const textContent = document.createTextNode('"' + letter + "\": " + letterCounts[letter] + ", ");
   span.appendChild(textContent);
   document.getElementById("lettersDiv").appendChild(span);
}

You'll find that the letters aren't sorted in any useful order. That's fine for now, you can improve it later.

To produce the same kind of frequency count for words, you need a way to break the input string up into words by splitting it on the spaces. Conveniently enough, there's a built-in function that can help with that:

const words = typedText.split(" ");

Given that, see if you can figure out how to adapt the letter-counting logic given above to apply to counting words.

 
Completed example

Here is a baseline example of a complete solution:

wordcount-mvp.png
Bonus

There are lots of opportunities to improve on the baseline solution to make it look more polished.

Try to arrange the output more neatly.

Try to output the letters and words in order from most common to least common.

Try to illustrate the relative frequencies with a histogram chart. 
