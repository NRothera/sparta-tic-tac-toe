
var player1 = true;
var player2 = false;
$(function(event){
  //Function to change inner HTML of table cells
    function changeTableCells(){
      $('td').each(function(index, value){
        $(this).click(function(event){






          if ((player1===true) && (!$(this).is('#clicked'))){
            $(this).addClass('X').html('X')
            player2 = true
            player1 = false
            $(this).attr('id', 'clicked');

          }else if((player2===true)&&(!$(this).is('#clicked'))){
            $(this).addClass('O').html('O')
            player1=true
            player2=false
            $(this).attr('id', 'clicked');
          }
        })
      })
    }

    changeTableCells()


  })





//Function


//Function to clear everything

//Function to find out if anyone has won
