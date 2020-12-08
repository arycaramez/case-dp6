// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.

//Google Analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', '​UA-12345-6', 'auto');
ga('send', 'pageview');

//menu: entre em contato
let bt_entreEmContato = document.querySelector('.menu-lista-link.menu-lista-contato')
bt_entreEmContato.addEventListener("click",function(){
    ga('send', 'event', "menu", "entre_em_contato", "link_externo");
})
//menu: download pdf
let bt_downloadPdf = document.querySelector('.menu-lista-link.menu-lista-download');
bt_downloadPdf.addEventListener("click",function(){
    ga('send', 'event', "menu", "download_pdf", "download_pdf");
})
// página analise, botão: Lorem
let bt_lorem = document.querySelector('.card.card-montadoras[data-id="lorem"]');
if(bt_lorem != null){
    bt_lorem.addEventListener("click",function(){
        ga('send', 'event', "analise", "ver_mais", bt_lorem.getAttribute('data-name'));
    });
}
// página analise, botão: Ipsum
let bt_ipsum = document.querySelector('.card.card-montadoras[data-id="ipsum"]');
if(bt_ipsum != null){
    bt_ipsum.addEventListener("click",function(){
        ga('send', 'event', "analise", "ver_mais", bt_ipsum.getAttribute('data-name'));
    });
}
// página análise, botão: Dolor
let bt_dolor = document.querySelector('.card.card-montadoras[data-id="dolor"]');
if(bt_dolor != null){
    bt_dolor.addEventListener("click",function(){
        ga('send', 'event', "analise", "ver_mais", bt_dolor.getAttribute('data-name'));
    });
}
//página sobre, contato, entrada (input): nome
let input_nome = document.querySelector('#nome');
if(input_nome != null){
    input_nome.addEventListener('change',function(){ 
        ga('send', 'event', "contato", input_nome.getAttribute('id'), "preencheu");
    })
}
//página sobre, contato, entrada (input): e-mail
let input_email = document.querySelector('#email');
if(input_email != null){
    input_email.addEventListener('change',function(){ 
        ga('send', 'event', "contato", input_email.getAttribute('id'), "preencheu");
    })
}
//página sobre, contato, entrada (input): telefone
let input_telefone = document.querySelector('#telefone');
if(input_telefone != null){
    input_telefone.addEventListener('change',function(){ 
        ga('send', 'event', "contato", input_telefone.getAttribute('id'), "preencheu");
    })
}
//página sobre, contato, entrada (input): aceito
let input_aceito = document.querySelector('#aceito');
if(input_aceito != null){
    input_aceito.addEventListener('change',function(){ 
        ga('send', 'event', "contato", input_aceito.getAttribute('id'), "preencheu"); 
    })
}

//página sobre, contato, botão enviar: lightbox
var verifica = setInterval(function(){
    let lightbox_enviar_txt = document.querySelector('body').classList.value
    if( lightbox_enviar_txt.includes('lightbox-open')){
        ga('send', 'event', "contato", "enviado", "enviado"); 
        clearInterval(verifica);
    }
},1000)