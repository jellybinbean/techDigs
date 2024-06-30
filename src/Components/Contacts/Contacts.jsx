import React from 'react'
import './contact.css'
import msg from '../../assets/msg-icon.png'
import phone from '../../assets/phone-icon.png'
import mail from '../../assets/mail-icon.png'
import location from '../../assets/location-icon.png'

const Contacts = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "807fb953-2193-42dc-a4b3-091d23b23d87");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="contact">
        <div className="contact-col">
            <h3>Send us a message <img src={msg} alt="" /></h3>
            <p>feel free to reach us out through contact form or find our contact information bellow
                .Your feedback, questions, and sssuggestions are important to us as we strive to 
                provide exceptiional services to our commmunity
            </p>
            <ul>
                <li><img src={mail}alt="" />Contact@digstech.dev</li>
                <li><img src={phone} alt="" />+254 712345678</li>
                <li><img src={location} alt="" /> 1074-50200 BUNGOMMA</li>
                
            </ul>


        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label htmlFor="">Your Name</label>
                <input type="text" name='name' placeholder="Enter Your  Name" required />
                <label htmlFor="">Phone Number</label>
                <input type="tel" name='phone' placeholder="Phone Number" required />
                <label htmlFor="">Write message here</label>
                <textarea name="message"  rows={6} placeholder='write your message here' required></textarea>
                <button type='submit' className='btn'>Submit Now</button>


            </form>
            <span>{result}</span>
        </div>
        
    </div>
  )
}

export default Contacts