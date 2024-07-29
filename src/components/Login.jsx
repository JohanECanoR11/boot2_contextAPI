import { useContext } from "react";
import { Context } from "../context/Context";

export const Login = () => {

  // Extraemos user y setUser del contexto usando useContext
  const { user, setUser } = useContext(Context);

  // Método que se ejecuta al hacer clic en enviar en el formulario
  const saveData = e => {
    e.preventDefault();

    // Crear el objeto del usuario a partir de los datos del formulario
    let identified_user = {
      username: e.target.username.value,
      name: e.target.name.value,
      hone: e.target.phone.value
    }

    console.log(identified_user);

    // Actualizamos el estado del usuario
    setUser(identified_user);
  };

  return (
    <div>
      <h1 className="text-center">Login</h1>
      <form className="login" onSubmit = {saveData}>
        <input type="text" name="username" placeholder="username"/>
        <input type="text" name="name" placeholder="name"/>
        <input type="text" name="phone" placeholder="phone"/>
        <input type="submit" value="Enviar"/>
      </form>
    </div>
  )
}
