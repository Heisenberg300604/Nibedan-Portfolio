"use client"

import { useEffect } from 'react';
import SectionHeading from '@/components/Common/SectionHeading';
import ContactForm from '@/components/Contact/ContactForm';
import ContactInfo from '@/components/Contact/ContactInfo';

const Contact = () => {
  useEffect(() => {
    document.title = 'Contact | Nibedan Pati';
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-20 px-6">
      <div className="container mx-auto">
        <SectionHeading 
          title="Get in Touch" 
          subtitle="Have a question or want to work together? Feel free to contact me!"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </div>
  );
};

export default Contact;