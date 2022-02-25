const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});



i=0;
function submit_login(files){
	console.log(files);
	if (i>10){
		i+=1;
		text.innerHTML = "Wrong Password Try Again "+i+" !!!";
		return true;
	}
	if (login_username.value == "thefcraft"&login_password.value == 'Laksh@002005'){

		body.innerHTML = '<div class=videos>'+
			'<section class="video-section" id="VideoSection"></section></div>';
		var head = document.getElementsByTagName('HEAD')[0]; 
		var link = document.createElement('link');
		link.rel = 'stylesheet'; 		  
		link.type = 'text/css';		  
		link.href = 'gui-css/style.css'; 
		head.appendChild(link); 
		
		for (let i = 0; i < files.length; i++) {
			add_video(files[i])
		}
		
	}
	else{
		i+=1;
		text.innerHTML = "Wrong Password Try Again "+i+" !!!";
	}
}
login_submit_btn.addEventListener("click", function(event){submit_login(files)});
