let url = window.location.href
console.log(url)

const $header = 
`
<nav class="navbar navbar-expand-lg navbar-light position-sticky">
    <h1 class="navbar-brand w-50" href="#">TuCelu</h1>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav w-100 d-flex justify-content-around">
        <li class="nav-item">
        <a class="nav-link" href="index.html">Home</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="about.html">Acerca de</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="contact.html">Contacto</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="registrer.html">Registrate</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="locals.html">Sucursales</a>
        </li>
    </ul>
    </div>
</nav>
`

const $footer = 
`
<section class="footer__redes">
    <a class="footer__redes--items" href="https://www.instagram.com/"><i class="fab fa-instagram"></i></a>
    <a class="footer__redes--items" href="https://www.facebook.com/"><i class="fab fa-facebook-square"></i></a>
    <a class="footer__redes--items" href="https://www.linkedin.com/"><i class="fab fa-linkedin"></i></a>
    <a class="footer__redes--items" href="https://www.twitter.com/"><i class="fab fa-twitter"></i></a>
</section>
<p class="footer__derechos">todos los derechos reservados</p>
`

let product=''
for(let i = 0; i<data.length;i++){
    product += `
    <article class="menu__products--items">
        <img src="${data[i].imagen2}" alt="/">
        <section class="menu--items__description">
            <h2>${data[i].nombre}</h2>

            <a class="menu--items__description--more" href=${posicion(i)}>ver mas</a>

        </section>
    </article>
    `
}

function posicion(pos){
    switch(pos){
        case 0: return "iphone8.html"
        case 1: return "iphone10.html"
        case 2: return "iphone11.html"
    }
}

let cards = data.map((card)=>{
    return(
        `
        <img class="menu__article--image" src="${card.imagen}" alt="">
        <section class="menu__article--description">

            <h2>${card.nombre}</h2>
            <ul>
                <li>${card.descipcion.fecha}</li>
                <li>${card.descipcion.peso}</li> 
                <li>${card.descipcion.espesor}</li> 
                <li>${card.descipcion.memoria}</li> 
                <li>${card.descipcion.pantalla}</li> 
                <li>${card.descipcion.camara}</li> 
                <li>${card.descipcion.RAM}</li> 
                <li>${card.descipcion.procesador}</li>
                <li>${card.descipcion.bateria}</li>  
            </ul>
            <h3>$ ${card.precio}</h3>
            <button class="buyButtom">Aniadir al carrito</button>


        </section>
        `
    )
})


document.getElementById('header').innerHTML=$header
document.getElementById('footer').innerHTML=$footer

if(url == 'https://germandelvalle.github.io/TuCelu/index.html'){
    document.getElementById('products').innerHTML=product;
}
if(url == 'https://germandelvalle.github.io/TuCelu/iphone8.html'){
    document.getElementById('article0').innerHTML=cards[0];
}
if(url == 'https://germandelvalle.github.io/TuCelu/iphone10.html'){
    document.getElementById('article1').innerHTML=cards[1];
}
if(url == 'https://germandelvalle.github.io/TuCelu/iphone11.html'){
    document.getElementById('article2').innerHTML=cards[2];
}







