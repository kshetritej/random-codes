const express = require('express')
const app = express()
const port = 3000


const USERS =[{
  //default user
  userId:1,
  userName: tej,
  userPwd: tej23, 
} ];

const SUBMISSIONS = [{
  //submissionId: 1, 
  //submittedby: userId,
  //code: `some code here`
}];

const QUESTIONS = [
  {
    questionID: 1, 
    question: 'Write a simple express server',
  }
]

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/chat', (req, res) => {
  res.send(`
  <html>
  <body>
    <h1> chat </h1>
    </body>
    </html>
    `)
});

app.post('/login', (req,res) => {
  //logic for login 
})
app.post('/register', (req,res) => {
  //logic for register
  const username = req.body.username;
  const password = req.body.password;

  ///
})

app.get('/questions', (req, res) => {
  res.send('Questions will be shown here')
});

app.post('/submission', (req,res) => {
  const submission = req.body;
  SUBMISSIONS.apeend(submission);
  res.send('answer submitted successfully!')

})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
