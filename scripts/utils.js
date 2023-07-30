export function notNumber(value) {
  return isNaN(value) || value == ''
}

export function calculateIMC(weight , height){
  return calculateIMC = weight / (height * height)
}