$(function(event){
  var player1 = true;
  var player2 = false;
  var player1chosen = [];
  var player2chosen = [];
  var win1 = '123';
  var win2= '456';
  var win3 = '789';
  var win4 = '147';
  var win5 = '258';
  var win6 = '369';
  var win7 = '159';
  var win8 = '357';
  //Function to change inner HTML of table cells
    function changeTableCells(){
      $('td').each(function(index, value){
        $(this).click(function(event){
          //This is player ones go, turns boxes black with an X
          if ((player1===true) && (!$(this).is('#clicked'))){
            $(this).addClass('X').html('X');
            player2 = true;
            player1 = false;
            $(this).attr('id', 'clicked');
            $(".playerTurn").html("It is O's turn");
            player1chosen.push($(this).attr("data-num"))
            console.log(player1chosen)
          //This is player 2's go, turns boxes white with an O
          }else if((player2===true)&&(!$(this).is('#clicked'))){
            $(this).addClass('O').html('O');
            player1=true;
            player2=false;
            $(this).attr('id', 'clicked');
            $(".playerTurn").html("It is X's turn");
            player2chosen.push($(this).attr("data-num"))
            console.log(player2chosen)
          }
        })
      })
      // storeScores();
    }

    function winningCombinations(){

    }



    //function to store who has picked which blocks
    // function storeScores(){
    //   $('tr').click(function(event){
    //     if (player1 === true){
    //       if ($(this).hasClass('row1')){
    //         player1array1.push('1')
    //         console.log($('tr')[2])
    //       }else if ($(this).hasClass('row2')){
    //         player1array2.push('2')
    //       }else if($(this).hasClass('row3')){
    //         player1array3.push('3')
    //       }
    //     }else if(player2===true){
    //       if ($(this).hasClass('row1')){
    //         player2array1.push('1')
    //
    //       }else if ($(this).hasClass('row2')){
    //         player2array2.push('2')
    //
    //       }else if($(this).hasClass('row3')){
    //         player2array3.push('3')
    //
    //       }
    //     }
    //   })
    // }

    //Function to check in won
    // function hasWon(){
    //   if ((player1array1.length === 3)|| (player1array2.length===3) || (player1array3.length===3)){
    //     alert('O has won!')
    //     reset()
    //   }else if((player2array1.length === 3)|| (player2array2.length===3) || (player2array3.length===3)){
    //     alert('X has won!')
    //     reset()
    //   }else if((player2array1[0]))
    // }







    //Function to clear everything
    function reset(){
      $('#reset').click(function(event){
        $('td').each(function(index,value){
          $(this).html(' ').css('background-color', 'none')
          $(this).attr('id', '')
          $(this).attr('class', '')
          player1chosen = []
          player2chosen=[]
        })
      })
    }
    changeTableCells()
    reset()
    // winningCombinations()
  })





//Function



//Function to find out if anyone has won
