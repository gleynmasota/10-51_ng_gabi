import Navbar from './Navbar'
import Footer from './Footer'
import Hero from './Navbar'
export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Hero />
     
      <main>{children}</main>
      <Footer />
    </>
    
  )
}