// middleware nomeado >> nesse caso ele é injetado na pagina em questão com a propriedade middleware: 'auth'
export default ({ redirect }) => {
  console.log("auth midd");

  const loggedIn = false;

  if (!loggedIn) {
    return redirect("/");
  }
};
