let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}
let themeToggler = document.querySelector('#theme-toggler');

themeToggler.onclick = () =>{
    themeToggler.classList.toggle('fa-sun');
    if(themeToggler.classList.contains('fa-sun')){
        document.body.classList.add('active');
    }else{
        document.body.classList.remove('active');
    }
};

function sendmail(){
    
    var name = $('#name').val();
    var email = $('#email').val();
    var subject = $('#subject').val();
    var message = $('#message').val();

    // var body = $('#body').val();

    var Body='name: '+name+'<br>email: '+email+'<br>subject: '+subject+'<br>message: '+message;
    //console.log(name, phone, email, message);

    Email.send({
SecureToken:"fbf31702-bb7f-4a4e-9c1c-4ccf17ee777f",
        To: 'sonatonicyberteam@gmail.com',
        From: "",
        Subject: "",
        Body: Body
    }).then(
        message =>{
            //console.log (message);
            if(message=='OK'){
            alert('Your mail has been send. Thank you for connecting.');
            }
            else{
                console.error (message);
                alert('There is error at sending message. ')
                
            }

        }
    );



}
