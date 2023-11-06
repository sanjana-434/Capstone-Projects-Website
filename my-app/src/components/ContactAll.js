// ContactAll.js
import React from 'react';
import '../styles/ContactAll.css';

const ContactAll = () => {
  const contacts = [
    {
      rollNumber: '21PD01',
      name: 'ABINAYA V',
      email: '21pd01@psgtech.ac.in',
      linkedin: 'https://www.linkedin.com/in/johndoe'
    },
    {
      rollNumber: '21PD02',
      name: 'ASHERE JESWIN',
      email: '21pd02@psgtech.ac.in',
      linkedin: 'https://www.linkedin.com/in/janesmith'
    },
    {
        rollNumber: '21PD03',
        name: 'BENNY ABHISHEK M',
        email: '21pd03@psgtech.ac.in',
        linkedin: 'https://www.linkedin.com/in/benny-abhishek?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
    },
    {
        rollNumber: '21PD04',
        name: 'BHARATHI SHANKAR J',
        email: '21pd04@psgtech.ac.in',
        linkedin: 'https://www.linkedin.com/in/bharathishankar2107/'
    },
    {
        rollNumber: '21PD05',
        name: 'DHISHA C S',
        email: '21pd05@psgtech.ac.in',
        linkedin: 'https://www.linkedin.com/in/johndoe'
      },
      {
        rollNumber: '21PD06',
        name: 'DHIVYADHARSHINI B',
        email: '21pd06@psgtech.ac.in',
        linkedin: 'https://www.linkedin.com/in/janesmith'
      },
      {
          rollNumber: '21PD08',
          name: 'G S PRETHIKA',
          email: '21pd08@psgtech.ac.in',
          linkedin: 'https://www.linkedin.com/in/johndoe'
      },
      {
          rollNumber: '21PD09',
          name: 'HARINI K R',
          email: '21pd09@psgtech.ac.in',
          linkedin: ''
      } ,
      {
        rollNumber: '21PD10',
        name: 'HARINI K V',
        email: '21pd10@psgtech.ac.in',
        linkedin: 'https://www.linkedin.com/in/johndoe'
      },
      {
        rollNumber: '21PD11',
        name: 'HARISH R',
        email: '21pd11@psgtech.ac.in',
        linkedin: 'https://www.linkedin.com/in/harish-r-3a8855227/'
      },
      {
          rollNumber: '21PD12',
          name: 'HARSHINI T S',
          email: '21pd12@psgtech.ac.in',
          linkedin: 'https://www.linkedin.com/in/johndoe'
      },
      {
          rollNumber: '21PD13',
          name: 'JAGADEESH E',
          email: '21pd13@psgtech.ac.in',
          linkedin: 'https://www.linkedin.com/in/janesmith'
      },
      {
          rollNumber: '21PD14',
          name: 'JAISUBASRI K',
          email: '21pd14@psgtech.ac.in',
          linkedin: 'https://www.linkedin.com/in/johndoe'
        },
        {
          rollNumber: '21PD16',
          name: 'KAIF SHAHEEM J',
          email: '21pd16@psgtech.ac.in',
          linkedin: 'https://www.linkedin.com/in/janesmith'
        },
        {
            rollNumber: '21PD17',
            name: 'KAMAL NITHISH P',
            email: '21pd17@psgtech.ac.in',
            linkedin: 'https://www.linkedin.com/in/johndoe'
        },
        {
            rollNumber: '21PD18',
            name: 'KANISHKA K',
            email: '21pd18@psgtech.ac.in',
            linkedin: 'https://www.linkedin.com/in/janesmith'
        },
        {
            rollNumber: '21PD19',
            name: 'KRITHIKA L',
            email: '21pd19@psgtech.ac.in',
            linkedin: 'https://www.linkedin.com/in/johndoe'
          },
          {
            rollNumber: '21PD20',
            name: 'M AISWARYA',
            email: '21pd20@psgtech.ac.in',
            linkedin: 'https://www.linkedin.com/in/janesmith'
          },
          {
              rollNumber: '21PD22',
              name: 'NILAVINI B M',
              email: '21pd22@psgtech.ac.in',
              linkedin: 'https://www.linkedin.com/in/johndoe'
          },
          {
              rollNumber: '21PD23',
              name: 'NITHISH R',
              email: '21pd23@psgtech.ac.in',
              linkedin: 'https://www.linkedin.com/in/johndoe'
          },
          {
              rollNumber: '21PD24',
              name: 'PARTHASARATHI S',
              email: '21pd24@psgtech.ac.in',
              linkedin: 'https://www.linkedin.com/in/janesmith'
          } ,
          {
            rollNumber: '21PD25',
            name: 'R AAYUSH SRIVATSAV',
            email: '21pd25@psgtech.ac.in',
            linkedin: 'https://www.linkedin.com/in/johndoe'
          },
          {
            rollNumber: '21PD26',
            name: 'R DHIKSHITHA',
            email: '21pd26@psgtech.ac.in',
            linkedin: 'https://www.linkedin.com/in/janesmith'
          },
          {
              rollNumber: '21PD27',
              name: 'RAJANEHA R',
              email: '21pd27@psgtech.ac.in',
              linkedin: 'https://www.linkedin.com/in/johndoe'
          },
          {
              rollNumber: '21PD28',
              name: 'ROHITH KRISHNA R',
              email: '21pd28@psgtech.ac.in',
              linkedin: 'https://www.linkedin.com/in/janesmith'
          },
          {
              rollNumber: '21PD29',
              name: 'SAI VIGNESH J',
              email: '21pd29@psgtech.ac.in',
              linkedin: 'https://www.linkedin.com/in/johndoe'
            },
            {
              rollNumber: '21PD30',
              name: 'SAMYUGTHA M',
              email: '21pd30@psgtech.ac.in',
              linkedin: 'https://www.linkedin.com/in/janesmith'
            },
            {
                rollNumber: '21PD31',
                name: 'SANJANA R',
                email: '21pd31@psgtech.ac.in',
                linkedin: 'https://www.linkedin.com/in/sanjana-rajasekaran/'
            },
            {
                rollNumber: '21PD32',
                name: 'SANJAY RAM R R',
                email: '21pd32@psgtech.ac.in',
                linkedin: 'https://www.linkedin.com/in/janesmith'
            },
            {
                rollNumber: '21PD33',
                name: 'SHARMILA J',
                email: '21pd33@psgtech.ac.in',
                linkedin: 'https://www.linkedin.com/in/johndoe'
              },
              {
                rollNumber: '21PD34',
                name: 'SHIVANI E',
                email: '21pd34@psgtech.ac.in',
                linkedin: 'https://www.linkedin.com/in/janesmith'
              },
              {
                  rollNumber: '21PD35',
                  name: 'SREENIDHI R',
                  email: '21pd35@psgtech.ac.in',
                  linkedin: 'https://www.linkedin.com/in/johndoe'
              },
              {
                  rollNumber: '21PD36',
                  name: 'SUBASH S',
                  email: '21pd36@psgtech.ac.in',
                  linkedin: 'https://www.linkedin.com/in/janesmith'
              },
              {
                rollNumber: '21PD37',
                name: 'V K DEEKSHA',
                email: '21pd37@psgtech.ac.in',
                linkedin: 'https://www.linkedin.com/in/janesmith'
              },
              {
                  rollNumber: '21PD38',
                  name: 'VAMSI KRISHNA U',
                  email: '21pd38@psgtech.ac.in',
                  linkedin: 'https://www.linkedin.com/in/vamsi-krishna-2b377b25b/'
              },
              {
                  rollNumber: '21PD39',
                  name: 'VARSHA S',
                  email: '21pd39@psgtech.ac.in',
                  linkedin: 'https://www.linkedin.com/in/janesmith'
              },
              {
                rollNumber: '20PD18',
                name: 'NAREN BALU S',
                email: '20pd18@psgtech.ac.in',
                linkedin: 'https://www.linkedin.com/in/naren-balu-s-0b1934249?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
            }
  ];

  return (
    <div className="contactAll-container">
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
