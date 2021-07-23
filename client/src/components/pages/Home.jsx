import React from 'react';
import ContactForm from '../contacts/ContactForm';
import Contact from '../contacts/Contacts';
import ContactFilter from '../contacts/ContactFilter';

const Home = () => {
  return (
    <div className='grid-2'>
      <div>
        <ContactForm />
      </div>
      <div>
        <ContactFilter />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
