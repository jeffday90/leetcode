function spellingBeeSolutions(wordlist, puzzles) {
    let answerArr = [];

    for (let i = 0; i < puzzles.length; i++) {
        answerArr.push(0);
    }

    for (let i = 0; i < puzzles.length; i++) {
        for (let j = 0; j < wordlist.length; j++) {
            if (checkLetters(puzzles[i], wordlist[j])) {
                answerArr[i]++;
            }
        }
        
    }
    return answerArr;
}

const checkLetters = (word1, word2) => {
    let inside = true;
    let count = 0;
    let wordObj = {};

    for (let i = 0; i < word2.length; i++) {
        if (wordObj[word2[i]]) {
            wordObj[word2[i]]++;
        } else {
            wordObj[word2[i]] = 1;
        }
    }

    for (let i = 0; i < word2.length; i++) {
        if (!word2.includes(word1[i])) {
            return false;
        }

        if (word1.includes(word2[i])) {
               for (key in wordObj) {
                    if (key === word2[i]) {
                        count += wordObj[key];
                    }
                   
               }
               if (count === word2.length) {
                    return inside;
               }
            } else {
                inside = false;
                break;
            }
        }
    
    return inside;

}
