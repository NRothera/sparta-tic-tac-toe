
var player1 = true;
var player2 = false;
$(function(event){
  //Function to change inner HTML of table cells
    function changeTableCells(){
      $('td').each(function(index, value){
        $(this).click(function(event){
          //This is player ones go, turns boxes black with an X
          if ((player1===true) && (!$(this).is('#clicked'))){
            $(this).addClass('X').html('X')
            player2 = true
            player1 = false
            $(this).attr('id', 'clicked');
            $(".playerTurn").html("It is O's turn")
          //This is player 2's go, turns boxes white with an O
          }else if((player2===true)&&(!$(this).is('#clicked'))){
            $(this).addClass('O').html('O')
            player1=true
            player2=false
            $(this).attr('id', 'clicked');
            $(".playerTurn").html("It is X's turn")
          }
        })
      })
    }



    //Function to clear everything
    $('#reset').click(function(event){
      $('td').each(function(index,value){
        $(this).html(' ').css('background-color', 'none')
        $(this).attr('id', '')
        $(this).attr('class', '')
      })
    })

    changeTableCells()


  })





//Function



//Function to find out if anyone has won
