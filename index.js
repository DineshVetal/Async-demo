console.log("Before")

// getUser(1)
//  .then(user => getRepositories(user.gitHubUserName))
//  .then(repos => getCommits(repos[0]))
//  .then(commits => console.log(commits))
//  .catch(err => new Error(err.message))

async function diaplayCommits(){
    try{
        const user = await getUser(1)
        const repos = await getRepositories(user.gitHubUserName)
        const commits = await getCommits(repos[0])
        console.log(commits)
    }
    catch(err){
        console.log('error' , err.message)
    }
}

diaplayCommits()

console.log("After")

function getUser (id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Reading a user from database...')
            resolve({ id :  id , gitHubUserName : 'Sam'})
        }, 2000)
    })
}

function getRepositories (username) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=> {
            console.log('Calling GitHub Api...')
            resolve([ 'repo1', 'repo2', 'repo3'])
        },2000)
    })
}
function getCommits (repo) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=> {
            console.log('Calling GitHub Api...')
            resolve([ 'commit'])
            // reject( new Error('could not get'))
        },2000)
    })
}