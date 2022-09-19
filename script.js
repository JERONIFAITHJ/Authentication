"use strict";


// User information
let userInfo = [];
userInfo.push({
  firstName: 'Jero',
  lastName: 'F',
  mail: 'jero@gmail.com',
  phone: '6382078248',
  password: '111111',
});

// Page validation
const goToSignupForm = () => {
  document.querySelector("#nav-signin").classList.add('displayed');
  document.querySelector("#nav-login").classList.remove('displayed');
  document.querySelector("#nav-home").classList.remove('displayed');

  document.querySelector("#signup-form").style.display = "block";
  document.querySelector("#login-form").style.display = "none";
  document.querySelector("#homePage").style.display = "none";
  document.querySelector("#main-content").style.display = "none";
};

const goToLogninForm = () => {
  document.querySelector("#nav-signin").classList.remove('displayed');
  document.querySelector("#nav-login").classList.add('displayed');
  document.querySelector("#nav-home").classList.remove('displayed');

  document.querySelector("#login-form").style.display = "block";
  document.querySelector("#homePage").style.display = "none";
  document.querySelector("#signup-form").style.display = "none";
  document.querySelector("#main-content").style.display = "none";
};

const homePage = () => {
  document.querySelector("#nav-signin").classList.remove('displayed');
  document.querySelector("#nav-login").classList.remove('displayed');
  document.querySelector("#nav-home").classList.add('displayed');

  document.querySelector("#login-form").style.display = "none";
  document.querySelector("#homePage").style.display = "block";
  document.querySelector("#signup-form").style.display = "none";
  document.querySelector("#main-content").style.display = "none";
};

const landingPage = (userNameDisplay) => {
  const welcomeText = document.querySelector('.nav-login');
  welcomeText.innerText = `Welcome ${userNameDisplay}`;
  welcomeText.style.fontSize = '30px'
  welcomeText.style.color = '#97c680';

  document.querySelector('#navBar').style.display = 'none';
  document.querySelector("#login-form").style.display = "none";
  document.querySelector("#homePage").style.display = "none";
  document.querySelector("#signup-form").style.display = "none";
  document.querySelector("#main-content").style.display = "block";
}

let encryptionMessage = {
  'A': 'N', 'B': 'O', 'C': 'P', 'D': 'Q',
  'E': 'R', 'F': 'S', 'G': 'T', 'H': 'U',
  'I': 'V', 'J': 'W', 'K': 'X', 'L': 'Y',
  'M': 'Z', 'N': 'A', 'O': 'B', 'P': 'C',
  'Q': 'D', 'R': 'E', 'S': 'F', 'T': 'G',
  'U': 'H', 'V': 'I', 'W': 'J', 'X': 'K',
  'Y': 'L', 'Z': 'M',
  'a': 'n', 'b': 'o', 'c': 'p', 'd': 'q',
  'e': 'r', 'f': 's', 'g': 't', 'h': 'u',
  'i': 'v', 'j': 'w', 'k': 'x', 'l': 'y',
  'm': 'z', 'n': 'a', 'o': 'b', 'p': 'c',
  'q': 'd', 'r': 'e', 's': 'f', 't': 'g',
  'u': 'h', 'v': 'i', 'w': 'j', 'x': 'k',
  'y': 'l', 'z': 'm',
  '0': '5', '1': '6', '2': '7', '3': '8',
  '4': '9', '5': '0', '6': '1', '7': '2',
  '8': '3', '9': '4',
  '!': '#', '$': '%', '&': '+', '-': '@',
  '': '~', '#': '!', '%': '$', '+': '&',
  '@': '-', '~': ''
}

const encryption = (password) => {
  let encryptedPassword = '';
  for(let val = 0; val < password.length; val++){
    encryptedPassword += encryptionMessage[password.at(val)];
  }
  return encryptedPassword;
}
const decryption = (password) => {
  let decryptedPassword = '';
  for(let index = 0; index < password.length; index++){
    decryptedPassword += Object.keys(encryptionMessage).find(val => encryptionMessage[val] === password.at(index));
  }
  return decryptedPassword;
}

const modalPopUp = (message) => {
  const { modalHead, modalBody } = message;
  document.querySelector("#modal").style.display = "block";
  document.querySelector("#modal-head").innerText = modalHead;
  document.querySelector("#modal-content").innerText = modalBody;
  document.querySelector("#modal-head").innerText === "Warning!"
    ? (document.querySelector("#modal-head").style.color = "#cf852d")
    : (document.querySelector("#modal-head").style.color = "green");
  const exitBtns = document.querySelectorAll(".exitBtn");
  exitBtns.forEach((val) => {
    val.addEventListener("click", function () {
      document.querySelector("#modal").style.display = "none";
    });
  });
  signInForm();
};

// Adding user information to the array
const addUserInfo = (info) => {
  const {
    firstNameValidation,
    lastNameValidation,
    mailValidation,
    phnoValidation,
    passValidation,
  } = info;
  if (userInfo.find((val) => val.mail === mailValidation)) {
    modalPopUp({ modalHead: "Warning!", modalBody: "User already exists!" });
    return;
  }
  modalPopUp({
    modalHead: "Success!",
    modalBody: "User registered successfully!",
  });
  userInfo.push({
    firstName: firstNameValidation,
    lastName: lastNameValidation,
    mail: mailValidation,
    phone: phnoValidation,
    password: encryption(passValidation),
  });
  signInForm();
  submitted = false;
};

