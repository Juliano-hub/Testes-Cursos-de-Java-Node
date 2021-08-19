// ---------------------------- Promisses
const doSomethingPromise = () => new myPromisse((resolve, reject) =>{
    setTimeout(function(){
        resolve('First data')
    }, 1000)

})

const doOtherPromise = () => new myPromisse((resolve, reject) =>{
    throw new Error('Something went wrong')
    setTimeout(function(){
        resolve('Second data')
    }, 1000)

})

// EXECUTA SEQUENCIAL
doSomethingPromise
    .then( data =>{ 
        console.log(data.split(''))
        return doOtherPromise() 
    })
    .then(data2 => console.log(data2.split('')))
    .catch( error => console.log('Opa', error))

// Pending
// Fulfilled
// Rejected


// EXECUTA PARALELO
Promise.all([doSomethingPromise(), doOtherPromise()]).then(data =>{
    console.log(data[0].split(''))
    console.log(data[1].split(''))
}).catch(err =>{
    console.log('Opa', error)
})





// ---------------------------- Callback
function doSomething(callback){
    setTimeout(function(){
        callback('First data')
    }, 1000)
}

function doOther(callback){
    setTimeout(function(){
        callback('Second data')
    }, 1000)
}

function doAll(){
        doSomething(function(data){
            var processedData = data.split('')
            
            doOtherThing(function(data2){
                var processedData2 = data.split('')
            
                setTimeout(function(){
                    callback(processedData, processedData2)
                }, 1000)
            
            })
        })
}

doAll()