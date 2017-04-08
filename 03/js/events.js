var number = 0;

function clickBtn() {
    var x = count();
    console.log("You clicked the button " + x + " times.");
}

function count() {
    number += 1;
    return number;
}