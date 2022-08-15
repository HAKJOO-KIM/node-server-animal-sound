const express = require('express')
var cors = require('cors')
const app = express()

app.use(cors())

app.get('/sound/:name', (req, res) => {
    const {name}= req.params

    if(name=="dog"){
    res.json({'sound': '강아지는 멍멍'})
  } else if(name=="cat"){
    res.json({'sound': '고양이는 야옹'})
  } else if(name=="pig"){
    res.json({'sound': '돼지는 꿀꿀'})
  }  else{
        res.json({'sound': '슈발!'})
    }
})
app.listen(3000)