import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import List from './components/List'
import Video from './components/Video'
import Form from './components/Form'


function App() {
  return (
    <>

    <Header />

        
    
    <main id="main">
        
         <List titulo={"Meu titulo 1"}/>


         <Video />

         <Form />
        
        

    </main>

    <Footer />
    
    </>
  )
}

export default App
