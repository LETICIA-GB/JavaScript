

var promisse1 = new Promise((resolve, reject) =>{
    
    let nome = "ADM"
    let senha = "ADM"

    if (nome == "ADM" && senha == "ADM"){
        
        resolve("Seja bem vinda ADM")
    }else{
        
        reject("Usuario não é ADM")
    }
})

promisse1.then((x) => {
    console.log(x)
})

promisse1.catch((x) => {
    console.log(x)
})

