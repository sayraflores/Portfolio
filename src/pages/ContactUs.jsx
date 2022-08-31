// import React from 'react'
// import { useRef } from 'react';
// import emailjs from '@emailjs/browser';

// const Contact = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm('service_ixofa6b', 'template_d6i2wfw', form.current, 'EIDVcZhPG01RSIT4g')
//       .then((result) => {
//         console.log(result.text);
//         alert('Submitted!')
//       }, (error) => {
//         console.log(error.text);
//       });
//   };
//   return (
//     <div>
//       <form ref={form} onSubmit={sendEmail}>
//         <label>Full Name</label>
//         <input type="text" name="user_name" />
//         <label>Email</label>
//         <input type="email" name="user_email" />
//         <label>Message</label>
//         <textarea name="message" />
//         <input type="submit" value="Send" />
//       </form>
//     </div>
//   )
// }

// export default Contact


import React from 'react'

const Contact = () => {
  return (
    <div>

<video autoPlay muted loop id="nstalgiaVideo">
<source src="images/nstalgia.MP4" type="video/mp4"></source>
 
</video>
    
<form className="my-form">
    <div className="form-group">
     <label>First Name</label>
     <textarea name="lastname"></textarea>
</div>
  

<div className="form-group">
     <label>Last Name</label>
     <textarea name="lastname"></textarea> 
 </div>
  
  

<div className="form-group">
      <label>Email</label>
     <textarea name="email"></textarea>
  </div>
  


<div  className="form-group">
      <label>Phone Number</label>
     <textarea name="phone number"></textarea>
  </div>



  <div className="form-group">
    
      <label>Message</label>
      <textarea name="message"></textarea>
  </div>
  
  <input type="submit" name="submit" value="Submit"></input>
    </form>
    

</div>



 
  )
}

export default Contact