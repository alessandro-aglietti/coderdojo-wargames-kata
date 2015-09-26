/**
 * NICKNAME and TERM from index.js
 */

var CMD = {
		HELP : "help",
		AUTOJOIN : "autojoin"
};

function commandManager(command) {
	switch(command) {
	    case CMD.HELP:
	        help();
	        break;
	    case CMD.AUTOJOIN:
	    	autojoin();
	        break;
	    default:
	        notfound();
		}
}

function notfound(){
	TERM.echo("Command not found");
}

function help(){
	$.ajax({
		url : "ascii/help.txt",
	}).done(function(data) {
		TERM.echo(data);
	});
}

function autojoin(){
	var team = 'red'; //FIXME!!
	
	TERM.set_prompt(NICKNAME + '@' + team + 'boat:~$ ')
	TERM.clear();
	
	$.ajax({
		url : "ascii/welcome-" + team + ".txt",
	}).done(function(data) {
		TERM.echo(data);
	});
}