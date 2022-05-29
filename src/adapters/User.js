const loginData = (values) => {
  return {
    email: values.email,
    password: values.password,
  }
}

module.exports = {
  loginData,
}