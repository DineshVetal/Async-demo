
async function notifyCustomer(){
    try {
        const customer = await getCustomer(1)
        console.log('customer: ', customer)
        if(customer.isGold) {
            const movies = await getTopMovies()
            console.log('top movies: ', movies)
            const email = await sendEmail(customer.email, movies)
            console.log('Email sent...')
        }
    }
    catch(err){
        console.log(err.message)
    }
}
notifyCustomer()

 

function getCustomer(id){
    return new Promise ((resolve,reject) =>{
        setTimeout(() => {
            resolve({
                id:1,
                name: 'sam',
                isGold: true,
                email: 'email'
            })
        },2000)
    })
}

function getTopMovies(){
    return new Promise ((resolve,reject) =>{
        setTimeout(()=> {
            resolve(['movie1', 'movie2'])
        },2000)
    })
}
   
function sendEmail(email,movies){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve()
        },2000)
    })
}

// getCustomer(1, (customer) => {
//     console.log('customer: ', customer)
//     if(customer.isGold) {
//         getTopMovies((movies) => {
//             console.log('top movies: ', movies)
//             sendEmail(customer.email, movies, () =>{
//                 console.log('Email sent...')
//             })
//         })
//     }
// })

// getCustomer(1)
//     .then(customer=>{
//         console.log('customer: ', customer)    
//         if(customer.isGold){
//             getTopMovies()
//                 .then(movies => {
//                     console.log('top movies: ', movies)
//                     sendEmail(customer.email, movies).then(email => {
//                         console.log('Email sent...')
//                     })
//                 })
//         }
//     })