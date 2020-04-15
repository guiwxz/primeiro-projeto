//primeira pagina
$(function(){
  let aparecer = 1;
    
    
  $("#botao1").click(function(){
        if(aparecer == 0){
           $("#texto1").hide(100);
            $("#imgnapne1").hide(100);
            aparecer = 1;
        }else{
            $("#texto1").show(100);
            $("#imgnapne1").show(100);
            aparecer = 0;
        }
    }               
)
});

$(function(){
  let aparecer = 1;
    
    
  $("#botao2").click(function(){
        if(aparecer == 0){
           $("#calendariointeiro").hide(1);
            aparecer = 1;
        }else{
            $("#calendariointeiro").show(10);
            aparecer = 0;
        }
    }               
)
});


//segunda pagina
$(function(){
  let aparecer = 1;
    
    
  $("#botao3").click(function(){
        if(aparecer == 0){
           $("#texto2").hide(1);
           $("#napne2").hide(1);
           $("#texto3").hide(1);
           $("#fotos").hide(1);
           $("#texto4").hide(1);
            aparecer = 1;
        }else{
            $("#texto2").show(10);
            $("#napne2").show(10);
            $("#texto3").show(10);
            $("#fotos").show(10);
            $("#texto4").show(10);
            aparecer = 0;
        }
    }               
)
});

//dentro do botao
$(function(){
    $('#divfotos ul').cycle({
        fx: 'fade',
        speed: 2000,
        timeout: 5000,
        next: '#next',
        prev: '#back',
        pager: '#pager'
    })
})

$(function(){
  let aparecer = 1;
    
$("#botao4").click(function(){
        if(aparecer == 0){
           $("#projetos").hide(1);

            aparecer = 1;
        }else{
            $("#projetos").show(10);

            aparecer = 0;
        }
    }               
)
});

//terceira pagina (teste no cadastro)
function testar(){
    let valor = +document.getElementById("teste").value;
    
    if(valor == 1){
        window.open("index4.html");
    }   
}

$(function(){
  let aparecer = 1;
    
$("#botao5").click(function(){
        if(aparecer == 0){
           $("#texto6").hide(1);

            aparecer = 1;
        }else{
            $("#texto6").show(10);

            aparecer = 0;
        }
    }               
)
});

//quarta pagina (teste de audio)
function teste(){
    let valor = +document.getElementById("testando").value;
    
    if(valor<=0 || valor>27)
        alert("Erro");
    
    if(valor>0 && valor<=4)
        alert("Sua audição é de um deus");
        
    if(valor>4 && valor<8)
        alert("Sua audição é melhor que a media");
        
    if(valor>=8 && valor<15)
        alert("Sua audição é normal");
       
    if(valor>=15 && valor<=23)
        alert("Sua audição não é muito boa");
    
    if(valor>23 && valor<=27)
        alert("Você é quase surdo");
}
