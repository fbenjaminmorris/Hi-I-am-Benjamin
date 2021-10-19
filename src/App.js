import React, { useState } from 'react';
import Nav from './Components/Nav';
import About from './Components/About';
import Gallery from './Components/Gallery';
import ContactForm from './Components/Contact';


function App() {
  const [categories] = useState([
  
    { name: 'Photography', description: 'Photos and art' },
    { name: 'Web Design', description: 'Webpage design' },
    
    
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            <Gallery currentCategory={currentCategory}></Gallery>
            <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}

export default App;