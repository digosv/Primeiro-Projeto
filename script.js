function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    // se tiver light mode colocar imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de MaikBrito com fundo azul, óculos escuro e jaqueta de couro"
    )
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de MaikBrito com camisa preta, fundo amarelo e óculos de gráu"
    )
    // se tiver dark mode, deixar imagem dark
  }
}
