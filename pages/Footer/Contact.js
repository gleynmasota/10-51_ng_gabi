import React from 'react';

export default function Contact() {
  return (
    <section style={{ padding: "2rem", background: "#eee" }}>
      <h2>Contact Me</h2>
      <form>
        <input type="text" placeholder="Enter your name" /><br /><br />
        <input type="email" placeholder="Enter your email" /><br /><br />
      <p>Note: The message is optional</p>  
        <textarea placeholder= "You can message me"></textarea><br /><br />
        <button type="submit">Send</button>
      </form>
    </section>
  );
}
