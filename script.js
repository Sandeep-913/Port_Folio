function myfunc1(){
    const d = document.getElementById("theme");

    if(d.getAttribute('href') == 'style.css'){
        d.setAttribute('href','styledark.css');
    }else{
        d.setAttribute('href','style.css');
    }
}