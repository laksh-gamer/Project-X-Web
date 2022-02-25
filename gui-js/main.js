video_id = 0;

function add_video(file_path){
    video_id+=1;

    Video_Title = file_path.split('\\');
    Video_Title = Video_Title[Video_Title.length - 1];
    Video_Title = data_cryptor(Video_Title)

    VideoSection.innerHTML += 
    '<article class="video-container">'+
        '<a class="thumbnail" id="video'+video_id+'" >'+	
            '<video playsinline controls width="250" height="150" class=thumbnail-image  >'+
                '<source src="'+file_path+'" type="video/mp4"/></video></a>'+

	    '<div class="video-bottom-section">'+
			'<div class="video-details">'+
				'<a class="video-title">'+Video_Title+'</a></div></div></article>';

}


function data_cryptor(data){
    function letter_cryptor(data){
        output=''
        all_letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        for (let i = 0; i < data.length; i++) {
            find = false;
            for (let j = 0; j < all_letters.length; j++) {
                if (data[i] == all_letters[j]){ 
                    output += all_letters[all_letters.length-j-1];
                    find = true;
                }
            }
            if (find==false) { output += data[i]}
        }
        return output;
    }
    function int_cryptor(data){
        output=''
        digits = '0123456789';
        for (let i = 0; i < data.length; i++) {
            find = false;
            for (let j = 0; j < digits.length; j++) {
                if (data[i] == digits[j]){ 
                    output += digits[digits.length-j-1];
                    find = true;
                }
            }
            if (find==false) { output += data[i]}
        }
        return output;
    }
    function reverse_cryptor(data){
        output = ''
        for (let i = 0; i < data.length; i++) {
            output+=data[data.length-i-1]
        }   
        return output
    }
    
    output = letter_cryptor(data.split('.Vru')[0]);
    output = int_cryptor(output);
    output = reverse_cryptor(output);
    console.log(output);
    return output}