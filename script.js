$(function(event){
  var player1 = true;
  var player2 = false;
  var player1chosen = [];
  var player2chosen = [];
  var winningCombinations = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]]
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
            player1chosen.push(parseInt($(this).attr("data-num")))
            console.log(player1chosen)
          //This is player 2's go, turns boxes white with an O
          }else if((player2===true)&&(!$(this).is('#clicked'))){
            $(this).addClass('O').html('O');
            player1=true;
            player2=false;
            $(this).attr('id', 'clicked');
            $(".playerTurn").html("It is X's turn");
            player2chosen.push(parseInt($(this).attr("data-num")))
            console.log(player2chosen)
          }
          if (player1chosen.length >=3 || player2chosen.length >=3){
            winningCheck()
          }
        })
      })
      // storeScores();
    }

    // function winningCheck(){
    //   for (var i = 0; i < winningCombinations.length; i++){
    //     if (player1chosen.inclu)
    //     }
    //   }


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
