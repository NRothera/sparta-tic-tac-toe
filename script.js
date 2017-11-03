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
            winningCheck(player1chosen, "X");
          //This is player 2's go, turns boxes white with an O
          }else if((player2===true)&&(!$(this).is('#clicked'))){
            $(this).addClass('O').html('O');
            player1=true;
            player2=false;
            $(this).attr('id', 'clicked');
            $(".playerTurn").html("It is X's turn");
            player2chosen.push(parseInt($(this).attr("data-num")))
            winningCheck(player2chosen, "O")
          }
        })
      })

    }

    // This function checks to see if you have won
    function winningCheck(chosen, player){
      $(winningCombinations).each(function(key, value){
        if (jQuery.inArray(value[0],chosen) !==-1){
          if (jQuery.inArray(value[1],chosen) !==-1){
            if (jQuery.inArray(value[2],chosen) !==-1){
              alert(player + ' has won!');
              reset()
            }
          }
        }
      })
    }

    $('#reset').click(reset)
    //Function to clear everything
    function reset(){
        $('td').each(function(index,value){
          $(this).html(' ').css('background-color', 'none');
          $(this).attr('id', '');
          $(this).attr('class', '');
          player1chosen = [];
          player2chosen=[];
          player1 = true;
          player2 = false;
          $('.playerTurn').html("It is X's turn")
        })
      }

    changeTableCells()
    reset()
    // winningCombinations()

    var randomNumber = Math.floor((Math.random()*12))
    var groupNames = ["Nick", "Jon", "Nick 2", "Yusuf", "Matt", "Daniel", "Deepa", "Narullah", "Nathan", "Soraia", "Steven", "Katie", "Ka Lok"]

    console.log(groupNames[randomNumber])

  })
