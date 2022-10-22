
const toggler=document.querySelector('.menu i')
const nav=document.querySelector('nav');
const header=document.querySelector('header');
toggler.addEventListener('click', ()=> {
    nav.classList.toggle('active')
});
window.addEventListener('scroll', ()=>{
    if(window.scrollY>0){
        header.classList.add('visible')
    }else{
        header.classList.remove('visible')
    }
})
