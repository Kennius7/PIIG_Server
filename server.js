const dotenv = require("dotenv");
const express = require("express");
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require("path");
const { getDoc, doc, setDoc } = require('firebase/firestore');
const { db } = require("./FirebaseConfig");


dotenv.config();
const app = express();
app.use(cors());
const PORT = process.env.PORT;
app.use(express.json());
app.use(express.static(path.join(__dirname, "build")));


app.get("/test", (req, res)=>{
  res.status(200).json({success: true, msg: "Test Checked"});
})

// API endpoint to serve countdown data
app.get('/countdown', async (req, res) => {
  const getDateRef = doc(db, "Current-Date", "date_document");
  const fetchDateData = await getDoc(getDateRef);
  if (fetchDateData.data().date) {
    res.status(200).json({ success: true, date: fetchDateData.data().date.toString() });
  } else {
    res.status(404).json({ success: false, msg: "Date not found" });
  }
});

app.post('/countdown', async (req, res)=>{
  const updatedDate = req.body.date;
  await setDoc(doc(db, "Current-Date", "date_document"), { date: updatedDate })
  .then(()=>{
    res.status(200).json({ success: true, msg: "Date Updated Successfully" })
  })
  .catch((error)=>{
    res.status(500).json({ success: false, msg: `Error updating Date: ${error}` })
  })
})

// Configure the email transport
const transporter = nodemailer.createTransport({
    service: 'gmail', // e.g., 'gmail'
    auth: {
      user: 'shosanacodemia@gmail.com',
      pass: 'mgkr dhey vfry zdrc',
    },
    tls: {
      rejectUnauthorized: false, // Bypass SSL certificate validation
    },
  });


// Handle POST request to send email with attachment
app.post('/send-email', (req, res) => {
    const formData = req.body;
    console.log(formData);
    const subject = "PIIG Seat Reservations";
    const htmlEmail = `
      <html>
          <body>
          <p>${formData.fullName} just booked a seat for the oncoming Sunday service.</p>
          <p>His/Her WhatSapp number is: ${formData.number}</p>
          <p>His/Her address is: ${formData.address}</p>
          </body>
      </html>
    `;

    const mailOptions = {
      from: 'shosanacodemia@gmail.com',
      to: 'shosanacodemia@gmail.com',
      subject: subject,
      html: htmlEmail,
    }
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
        res.status(500).json({ 
          success: false, 
          timeoutMessage: "Error: Request Timed Out. Check your network and try again.",
          errorMessage: "Error: Registration Failed.",
        });
      } else {
        console.log('Email sent: ' + info.response);
        res.status(200).json({ 
          success: true, 
          emailMessage: 'Email sent successfully', 
          formMessage: 'Registration successful.'
        });
      }
    });
  });

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});




// {
//   "from": "shosanacodemia@gmail.com",
//   "to": "shosanacodemia@gmail.com",
//   "subject": "Testing",
//   "html": "Hello All!"
// }



// {
//   "fullName": "Kennius Boggs",
//   "address": "30, Kingsway Road, Lagos",
//   "number": "07030602994"
// }

