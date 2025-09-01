import React from 'react';

export default function Blog() {
  return (
    <section style={{ padding: "2rem" }}>
      <h2>My Blog</h2>

      <article style={{ marginBottom: "2rem" }}>
        <img 
          src="/Gleyncs3.jpg" 
          alt="Gleyn Masota" 
          style={{ width: "150px", borderRadius: "50%", marginBottom: "1rem" }} 
        />
        <h3>Hello Everyone!</h3>
        <p>
          Hi, I&apos;m Gleyn Masota and welcome to my blog. Here, I&apos;ll be sharing my 
          thoughts, ideas, and experiences as I continue learning and exploring 
          new things. Stay tuned for more updates!
        </p>
      </article>

      <article style={{ marginBottom: "2rem" }}>
        <h3>My Journey in Learning React</h3>
        <p>
          Learning React has been an exciting challenge. I started with the basics 
          of components, props, and state, and I&apos;m slowly building real projects. 
          Every step feels like progress toward becoming a better developer.
        </p>
      </article>

      <article>
        <h3>Future Goals</h3>
        <p>
          My goal is to improve my coding skills and work on projects that can 
          help other people. I believe consistent practice and curiosity will 
          open more opportunities in the future.
        </p>
      </article>
    </section>
  );
}
