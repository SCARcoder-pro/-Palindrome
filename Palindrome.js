function palindrome(myString) {
    var input = myString.replace(/[^A-Z0-9]/gi, "").toLowerCase();
    var reversedInput = input.split("").reverse().join("");
    if (input === reversedInput) {
        document.write("<div>" + myString + " is a palindrome </div>");
    } else {
        document.write("<div>" + myString + " is not a palindrome </div>");
    }
}
palindrome("madam");
palindrome("apple");
palindrome("forward");
palindrome("laptop");
palindrome("civic");
palindrome("racecar");
palindrome("level");
palindrome("solo");
palindrome("radar");
palindrome("rotor");
