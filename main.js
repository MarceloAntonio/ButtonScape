function fuja() {
  var btn = document.getElementById("btn")
  var alturax = window.innerWidth
  var alturay = window.innerHeight

  var maxX = alturax - btn.offsetWidth
  var maxY = alturay - btn.offsetHeight

  var randonx = Math.floor(Math.random() * maxX)
  var randony = Math.floor(Math.random() * maxY)

  btn.style.left = randonx + "px"
  btn.style.top = randony + "px"
}
