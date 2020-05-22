/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    for (let i = 0; i < chars.length; i++) {
        if (chars[i] === chars[i+1]) chars[i+1] = 2;
        else if (typeof chars[i] === "number") {
            if (chars[i-1] === chars[i+1]) {
                chars[i]++
                chars.splice(i+1, 1);
                i--;     
            } 
        } 
    }
    
    for (let i = 0; i < chars.length; i++) {
        if (typeof chars[i] === 'number') chars[i] = chars[i].toString();
        if (chars[i].length > 1) {
            let newItem = chars[i].split('')
            chars.splice(i, 1)
            for (let j = newItem.length-1; j >= 0; j--) {
                chars.splice(i, 0, newItem[j])
            }
        }
    }
    
    
    return chars.length;
};