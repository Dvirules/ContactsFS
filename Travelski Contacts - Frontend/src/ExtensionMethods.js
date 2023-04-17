const extensionMethods = {

    validatePhone(phoneNumber) {
        let isValid = true;
        for (let i = 0; i < phoneNumber.length; i++) {
            if (phoneNumber[i] !== '(' && phoneNumber[i] !== ')' && phoneNumber[i] !== '+' && isNaN(phoneNumber[i])) {
                isValid = false;
                break;
            }
        }
        return isValid;
    },

}
  
  export default extensionMethods;
  