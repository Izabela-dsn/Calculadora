const getElements = e => {
  const element = document.querySelector('[data-show-numbers]').innerHTML
  const completeElements = (document.querySelector(
    '[data-show-numbers]'
  ).innerHTML = element + e)
  return completeElements
}

const deleteElements = () => {
  const visor = document.querySelector('[data-show-numbers]').innerHTML
  document.querySelector('[data-show-numbers]').innerHTML = visor.substring(
    0,
    visor.length - 1
  )
}

const calculo = () => {
  const visor = document.querySelector('[data-show-numbers]').innerHTML

  if (visor) {
    document.querySelector('[data-show-numbers]').innerHTML = eval(visor)
  }
}
