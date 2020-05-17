import emailjs from 'emailjs-com';

function sendEmail(formValue, showMessage){
  const templateParams = {
    from_name: formValue.name,
    reply_to: formValue.email,
    message_html: formValue.message + 'Phone: ' + formValue.phone
  };

  emailjs.send(
    process.env.REACT_APP_SERVICE_ID,
    process.env.REACT_APP_TEMPLATE_ID,
    templateParams,
    process.env.REACT_APP_USER_ID
  )
    .then(response => {
      // console.log('SUCCESS!', response.status, response.text);
      showMessage.classList.remove('hide');
      window.setTimeout(() => {
        showMessage.classList.add('hide');
      }, 3000);
      return 'Message Sent Successfully';
    }, err => {
      console.log('FAILED...', err);
      showMessage.classList.remove('hide');
      window.setTimeout(() => {
        showMessage.classList.add('hide');
      }, 3000);
      return 'Error Sending Message';
    })

}//end sendEmail

export default sendEmail;