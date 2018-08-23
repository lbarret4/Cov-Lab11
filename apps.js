$(document).ready(function () {

    $('#btnSubmit').click(function (e) {
        // e.preventDefault()
        window.alert('The submit button was pressed.');
        let textField = $('input[type=\'text\']').val();
        window.alert(textField);
        e.preventDefault();

    });
  
    $('#btnSubmit').prop('disabled','disabled');
    
    $('input[type=\'text\']').on('input',function(){
   
        $('#btnSubmit').prop('disabled',false);

    });
    $('body' ).append('<div></div>');

  








});

