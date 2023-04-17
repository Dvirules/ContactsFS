const express = require('express');
const router = express.Router();
const allContacts = require('../Contacts/contactsDB');

router.get('/contacts', (req, res) => {
    try {
        res.status(200);
        res.send(allContacts);
    }
    catch (error) {
        console.log(`Hold on! You've got an error: ${error}`);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.post('/addContact', (req, res) => {
    try {
      const newContact = req.body;
      let id = 1;
      for (let i = 0; i < allContacts.length; i++) {
        if (id === allContacts[i].id) {
          id++;
          i = -1;
        }
      }
      newContact.id = id;
      newContact.image = "new added contact.jpg";
      allContacts.push(newContact);
      res.status(201);
      res.send(allContacts);
    }
    catch (error) {
      console.log(`Hold on! You've got an error: ${error}`);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  router.put('/modifyContact/:id', (req, res) => {
    try {
      const id = req.params.id;
      const newContactData = req.body;
      const chosenContactObjToModify = allContacts.find(contactObj => contactObj['id'] == id);
      for (const [key, value] of Object.entries(newContactData)) {
        if (value.length > 0 && chosenContactObjToModify[key] !== undefined)
          chosenContactObjToModify[key] = value;
      }
      res.status(201);
      res.send(allContacts);
    }
    catch (error) {
      console.log(`Hold on! You've got an error: ${error}`);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

  router.delete('/deleteContact/:id', (req, res) => {
    try {
      const id = req.params.id;
      const chosenContactObjToDelete = allContacts.find(contactObj => contactObj['id'] == id);
      allContacts.splice(allContacts.indexOf(chosenContactObjToDelete), 1);
      res.status(201);
      res.send();
    }
    catch (error) {
      console.log(`Hold on! You've got an error: ${error}`);
      res.status(500).json({ message: 'Internal server error' });
    }
  });


module.exports = router;