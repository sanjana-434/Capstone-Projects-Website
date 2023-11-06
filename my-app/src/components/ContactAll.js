import React from 'react';
import '../styles/ContactAll.css';

const ContactAll = () => {
  const contacts = [
    {
      rollNumber: '001',
      name: 'John Doe',
      email: 'john@example.com',
      linkedin: 'https://www.linkedin.com/in/johndoe'
    },
    {
      rollNumber: '002',
      name: 'Jane Smith',
      email: 'jane@example.com',
      linkedin: 'https://www.linkedin.com/in/janesmith'
    }
    // Add more contacts as needed
  ];

  return (
    <div>
      {contacts.map((contact, index) => (
        <div className="ContactAll" key={index}>
          <h2>{contact.name}</h2>
          <p>Roll Number: {contact.rollNumber}</p>
          <p>Email: {contact.email}</p>
          <p><a href={contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></p>
        </div>
      ))}
    </div>
  );
};

export default ContactAll;
