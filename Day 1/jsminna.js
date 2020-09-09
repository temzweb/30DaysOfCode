function program(sentence){
    
    let reversedCaseSentence = [];
    let UpperCased = [];
    let endsWithIng = [];
    let palindrome = [];
    let result = {}

    // Reverse the case of each character
    for(let i=0; i<sentence.length; i++){
        if(sentence[i]===sentence[i].toUpperCase()){
            reversedCaseSentence.push(sentence[i].toLowerCase())
        }else{
            reversedCaseSentence.push(sentence[i].toUpperCase())
        }
    }
    reversedCaseSentence = reversedCaseSentence.join('').split(' ')
    

    // Check if a word starts with an uppercased letter
    for(let i=0; i<reversedCaseSentence.length; i++){
        if(reversedCaseSentence[i][0] === reversedCaseSentence[i][0].toUpperCase()){
            UpperCased.push(reversedCaseSentence[i]);
        }
    }


    // check if a word ends with 'ing'
    for(let i=0; i<reversedCaseSentence.length; i++){
        if(reversedCaseSentence[i].toLowerCase().endsWith('ing')){
            endsWithIng.push(reversedCaseSentence[i])
        }
    }
    

    // Check for palindrom words
    for(let i=0; i<reversedCaseSentence.length; i++){
        if(reversedCaseSentence[i].toLowerCase() === reversedCaseSentence[i].toLowerCase().split('').reverse().join('')){
            palindrome.push(reversedCaseSentence[i].toLowerCase())
        }
    }


    result['uppercased'] = UpperCased
    result['ing'] = endsWithIng
    result['palindrome'] = palindrome

    // console.log(result)
    return result
}

console.log(program('maDam aYO Who Stays In oYo Was in a Bus to Lagos whEn Her Son Sold the eAting rAceCar running TYPING'));
