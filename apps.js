$(document).ready(function () {

    let textField;
    $('#btnSubmit').click(function (e) {
        // e.preventDefault()
        window.alert('The submit button was pressed.');
        textField = $('input[type=\'text\']').val();
        window.alert(textField);
        e.preventDefault();

    });
  
    $('#btnSubmit').prop('disabled','disabled');

    var div = $('<div></div>' ).appendTo('body');
    
    $('input[type=\'text\']').on('change',function(){
   
        $('#btnSubmit').prop('disabled',false);

        $('#btnSubmit').one('click',function (e) {
           
            var h2 = $(`<h2>${textField}</h2>`).appendTo(div);
            h2.on('mouseover',function(){
                h2.css({
                    backgroundColor: '#00ffff',
                    borderRadius: '2px',
                    borderStyle:'dashed'
                });
            })

        });

    });






});

