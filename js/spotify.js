let botao = document.querySelector('.login');
let faz = true;

botao.addEventListener('click', function(){

     if(faz){
          mostraSubMenu(); 
          faz = false;

     }else{

         escondeSubmenu();
         faz = true;
     }
  
   
});

function mostraSubMenu(){

     let submenu = document.querySelector('.submenu');  
     submenu.classList.add('mostra-submenu');

     let trocaBotao = document.querySelector('.botao-submenu');
     trocaBotao.innerHTML = '<i style="font-size:24px" class="fa">&#xf106;</i>';

}

function escondeSubmenu(){
   
        
    let submenu = document.querySelector('.submenu');
    submenu.classList.remove('mostra-submenu');

    let trocaBotao = document.querySelector('.botao-submenu');
    trocaBotao.innerHTML = '<i style="font-size:24px" class="fa">&#xf107;</i>';

}
