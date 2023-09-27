async function handleAddUser(ev: any) {
  try {
    ev.preventDefault();
    const email = ev.target.email.value;
    const password = ev.target.password.value;

    const user = { email, password };
    if (!user.email || !user.password) throw new Error("missing some details");
    const response = await fetch("./API/users/register-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await response.json();

    console.log(data);
    // go to Log in page
    window.location.href = `./login.html`;
  } catch (error) {
    console.error(error);
  }
}
