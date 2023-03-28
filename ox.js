document.addEventListener(
    'DOMContentLoaded',
    function () {
      var a = '';
    }
  );

  document.addEventListener('DOMContentLoaded', function () {
	  
    document.querySelector('#gameboard').addEventListener('click',  markField);	  
    
    function markField (e) { 
      var field = e.target;
      field.setAttribute('aria-label','x'); 
      field.setAttribute('disabled','disabled'); 
    }
  
  }
  );

  document.querySelector('#gameboard').addEventListener('click',  markField);	
  var current = 0,
      players = ['x', 'o'];  
  
  function markField (e) { 
    var field = e.target;
    field.setAttribute('aria-label', players[current]); 
    field.setAttribute('disabled','disabled'); 
    current = 1 - current;
  }

  document.querySelector('#gameboard').addEventListener('click',  markField);	
  var current = 0,
      players = [ 'x', 'o'];  
  
  function markField (e) { 
    var field = e.target;
    field.setAttribute('aria-label', players[current]); 
    field.setAttribute('disabled','disabled'); 
    current = 1 - current;
    document.querySelector('#hint').innerText = 'Spieler ' + players[current] + ' ist am Zug.';
  }

  function checkIfCompleted () {
    var fields = document.querySelectorAll('#gameboard button'), // fields ist die Liste unserer Felder
        full = true; // wir gehen davon aus, dass alle Zellen benutzt wurden
  
    // alle Felder markiert?
    for (var i = 0; i < fields.length; i++) {
      if (!fields[i].hasAttribute('disabled')) {
        full = false;
      }
    }
  
    // wenn full, dann Spiel vorbei, wenn nicht full, dann noch nicht
    if (full) {
      // Spiel zu Ende weil alle Felder belegt
    }
  }

  document.querySelector('#gameboard').addEventListener('click',  markField);	
  var current = 0,
      players = [ 'x', 'o'],
	  finished; // Flag für Spiel-ist-zuende;  

  function markField (e) { 
  }
  
  function checkIfCompleted () {
  }

  // Gewinner ermitteln
  for (i = 0; i < 3; i++) {

    // 3 senkrecht
    if (fields[0 + i].getAttribute('aria-label') != ""
      && fields[0 + i].getAttribute('aria-label') == fields[3 + i].getAttribute('aria-label')
      && fields[3 + i].getAttribute('aria-label') == fields[6 + i].getAttribute('aria-label')
    ) {

      // we have a winner!
      winner = fields[0 + i].getAttribute('aria-label');
    }

    // 3 waagrecht
    if (fields[i*3].getAttribute('aria-label') != ""
      && fields[i*3].getAttribute('aria-label') == fields[i*3 + 1].getAttribute('aria-label')
      && fields[i*3 + 1].getAttribute('aria-label') == fields[i*3 + 2].getAttribute('aria-label')
    ) {

      // we have a winner!
      winner = fields[i*3].getAttribute('aria-label');
    }
  }

  // diagonal links oben nach rechts unten
  if (fields[0].getAttribute('aria-label') != ""
    && fields[0].getAttribute('aria-label') == fields[4].getAttribute('aria-label')
    && fields[4].getAttribute('aria-label') == fields[8].getAttribute('aria-label')
  ) {
    winner = fields[0].getAttribute('aria-label');
  }

  // diagonal rechts oben nach links unten
  if (fields[2].getAttribute('aria-label') != ""
    && fields[2].getAttribute('aria-label') == fields[4].getAttribute('aria-label')
    && fields[4].getAttribute('aria-label') == fields[6].getAttribute('aria-label')
  ) {
    winner = fields[2].getAttribute('aria-label');
  }

  function checkIfCompleted () {
    var fields = document.querySelectorAll('#gameboard button'), // fields ist die Liste unserer Felder
        full = true; // wir gehen davon aus, dass alle Zellen benutzt wurden
  }
    // Gewinner ermitteln
      // 3 senkrecht
      if (fields[0 + i].getAttribute('aria-label') != ''
        && fields[0 + i].getAttribute('aria-label') == fields[3 + i].getAttribute('aria-label')
        && fields[3 + i].getAttribute('aria-label') == fields[6 + i].getAttribute('aria-label')
      ) {
  
        // we have a winner!
        winner = fields[0 + i].getAttribute('aria-label');
        highlightCells([fields[i], fields[3 + i], fields[6 + i]]);
      }
  
  
      // Game over?
      if (full || winner) {
        finished = true;
        if (winner == 'x'  || winner == 'o') {
          hint.innerText = 'Das Spiel ist zu Ende, weil Spieler ' + winner + ' gewonnen hat!';
          hint.className = 'success';	 
      } else {
        // Spiel zu Ende weil alle Felder belegt
        hint.innerText = 'Das Spiel endet unentschieden, weil alle Felder belegt sind.';
        hint.className = 'warning';
      }

      function highlightCells (cells) {
        for (var i = 0; i < 3; i++) {
          cells[i].classList.add('highlighted');
        }
      }
      }
