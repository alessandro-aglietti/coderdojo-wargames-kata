/**
 * 
 */
var NICKNAME;

$(function(){
	console.log("onload");
	
	var greatings = '\nhelp command available';
	$.ajax({
		url : "ascii/welcome.txt",
		async: false
	}).done(function(data) {
		greatings = data + greatings;
	});
	
	NICKNAME = Cookies.get('waragmes_nickname');
	if ( !NICKNAME ) {
		NICKNAME = prompt("Insert your nickname", "");
		Cookies.set('waragmes_nickname', NICKNAME, { expires: 7 });
	}
	
	$('#term-wrapper').terminal(function(command, term) {
        if (command !== '') {
            try {
                term.echo(new String(command));
            } catch(e) {
                term.error(new String(e));
            }
        } else {
           term.echo('');
        }
    },{
        greetings: greatings,
        prompt: NICKNAME + '@boat:~$ '
    });
});