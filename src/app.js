import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express())
app.use(express.json())

const users = []
const tweets = []


// Rota de tweets

app.get('/tweets', (req, res) => {

    const list = [] //Criando o "Banco de tweets"

    for(let i=0; i<tweets.length; i++){
        for(let j=0; j<users.length; j++){
            if(users[j].username === tweets[i].username){
                list.push({username:user[j].username, avatar: users[j].avatar, tweet: tweets[i].tweet})

            }
        }
    }

    const reverse_list = list.reverse()

    res.status(200).send(reverse_list.slice(0,10))
})


// Rota de cadastro
app.post('/sign-up', (req, res) => {

    const {username, avatar} = req.body

    users.push({username, avatar})
    res.status(200).send("ok")
})

// Rota de tweets
app.post('/tweets', (req, res) => {

    const {username, tweet} = req.body

    if(!username || !tweet){
        res.status(400).send("UNAUTHORIZED")
        return
    }


    tweets.push({username, tweet})
    res.status(200).send("ok")
})


app.listen(5000, () => console.log("App running in port 5000"))