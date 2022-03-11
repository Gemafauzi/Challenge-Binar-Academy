function checkTypeNumber(givenNumber){
    let hasil;
    if(Number.isInteger(givenNumber)){
      if(givenNumber%2===0){
        return hasil="genap"
  } 
      else if(givenNumber %2==1){
        return hasil="ganjil"
      }
    } else {
      return hasil = 'Tipe data salah'
    }
  }
  
  console.log(checkTypeNumber(10))
  console.log(checkTypeNumber(3))
  console.log(checkTypeNumber("3"))
  console.log(checkTypeNumber({}))
  console.log(checkTypeNumber([]))
  console.log(checkTypeNumber())