// Reset signin form
const signInForm = () => {
  document.querySelector("#firstNameValidation").value = "";
  document.querySelector("#lastNameValidation").value = "";
  document.querySelector("#mailValidation").value = "";
  document.querySelector("#phnoValidation").value = "";
  document.querySelector("#passValidation").value = "";
  document.querySelector("#confirmPassValidation").value = "";

  document.querySelector("#firstNameValid").style.display = "none";
  document.querySelector("#lastNameValid").style.display = "none";
  document.querySelector("#mailValid").style.display = "none";
  document.querySelector("#phnoValid").style.display = "none";
  document.querySelector("#passValid").style.display = "none";
  document.querySelector("#confirmPassValid").style.display = "none";
}

// Sign in form validation
let submitted = false;

const signUpValidate = (isSubmitted = false) => {
  if (isSubmitted) {
    submitted = true;
  }
  let firstNameValidation = document.querySelector(
    "#firstNameValidation"
  ).value;
  let lastNameValidation = document.querySelector("#lastNameValidation").value;
  let mailValidation = document.querySelector("#mailValidation").value;
  let phnoValidation = document.querySelector("#phnoValidation").value;
  let passValidation = document.querySelector("#passValidation").value;
  let confirmPassValidation = document.querySelector(
    "#confirmPassValidation"
  ).value;
  let error = true;
  if (submitted) {
    if (firstNameValidation.length >= 3) {
      document.querySelector("#firstNameValid").style.display = "block";
      document.querySelector("#firstNameInvalid").style.display = "none";
    } else {
      document.querySelector("#firstNameValid").style.display = "none";
      document.querySelector("#firstNameInvalid").style.display = "block";
      error = false;
    }
    if (lastNameValidation.length >= 3) {
      document.querySelector("#lastNameValid").style.display = "block";
      document.querySelector("#lastNameInvalid").style.display = "none";
    } else {
      document.querySelector("#lastNameValid").style.display = "none";
      document.querySelector("#lastNameInvalid").style.display = "block";
      error = false;
    }
    if (
      mailValidation.includes("@") &&
      mailValidation.includes(".") &&
      !mailValidation.startsWith("@") &&
      mailValidation.length - mailValidation.lastIndexOf(".") > 2
    ) {
      document.querySelector("#mailValid").style.display = "block";
      document.querySelector("#mailInvalid").style.display = "none";
    } else {
      document.querySelector("#mailValid").style.display = "none";
      document.querySelector("#mailInvalid").style.display = "block";
      error = false;
    }
    let holdPhno = parseInt(phnoValidation);
    if (
      phnoValidation.length === 10 &&
      [...phnoValidation].every((val) => "1234567890".includes(val))
    ) {
      document.querySelector("#phnoValid").style.display = "block";
      document.querySelector("#phnoInvalid").style.display = "none";
    } else {
      document.querySelector("#phnoValid").style.display = "none";
      document.querySelector("#phnoInvalid").style.display = "block";
      error = false;
    }
    let passwordPassed = false;
    if (
      passValidation.length >= 6 &&
      [...passValidation].some((val) => "1234567890".includes(val))
    ) {
      document.querySelector("#passValid").style.display = "block";
      document.querySelector("#passInvalid").style.display = "none";
      passwordPassed = true;
    } else {
      document.querySelector("#passValid").style.display = "none";
      document.querySelector("#passInvalid").style.display = "block";
      error = false;
      passwordPassed = false;
    }
    if (confirmPassValidation === passValidation && passwordPassed) {
      document.querySelector("#confirmPassValid").style.display = "block";
      document.querySelector("#confirmPassInvalid").style.display = "none";
    } else {
      document.querySelector("#confirmPassValid").style.display = "none";
      document.querySelector("#confirmPassInvalid").style.display = "block";
      error = false;
    }
    if (error && isSubmitted) {
      addUserInfo({
        firstNameValidation,
        lastNameValidation,
        mailValidation,
        phnoValidation,
        passValidation,
      });
    }
  }
};

// Login Form Validation
const loginValidate = () => {
  let mail = document.querySelector('#logninMail').value;
  let pass = document.querySelector('#loginPass').value;

  let res = userInfo.find(val => val.mail === mail && decryption(val.password) === pass);
  if(res){
    const userNameDisplay = userInfo.find(val => val.mail === mail)
    landingPage(userNameDisplay.firstName);  
  }
  else{
    modalPopUp({modalHead: 'Warning!', modalBody: 'Login credentials mismatch!'});
  }
  resetLoginForm();
};

// Reset Login form 
const resetLoginForm = () => {
  document.querySelector('#logninMail').value = "";
  document.querySelector('#loginPass').value = "";
}

// Main Content
let defaultCard = document.querySelector('.card-one');
let defaultCardChild = defaultCard.children[0];
const cards = document.querySelectorAll('.cards');
cards.forEach(val => {
  val.addEventListener('mouseover', () => {
    defaultCard.classList.remove('active-image');
    defaultCardChild.classList.add('hide-head');
    val.classList.add('active-image');
    defaultCard = val;
    defaultCardChild = defaultCard.children[0];
    defaultCardChild.classList.remove('hide-head');
  })
});
