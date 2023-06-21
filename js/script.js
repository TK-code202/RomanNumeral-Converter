// function integerToRoman(num) {
//     if (typeof num !== 'number') {
//         return false;
//     }
//     var digits = String(+num).split(""),
//         key = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM", "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC", "", "I", "II", "III", "IV", "VI", "VII", "VIII", "IX"],
//         roman_num = "",
//         i = 3;
//     while (i--)
//         roman_num = (key[+digits.pop() + (i * 10)] || "") + roman_num; 
// return Array(+digits.join("")+1).join("M") + roman_num;
// }



function convertToRoman (num) {
    if (num <= 0|| num > 3999) {
        return "<p>Invalid! Enter a valid number</p>" ;
    }
    const numeralCodes = [["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"], ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"], ["", "C", "CC", "CCC" , "CD", "D", "DC", "DCC", "DCCC", "CM"],  ["", "M", "MM", "MMM"]];

    let numeral = "";
    const digits = num.split("").reverse();
    for (let i = 0; i < digits.length; i++) {
        numeral  = numeralCodes[i][parseInt(digits[i])] + numeral;
    }

    return numeral;
}

//UI Logic
$(document).ready(function() {
    $("#formOne").submit(function(event) {
        const inputtedNumber = $("#Number").val();
        const result = convertToRoman(inputtedNumber);

        $("#output").html(result);
        event.preventDefault();
    })
})