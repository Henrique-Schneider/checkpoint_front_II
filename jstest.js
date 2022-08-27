let dGaleria = document.getElementById("galeria")
let form = document.querySelector("form")



function enviar(){

  h2()
  function h2(){
    let h2Titulo = document.createElement('h2')
    h2Titulo = form['titulo'].value
    dGaleria.append(h2Titulo)
  }
  img()
  function  img(){
      let img = document.createElement('img')
      img.src = form['urlImagem'].value
      dGaleria.appendChild(img)
  }
  tipo ()
  function tipo(){
    let pTipo = document.createElement('p')
    pTipo = form['tipo'].value
    dGaleria.append(pTipo)
    }
   descricao()
    function descricao(){
      let pDescricao = document.createElement('p')
       pDescricao = form['descricao'].value
       dGaleria.append(pDescricao)
    }
}