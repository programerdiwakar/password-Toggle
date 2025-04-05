let password = document.getElementById('password');
let eyeicon = document.getElementById('eyeicon');

eyeicon.onclick= ()=>{
    if(password.type === 'password'){
        password.type ='text';
        eyeicon.src ='img2.png';
        
        
    }
    else{
        password.type ='password';
        eyeicon.src ='img1.png';
    }
}