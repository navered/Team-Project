async function handleRegister(event) {
  try {
    event.preventDefault();
    const email = event.target.email.value.toLowerCase();
    const password = event.target.password.value;
    const postInit = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    };

    const response = await fetch("/API/users/register", postInit);
    const { error } = await response.json(); // get data from server
    console.log(error);
    if (error) {
      alert(error.message);
      throw new Error(error);
    }
    window.location.href = "./login.html";
  } catch (error) {
    console.error(error.message);
  }
}
