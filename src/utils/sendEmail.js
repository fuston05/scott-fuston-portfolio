import emailjs from 'emailjs-com';

async function sendEmail(formValue, showMessage){
  let resMessage= '';
  const templateParams = {
    from_name: formValue.name,
    reply_to: formValue.email,
    message_html: formValue.message + 'Phone: ' + formValue.phone
  };

  await emailjs.send(
    process.env.REACT_APP_SERVICE_ID,
    process.env.REACT_APP_TEMPLATE_ID,
    templateParams,
    process.env.REACT_APP_USER_ID
  )
    .then(response => {
      // console.log('SUCCESS!', response.status, response.text);
      resMessage= 'Message Sent Successfully';
      showMessage && showMessage.classList.remove('hide');
      window.setTimeout(() => {
        showMessage && showMessage.classList.add('hide');
      }, 3000);
    }, err => {
      console.log('FAILED...', err);
      resMessage= 'Error Sending Message';
      showMessage && showMessage.classList.remove('hide');
      window.setTimeout(() => {
        showMessage && showMessage.classList.add('hide');
      }, 3000);
    })
    console.log('res from sendEmail: ', resMessage);
    return resMessage;
}//end sendEmail

export default sendEmail;