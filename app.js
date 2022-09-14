const inputEl = document.querySelector('.email-el');
const errorEl = document.querySelector('.error-el');
const btnSubmit = document.querySelector('.btn-submit');
const successEl = document.querySelector('.success-el');
const imgError = document.querySelector('.img-error');
const inputEmail = document.querySelector('.input-email');
// console.log(inputEl);
// function validateEmail() {
//  const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//  if(inputEl.value.match(mailFormat));
//  {
//     alert("valid email address");
//     return true;
//  }  else {
//     errorEl.classList.add('error-el')
//     return false
//  }

// }
console.log(inputEl)

btnSubmit.addEventListener('click', () => {
    validateEmail()
    inputEl.value = ""
    setTimeout(() => {
   
        errorEl.style.display = 'none';
        imgError.style.display = 'none';
        inputEl.style.borderColor = 'hsl(0, 36%, 70%)';
      
      }, 2000); 

      setTimeout(() => {
      successEl.style.display = 'none'
    }, 3000)
    
})


function validateEmail(inputText)
{
const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputEl.value.match(mailformat))
{
    successEl.style.display = 'block';

return true;
}
else if(inputEl.value === "") {
    errorEl.style.display = 'block';
    imgError.style.display = 'inline';
    inputEl.style.borderColor = 'hsl(0, 93%, 68%)';
    return true

} else if(inputEl.value > 1) {
    errorEl.style.display = 'none';
    return true
}
else
{
errorEl.style.display = 'block';
imgError.style.display = 'inline';
inputEl.style.borderColor = 'hsl(0, 93%, 68%)';
return false
}
}