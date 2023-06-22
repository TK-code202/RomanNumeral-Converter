//Business Logic

function convertToRoman (num) {
    if (num <= 0|| num > 3999) {
        return "<p>Invalid! Enter a valid number</p>" ;
    }
    const numeralValues = [["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"], ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"], ["", "C", "CC", "CCC" , "CD", "D", "DC", "DCC", "DCCC", "CM"],  ["", "M", "MM", "MMM"]];

    let numeral = "";
    const digits = num.split("").reverse();
    for (let i = 0; i < digits.length; i++) {
        numeral  = numeralValues[i][parseInt(digits[i])] + numeral;
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