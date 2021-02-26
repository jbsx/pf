require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

app.get('/', ()=>{
    res.send('')
})

app.post('/api/form', (req,res)=>{
    console.log(req.body);
    let data = req.body
    let smtpTransport = nodemailer.createTransport({
        service:'Gmail',
        port:465,
        auth:{
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });

    let mailOptions={
        from: data.Email,
        to: process.env.RECIPIENT_EMAIL,
        subject:`Message from ${data.Name}`,
        html:`
        
        <ul>
        <li>
            Mail From: ${data.Name}
        </li>
        <li>
            E-mail: ${data.Email}
        </li>

        <h3>Message</h3>
        <p>${data.Message}</p>

        </ul>

        `
    };

    smtpTransport.sendMail(mailOptions,(error, response)=>{
        if(error){
            res.send(error)
        }
        else {
            res.send('')
        }
    })

    smtpTransport.close();
    
})

    const PORT = process.env.PORT||3001;
    app.listen(PORT,()=>{
        console.log(`Server starting at PORT ${PORT}`);
    })