function changeColor(){
    let header = document.querySelector('header');
    let body = document.querySelector('body');
    let nav = document.querySelector('nav');
    if(header.style.backgroundColor != 'pink'){
        header.style.backgroundColor = 'pink';
        body.style.backgroundColor = 'pink';
        nav.style.backgroundColor = 'pink';
        
    }else{
        header.style.backgroundColor = 'rgb(253, 255, 181)';
        body.style.backgroundColor = 'rgb(253, 255, 181)';
        nav.style.backgroundColor = 'rgb(253, 255, 181)';
    }
    return;
}




