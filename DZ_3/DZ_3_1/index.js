function generateEmail(domain) {
  const randomNumber = Math.floor(Math.random() * 100);
  return `test_user_${randomNumber}@${domain}`;
}


const maskPassword = function(password) {
  return '********';
};


const createTestUser = (name, domain) => {
  const email = generateEmail(domain);
  const password = maskPassword('any_string');
  
  return {
    userName: name,
    email: email,
    password: password
  };
  
};


console.log(createTestUser('QA_Ninja', 'gmail.com'));