$(document).ready(function () {

    let textField;
    var div = $('<div></div>' ).appendTo('body');
    var ul = $('<ul></ul>').appendTo('body');

    // Disables submit button.
    $('#btnSubmit').prop('disabled','disabled');

    // Adds alert windows and list creation functionality to submit button when clicked.
    $('#btnSubmit').click(function (e) {
 
        window.alert('The submit button was pressed.');
        textField = $('input[type=\'text\']').val();
        window.alert(textField);
        e.preventDefault();

        //Add list item with text from textbox and changes color of text when list item is clicked.
        let li = $(`<li>${textField}</li>`).appendTo(ul);
        li.click(function(){
            let color= randomColor();
            li.css("color",color);
        });

        //Removes list item that was doubled clicked.
        li.dblclick(function(){
            li.remove();
        });
        
        

    });
  
    
    // Enables submit button once input is typed in text box.
    $('input[type=\'text\']').on('change',function(){
           $('#btnSubmit').prop('disabled',false);
    });

   

    //Return a random color in RGB format.
    function randomColor() {
        let [red, green, blue] = [Math.ceil(Math.random() * 255), Math.ceil(Math.random() * 255), Math.ceil(Math.random() * 255)];
        return `rgb(${red},${green},${blue})`;
    }


});

