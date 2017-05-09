function username(){
			$('.container').html("<span class='bot'>Bot: </span>Hello, what's your name?");
		}

function dateAndTime()
{
	var date=new Date();
	var h=date.getHours();
	var m=date.getMinutes();
	var s=date.getSeconds();
	return("Current time is "+h+":"+m+":"+s);
}
		function ai(reply){

			var message;
			var common1="Hey";
			var common2="Hi";
			var common3="What\'s up"
			var common4="ok";
			var common5="fine";
			var common6="Thanks";
			if(reply=="Satyam")
				botGreeting("Nice to meet you",reply);
			if(reply=="Who are you?")
				botGreeting("I am an auto-bot made by Satyam Raj","");
			if(reply=="What can you do?")
				botGreeting("Well, I am still in the development phase, so can only greet and talk a little","");
			if(reply==common1.toLowerCase() || reply==common2.toLowerCase())
				botGreeting("Hey there!","");
			if(reply==common3.toLowerCase())
				botGreeting("Nothing much, you?","");
			if(reply==common4.toLowerCase())
				botGreeting("Yes, anything else I can help you with?","");
			if(reply==common5.toLowerCase())
				botGreeting("Nice","");
			if(reply.indexOf("how are you")>=0)
				botGreeting("I'm good!","");
			if(reply.indexOf("time")>=0)
				{
					var time=dateAndTime();
					botGreeting(time);
				}
			if(reply.indexOf(common6.toLowerCase())>=0)
				setTimeout(function(){ botGreeting("You're welcome",""); }, 1500);
				//botGreeting("You're welcome.");
		}


		function botGreeting(botReply,reply){
			var container=$('.container');
		    var prevState=container.html();
			container.html(prevState+"<br>"+"<span class='bot'>Bot: </span>"+botReply).delay(500);
			
		}

		$(document).ready(function(){
			//When the document finishes loading

			username();

			$('#txtbox').keypress(function(event){
				//When enter key(13) is pressed in the textarea
				if( event.which==13){
					if($('#center').prop('checked')){
						//checks if the checkbox is checked
						//calls the same function had the user chosen to click the send button
						$('#send').click();
						//Prevents the default functionality of a textarea to insert a newline on pressing the enter key
						event.preventDefault();					}
				}
			})
			//When the user clicks Send
			$('#send').click(function(){

				var userName="<span class='user'>You: </span>";

				var newMessage=$('#txtbox').val();
				//Makes the value of the checkbox empty
				$('#txtbox').val('');
				//Display the message on the container div
				var container=$('.container');
				var prevState=container.html();	//Stores the original html content
				container.html(prevState+"<br>"+userName+newMessage);
				//following code is to bring the display to th newest msg
				container.scrollTop(container.prop('scrollHeight'));
				ai(newMessage);
			})

		})