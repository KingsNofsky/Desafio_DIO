function quant(n1 = 190, n2 = 100){
    let sub = n1 - n2
    return sub
  }
  let total = quant()
  //console.log(total)
  
  if(total <= 10){
    console.log("O Heroi tem um saldo de " + total +" vitórias está no nível de Ferro")
  }else if(total >= 11 && total  <= 20){
      console.log("O Heroi tem um saldo de " + total +" vitórias está no nível de Bronze")
  
  }else if(total >= 21 && total  <= 50){
      console.log("O Heroi tem um saldo de " + total +" vitórias está no nível de Prata")
  
  }else if(total >= 51 && total  <= 80){
      console.log("O Heroi tem um saldo de " + total +" vitórias está no nível de Ouro")
  
  }else if(total >= 81 && total  <= 90){
      console.log("O Heroi tem um saldo de " + total +" vitórias está no nível de Diamante")
      
  }else if(total >= 91 && total  <= 100){
      console.log("O Heroi tem um saldo de " + total +" vitórias está no nível de Lendário")
      
  }else if(total >= 101){
      console.log("O Heroi tem um saldo de " + total +" vitórias está no nível de Imortal") 
  }