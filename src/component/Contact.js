import React, {useState} from 'react';
import "./Contact.css";
import EmailImage from "../images/email.png";



function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [err, setErr] = useState("")
    const [formstatus, setFormstatus] = useState('');

    const formspreeMethod = (ev) => {
        ev.preventDefault();
        // console.log("All the Form data:", name, email, message);

        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
                if (xhr.status === 200) {
                    form.reset();
                    setFormstatus(xhr.status)
                    setErr("");
                   
                } else {
                    setFormstatus(xhr.status)
                    console.log(xhr.status, xhr.statusText)
                    setErr("Something Went Wrong!.Please try Again Later")
                }
        };
        xhr.send(data);
    }

    const validateForm = () => {
        return name.length > 0 && email.length > 0;
    }

  return (
    <div className='contact'>
        <h4>Let's Chat☕ </h4>
        
        <section className='contact__container'>
            <div className='contact__div'>
                <img className='contact__img' src={EmailImage} alt="Email Icon" />
                <a href='mailto:aoyetibo@gmail.com'>aoyetibo@gmail.com</a>
            </div>

            {formstatus !== 200 ? (
                <form className='contact__form' onSubmit={formspreeMethod} action="https://formspree.io/f/xyybrwkp" method="POST">
                    {err?.length === 0 ? '' : <p className="contact__errMsg">{err}</p>}
                    <input className='contact__input' required type="text" value={name} onInput={(e) => setName(e.target.value)} name='fullname' placeholder='Your Name' />
                    <input className='contact__input' required type="text" value={email} onInput={(e) => setEmail(e.target.value)} name='email-address' placeholder='Your Email' />

                    <textarea className='contact__textarea' name="msg-box" placeholder='Your Message' rows="5" cols="5" required value ={message} onInput={(e) => setMessage(e.target.value)} ></textarea>

                    <button className='button primary__button' value="Send" onClick={validateForm}>Send</button>
                </form>
            ):(
                <div>
                    <h4 className="contact__msg">Thank you for reaching out. I will get back to you as soon as Possible.</h4>
                </div>
            )}
            
        </section>
    </div>
  )
}

export default Contact