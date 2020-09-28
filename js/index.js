let $menu = document.getElementById('icono')
let $navbar = document.getElementById('navbar')

$menu.addEventListener("click",async ()=>{
    
    if($navbar.classList.contains('displayNone')){
        
        
        $navbar.classList.remove('displayNone')
        $navbar.classList.add('slideToTop')

    }else{
        
        $navbar.classList.remove('slideToTop')
        $navbar.classList.add('displayNone')
        
    }

})

