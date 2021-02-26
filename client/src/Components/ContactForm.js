import React, {useState, useEffect} from 'react'
import axios from 'axios'
import '../CSS/ContactForm.css'

function ContactForm() {

    const [loader, setLoader] = useState(false)
    const [Name, setName] = useState('')
    const [Email, setEmail] = useState('')
    const [Message, setMessage] = useState('')
    const [Sent, setSent] = useState(false)

    const handlesubmit = (e)=>{
        e.preventDefault();
        setLoader(true)
        
        let data = {
            Name: Name,
            Email: Email,
            Message: Message
        }

        axios.post('/api/form', data)
        .then(res=>{
            setSent(true);
            resetForm();
        }).catch(()=>{
            console.log('Submit Failed');
        })
    }

    const resetForm = ()=>{
        setName('')
        setEmail('')
        setMessage('')
        
        setTimeout(()=>{
            setSent(false)
        }, 3000)
    }

    useEffect(() => {if(Sent)setLoader(false)}, [Sent])
    
    return (
        <form className='Contact-form' onSubmit={handlesubmit}>
            <h1>
                Contact Form
            </h1>

           <label>Name</label>
           <input placeholder='Name' input='text' value={Name} onChange={(e)=>{setName(e.target.value)}}/>

           <label>E-mail</label>
           <input placeholder='E-mail' input='email' value={Email} onChange={(e)=>{setEmail(e.target.value)}}/>

           <label>Message</label>
           <textarea placeholder='Message' input='text' value={Message} onChange={(e)=>{setMessage(e.target.value)}}></textarea>

            <button type='submit'>
                {loader ? "Sending..." : Sent ? "Sent ✔" : "Submit"}
            </button>

        </form>
    )
}

export default ContactForm
