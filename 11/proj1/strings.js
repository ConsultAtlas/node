class Strings {
    // Reverses a string.
    reverse(toReverse) {
        return toReverse.split('').reverse().join('')
      }

    // Detectes if a string is a pallindrome
    detectPallindrome(toCheck) {
        var re = /[\W_]/g;
        var lowRegStr = toCheck.toLowerCase().replace(re, '');
        var reverseStr = lowRegStr.split('').reverse().join('');
        return reverseStr === lowRegStr;
    }
    // Shifts every letter forward by one. Z goes
    // to A (wraps around)
    shift(toShift) {

      var alphabet = "abcdefghijklmnopqrstuvwxyz";
      var newStr = "";

      for (var i = 0; i < toShift.length; i++) {
          var char = toShift[i],
              isUpper = char === char.toUpperCase() ? true : false;

          char = char.toLowerCase();

          if (alphabet.indexOf(char) > -1) {
              var newIndex = alphabet.indexOf(char) + 1;
              if(newIndex < alphabet.length) {
                  isUpper ? newStr += alphabet[newIndex].toUpperCase() : newStr += alphabet[newIndex];
              } else {
                  var shiftedIndex = -(alphabet.length - newIndex);
                  isUpper ? newStr += alphabet[shiftedIndex].toUpperCase() : newStr += alphabet[shiftedIndex];
              }
          } else {
             newStr += char;
          }
      }
      return newStr;
}


    /*// only shifted, did not push z around to a
      /toShift = toShift.toLowerCase();

      var result = '';
      var charcode = 0;

      for (var i = 0; i < toShift.length; i++) {
          charcode = (toShift[i].charCodeAt()) + 1;
          result += String.fromCharCode(charcode);
      }
      return result;
  }*/

    // Checks to see if the target string is a number
    isNumber(toCheck) {
      return !isNaN(toCheck);
    }
}

module.exports = Strings
