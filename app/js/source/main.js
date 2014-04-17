(function(){
  'use strict';

  var red = $('<img src="./media/red.png">');
  var white = $('<img src="./media/white.png">');
  // var redk = $('<img src="./media/redk.png">');
  // var whitek = $('<img src="./media/whitek.png">');

  $(document).ready(init);

  function init(){
    $('#newgame').click(start);
  }

  function start(){
    $('.playable').empty();
    $('.redstart').append(red);
    $('.whitestart').append(white);
  }

})();
