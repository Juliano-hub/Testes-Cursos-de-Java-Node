// Async / Await

const asyncTimer = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(12345)
    }, 1000)
})

const simpleFunc = async () =>{
    // throw new error('Erro')

    // ----- SEQUENCIAL ----- 
    // vai esperar a promise se resolver por conta do await
    const data = await asyncTimer()
    console.log(data)

    const dataJSON = await fetch('/data.json').then(resStream =>
        resStream.json()
        )

    // ----- PARALELO ----- 
    //const data = await Promise.all([
    //    asyncTimer(),
    //    fetch('/data.json').then(resStream => resStream.json())
    //    ])

    return data
}

simpleFunc()
    .then(data =>{
        console.log(data)
    })
    .catch(err =>{
        console.log(err)
    })






// Fetch
fetch('/data.json').then(responseStream =>responseStream.json().then(data =>{
        console.log(data)
    })).catch(err =>{
        console.log('Erro de rede:', err)
    })