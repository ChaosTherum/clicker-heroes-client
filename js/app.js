// Load native UI library
var gui = require('nw.gui');

// Get the current window
var win = gui.Window.get();

// Debug only!
//win.showDevTools();

$.get( "http://www.clickerheroes.com", function( data ) {
  	$( ".result" ).html( data );
  	var URL = data.match(/(https:)+([/|.|\w|\s])*\.(?:swf)/)[0];
  	console.log(URL);

  	// Clone Embed tag
  	var old_embed = $("#game");

  	// Remove old
	$("#game").remove();

	// Update cloned embed src
  	old_embed.attr('src', URL);

  	// Add to body
  	$('body').append(old_embed);
});



Mousetrap.bind('ctrl+i', function(e) {
    // Create a new window and get it
    var new_win = gui.Window.open('info.html', {
		position: 'center',
		width: 400,
		height: 280,
		toolbar: false,
		webkit: {
			plugin: true
		}
    });
});

Mousetrap.bind('f5', function(e) {
    // Create a new window and get it
    win.reload();
});

