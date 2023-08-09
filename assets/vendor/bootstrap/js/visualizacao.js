// Alerta da primeira remessa de fotos do site
$('.verfoto').click(function(e){
    e.preventDefault()
    alert('Produto Favorito')})

    //função alert da segunda remessa de fotos, usando o case
    $(document).ready(function(){
        //selecionar todos os botões e monitorar os cliques
        $('.verfoto-2').click(function(e){
            e.preventDefault()
            foto = $(this).attr('data-linhas')
    
           switch(foto){
               case 'linha-brownies' : 
                alert('Linha de Brownies Schokolade ©')
                break
                case 'linha-cupcakes' : 
                alert('Linha de Cupcakes Schokolade ©')
                break
                case 'linha-milkshake' : 
                alert('Linha de MilkShakes Schokolade ©')
                break
                case 'linha-cafe' : 
                alert('Linha de Cafés Schokolade ©')
                break
                case 'linha-chocolate' : 
                alert('Linha de Chocolates Schokolade ©')
                break
                default : console.log('O produto não existe...')
           }
        })
    })
   /*  $(document).ready(function(){
        $('.verfoto').click(function(e){
            e.preventDefault()
           var ID = $(this).attr('id')
    
           switch(ID){
               case 'img1' : 
                $(1).attr('Café Gelado')
                break 
                case 'pinscher' : 
                $('audio').attr('src', 'audio/pinscher.mp3')
                break
                case 'pug' : 
                $('audio').attr('src', 'audio/pug.mp3')
                break
                default : console.log('O animal não existe...')
                
           }
        })
    }) */