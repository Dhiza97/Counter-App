$(document).ready(function() {
    let counter = 0
    const counterElement = $('#counter')

    function increaseCounter() {
        counter++
        counterElement.text(counter)
    }

    function decreaseCounter() {
        if (counter > 0) {
            counter--;
            counterElement.text(counter);
        }
    }

    function resetCounter() {
        counter = 0
        counterElement.text(counter)
    }

    $('#increaseButton').click(increaseCounter)
    $('#decreaseButton').click(decreaseCounter)
    $('#resetButton').click(resetCounter)
})

