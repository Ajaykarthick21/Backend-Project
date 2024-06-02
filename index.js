import express from 'express'
const app = express()
import 'dotenv/config'

const port = process.env.PORT || 3000
app.get('/api/jokes',(req,res)=>{
const jokes = [
  {
    id: 1,
    title: "Why don't scientists trust atoms?",
    joke: "Because they make up everything!"
  },
  {
    id: 2,
    title: "How do you organize a space party?",
    joke: "You planet."
  },
  {
    id: 3,
    title: "Why did the scarecrow win an award?",
    joke: "Because he was outstanding in his field!"
  },
  {
    id: 4,
    title: "Why don't programmers like nature?",
    joke: "It has too many bugs."
  },
  {
    id: 5,
    title: "What do you get when you cross a snowman and a vampire?",
    joke: "Frostbite."
  }
];

    res.send(jokes)

})

app.get('/',(req,res)=>{
  res.send('<h1>Welcome to the world of mark antony mame</h1>')
})

app.listen(port,(req,res)=>{
    console.log(`Server is running in ${port}`)
})