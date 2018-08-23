$(document).ready(function () {

    $('#btnSubmit').click(function (e) {
        // e.preventDefault()
        window.alert('The submit button was pressed.');
        let textField = $('input[type=\'text\'').val();
        // console.log(textField);
        // window.alert(textField);

    });

    $('form').on("submit", function () {

        let textField = $('input[type=\'text\'').val();
        window.alert(textField);
        
    

    });









});

