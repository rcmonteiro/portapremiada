const updateSetup = ([count, selected]: [number,number], update: any) => {
  if(count<3) {
    alert("A quantidade de portas não pode ser menor que 3!")
    return false
  }
  if(selected<=0 || selected>count) {
    alert("A porta premiada deve estar dentro do total de portas configurado")
    return false
  }
  update([count, selected])
  localStorage.setItem('doorSetup',JSON.stringify([count, selected]))
  return true
}

export {updateSetup}