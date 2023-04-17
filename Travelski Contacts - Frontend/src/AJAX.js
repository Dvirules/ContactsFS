const myAjax = {

    AjaxGetAllContacts: () => {
      return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();
        request.open('GET', 'http://localhost:8080/contacts', true);

        request.onload = () => {
          if (request.status === 200)
            resolve(JSON.parse(request.responseText));
          else
            reject(new Error(`Request failed with status ${request.status}`));
        };

        request.onerror = () => {
          reject(new Error('Request failed'));
        };
        request.send();
      });
    },

    
    AjaxAddContact: (contactObj) => {
      return new Promise((resolve, reject) => {
      var request = new XMLHttpRequest();
      request.open("POST", 'http://localhost:8080/addContact', true);
      request.setRequestHeader("Content-Type", "application/json");

      request.onload = () => {
        if (request.status === 200 || request.status === 201)
          resolve(JSON.parse(request.responseText));
        else
          reject(new Error(`Request failed with status ${request.status}`));
      };

      request.onerror = () => {
        reject(new Error('Request failed'));
      };
      request.send(JSON.stringify(contactObj));
    });  
  },


    AjaxModifyContact: (contactObj, idToModify) => {
      return new Promise((resolve, reject) => {
      var request = new XMLHttpRequest();
      request.open("PUT", `http://localhost:8080/modifyContact/${idToModify}`, true);
      request.setRequestHeader("Content-Type", "application/json");

      request.onload = () => {
        if (request.status === 200 || request.status === 201)
          resolve(JSON.parse(request.responseText));
        else
          reject(new Error(`Request failed with status ${request.status}`));
      };

      request.onerror = () => {
        reject(new Error('Request failed'));
      };
      request.send(JSON.stringify(contactObj));
    });  
  },


    AjaxDeleteContact: (id) => {
      return new Promise((resolve, reject) => {
      var request = new XMLHttpRequest();
      request.open("DELETE", `http://localhost:8080/deleteContact/${id}`, true);
      request.setRequestHeader("Content-Type", "application/json");

      request.onload = () => {
        if (request.status === 200 || request.status === 201)
          resolve();
        else
          reject(new Error(`Request failed with status ${request.status}`));
      };

      request.onerror = () => {
        reject(new Error('Request failed'));
      };
      request.send();
    });  
  },

}
  
  export default myAjax;
  