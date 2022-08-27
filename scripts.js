let inputTitulo = document.getElementById("titulo")
let inputDescricao = document.getElementById("descrição")
let inputTipo = document.getElementById('tipo')
let inputUrl = document.getElementById('urlImagem')
let dGaleria = document.getElementById("galeria")
let h2Titu = document.getElementById("h2T")



function enviar(){
    
    let img = document.createElement('img')
    img.src = inputUrl.value 
    dGaleria.appendChild(img)
    
    
    let h2Titulo = document.createElement('h2')
    h2Titulo = inputTitulo.value
    dGaleria.appendChild(h2Titulo)
    
}

