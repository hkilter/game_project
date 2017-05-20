$(function(){
  var games = [];
  $.getJSON( "http://kbora.xyz/fetch-all-fish.php", function( data ) {
    data.game_name.forEach(function (elem) {
      games.push({

        value: elem.game_name,
        data: elem.fish_id,
        data1:elem.catName

      });
    });
});

  // setup autocomplete function pulling from currencies[] array
  $('#autocomplete').autocomplete({
    lookup: games,
    onSelect: function (game) {
      // var thehtml = '<strong>Game Name:</strong> ' + game.value +
      //               ' <br> <strong>Symbol:</strong> ' + game.data +
      //               ' <br> <strong>xx:</strong> ' + game.data1;
      //
      // $('#outputcontent').html(thehtml);
    }
  });

});