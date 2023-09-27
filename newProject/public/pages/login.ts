async function handleLogin(event) {
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

    const response = await fetch("/API/users/login", postInit);
    const { error, ok } = await response.json(); // get data from server
    console.log(error);
    if (ok) window.location.href = `../index.html?email=${email}`;
    if (error) {
      throw new Error(error);
    }
  } catch (error) {
    console.error(error.message);
  }
}
