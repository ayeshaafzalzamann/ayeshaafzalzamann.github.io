# ayeshaafzalzamann.github.io

section{
padding: 2rem 2%;
}

.btn{
margin-bottom:1rem ;
display: inline-block;
padding: .2rem 1rem;
border-radius: 1.5rem;
color: #fff;
background:  rgba(251, 51, 105, 0.541);
font-size: 1.7rem;
cursor: pointer;
font-weight: 500;
text-decoration: none;
margin: 2rem;
margin-left: 27rem;

}
.btn:hover{
background-color: #b8c8f1;
}
a:hover{
color: #000;

}
body{height: 300rem;
    overflow: auto;
}


.icons  {
position: relative;
left: 85%;
bottom: -10px;
flex-direction:row-reverse;
color: #0d0d0d;
padding-bottom: -20px;
margin-left: -10px;
margin-top: 0px;

}
.icons a{
text-decoration: none;
text-align: left;
margin-right: 10px;
justify-content:flex-end ;

}

.search-form {
justify-content: center;
border: black;
overflow: hidden;
background: #fff;
display: flex;


}
.search-form input{
border: none;
outline: none;
width: 30%;
padding: 2px;
font-size: 16px;
background: #f1f1f1;

}
.search-form label{
font-size: 1rem;
padding-right: -1.5rem;
color: #000;
}
.search-form label:hover{
color: #526a8d;
}



.header2{
position: relative;
top:5px;
margin-left: -10px;
margin-right: -10px;
border: #000 1px solid;
background-color: rgba(251, 251, 251, 0.829);
overflow: hidden;


}
.navbar{
margin-left: -10px;
margin-right: -10px;
display: flex;
flex-direction: row;
justify-content: center;
background-color: rgb(255, 179, 199);

}
.navbar a{
display: inline-block;
text-decoration: none;
padding: 25px;
text-align: center;
color: rgb(194, 48, 48);
transition-duration: 5ms;



}
.navbar a:hover{
background-color: #f8f6f6;
}
.login-form-container{
display: flex;
align-items: center;
justify-content: center;
background-color: rgba(255, 255, 255, 0.9);
position: fixed;
top: 0; right: -105%;
z-index: 10000;
height: 100%;
width: 100%;

}
.login-form-container.active{
right: 0;

}
.login-form-container form{
background: #ffffff;
border:1px solid rgba(0,0,0,.1);
width: 30rem;
padding: 1rem;
box-shadow: 0.4rem 1px rgba(0,0,0,.1);
border-radius: 1rem;
margin: 1rem;

}
.login-form-container form h3{
font-size: 2.2rem;
text-transform: uppercase;
color: rgba(0, 0, 0, 0.793);
text-align: center;

}
.login-form-container form span{
display: block;
font-size: 1.5rem;
padding-top: .2rem;

}

.login-form-container form .box{
margin: .7rem 0;
width:100% ;
font-size: 1.3rem;
border:.2px solid rgba(0, 0, 0, .1);
border-radius: 1;
padding: .18rem ;
color: #000000;
text-transform: none;

}
.login-form-container form .checkbox{
display: flex;
align-items: center;
gap: 5rem;
padding: 1rem 0;
cursor: pointer;
color: rgb(54, 54, 255);

}
.login-form-container form .checkbox label{
font-size: 2rem;
color: #000000;

}
.login-form-container .btn{
text-align: center;
width: 100%;
margin: 1.5rem 0;
text-decoration: underline;
}
.login-form-container form p{
padding-top: .8rem;
color: #010101;
font-size: 1.5rem;
}
.login-form-container form  a{
color: rgb(142, 2, 84);
text-decoration: underline;
}

.login-form-container form  a:hover{
color: rgb(0, 0, 0);
text-decoration: underline;
}
.login-form-container #close-login-btn{
position: absolute;
top: 1.5rem; right: 2.5rem;
font-size: 3rem;
color:#000000c6;
cursor: pointer;

}
.bottom-nav{
text-align: center;
background: rgb(255, 179, 199);
position: fixed;
bottom: 0;left: 0;right: 0;
z-index: 1000;
}
.bottom-nav a{
font-size: 1rem;
padding: 1rem;
color: #000000;
text-decoration: none;

}
.bottom-nav a:hover{
color: #f10060;
}


.home .row.content {
flex: 1 1 42rem;
/* Other styles */
}
.home__title{
    text-align: center;
}
.home__description{
    text-align: center;
}

.swiper {
    margin-left: auto;
    margin-right: auto;
    position: relative;
    overflow: auto;
    list-style: none;
    padding: 0;
    z-index: 1;
    display: block;}

.books-slider {
display: flex;
flex-wrap: wrap;
flex: 1 1 30rem;
text-align: center;


margin-right: -4rem;



/* Other styles */
}

.books-slider a img {
height: 24rem;
overflow: auto;
/* Other styles */
}

.books-slider a:hover img {
transform: scale(.9);
/* Other styles */}
.icons-container{
    display: grid;
    grid-template-columns:repeat(auto-fit,minmax(20rem,1fr)) ;
    gap: 1.5rem;
}
.icons-container .iconss{
    display: flex;
    align-items: center;
    gap: 1.5rem;
    padding: 2rem 0;
    box-sizing: border-box;
}
.icons-container .iconss i{
    font-size: 3.5rem;
    color:#91015fc7;
}

.icons-container .iconss i h3{
    font-size: 2.2rem;
    color:black;
    padding-bottom: .5rem;

}
.icons-container .iconss i p{
    font-size: 1.2rem;
    color:black;
    
    
}

3






//let loginForm = document.querySelector(".login-form-container");
//document.querySelector("#login-btn").onclick =() => {
  //  loginForm.classList.toggle("active");}
//document.querySelector("#close-login-btn").onclick =() => {
   // loginForm.classList.remove("active");
//}



//var swiper = new Swiper(".book-slider", {
   loop:true,
    centeredSlides : true,
    autoplay:{
        delay:9500,
        disableOnInteraction:false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        
      },
      768: {
        slidesPerView: 2,
        
      },
      1024: {
        slidesPerView:3,
        
      },
      1500: {
        slidesPerView: 4,
       
      },
    },
  });