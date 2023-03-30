function reverseString(str) {
  let res = "";
  let tamanho = str.length-1;

  for(let posicao = tamanho; posicao >= 0; posicao--){
    res = res + str[posicao]
  } 
  console.log(res);
  return res;
}

reverseString("OláMundo");