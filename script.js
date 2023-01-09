const myPromise = new Promise((resolve, reject) =>{
    const nome = 'Nilson'

    if(nome === 'Nilson'){
        resolve('Usuário Nilson encontrado')
    }else{
        reject('O usuário Nilson não foi encontrado')
    }
})
    myPromise.then((data) => {
        console.log(data)
    })


// Encadeamento de Then's

const myPromise2 = new Promise((resolve, reject) =>{
    const nome = 'Nilson'

    if(nome === 'Nilson'){
        resolve('Usuário Nilson encontrado')
    }else{
        reject('O usuário Nilson não foi encontrado')
    }

})
    myPromise2.then((data) => {
        return data.toUpperCase()
    }).then((stringModificada) =>{
        console.log(stringModificada)
})

//Retorno Catch

const myPromise3 = new Promise((resolve, reject) =>{
    const nome = 'João'

    if(nome === 'Nilson'){
        resolve('Usuário Nilson encontrado')
    }else{
        reject('O usuário Nilson não foi encontrado')
    }

})
    myPromise3.then((data) => {
        
        console.log(data)
    }).catch((err) =>{
        console.log(`Aconteceu um erro: ${err} `)
    })
    
    // Resolver várias promessas

    const p1 = new Promise((resolve, reject) =>{
        setTimeout(() =>{

            resolve("P1 ok")    
        }, 2000) 
    })

    const p2 = new Promise((resolve, reject) =>{
        resolve("P2 ok")    
    })

    const p3 = new Promise((resolve, reject) =>{
        resolve("P3 ok")    
    })

    const resolveAll = Promise.all([p1, p2, p3]).then((data) => {
        console.log(data)
    })

    // Resolver promessas com race (retorna apenas o primeiro a ser resolvido)

    const p1Race = new Promise((resolve, reject) =>{
        setTimeout(() =>{

            resolve("P1 ok")    
        }, 2000)
    })

    const p2Race = new Promise((resolve, reject) =>{
        resolve("P2 ok")    
    })

    const p3Race = new Promise((resolve, reject) =>{
        resolve("P3 ok")    
    })

    const resolveAllRace = Promise.race([p1Race, p2Race, p3Race]).then((data) => {
        console.log(data)
    })  
    
    //Fetch request na API do GitHub
    //Fetch API

    const userName = 'NilsonPagnez'

    fetch(`https://api.github.com/users/${userName}`,{
        method: 'GET',
        headers:{
            Accept: 'application/vnd.github.v3+json',

        },
    }).then((response) =>{
        console.log(typeof response)
        console.log(response)
        return response.json()
    }).then((data) =>{
        console.log(data)
        console.log(data.name)
        console.log(data.location)
        console.log(dat) //gerando erro
    }).catch((err)  => {
        console.log(`Houve algum erro: ${err}`)
    })

