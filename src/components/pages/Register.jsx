import * as React from 'react'
import { Link } from "react-router-dom";
import { Alert } from "../helpers/Alert";

export const Register = () => {

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [province, setProvince] = React.useState('');
  const [location, setLocation] = React.useState('');
  const [street, setStreet] = React.useState('');
  const [number, setNumber] = React.useState('');
  const [postalCode, setPostalCode] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [repeatPassword, setRepeatPassword] = React.useState('');
  const [alert, setAlert] = React.useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if ([name, email, province, location, street, number, postalCode, password, repeatPassword].includes('')) {
      setAlert({
        msg: 'Todos los campos son obligatorios',
        error: true
      })
      return
    }

    if (password !== repeatPassword) {
      setAlert({
        msg: 'Los contraseñas no son iguales',
        error: true
      })
      return
    }

    if (password.length < 6) {
      setAlert({
        msg: 'La contraseña tiene que tener 6 caracteres como minimo',
        error: true
      })
      return
    }

    setAlert({})

    // Crear usuario en la API
  }

  const { msg } = alert;

  return (
    <>
      <h1 className="text-orange-600 font-black text-6xl capitalize">
        Crear Cuenta en {''}
        <span className="text-slate-700">GoingOut</span>
      </h1>



      <form
        className="my-10 bg-white shadow rounded-lg p-10"
        onSubmit={handleSubmit}
      >

        <div className="my-5">
          <label
            className="uppercase text-gray-600 block text-xl font-bold"
            htmlFor="name"
          >
            Razon Social
          </label>
          <input
            id="name"
            type="text"
            placeholder='Razon Social'
            className='w-full mt-3 p-3 border rounded-xl bg-gray-50'
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>

        <div className="my-5">
          <label
            className="uppercase text-gray-600 block text-xl font-bold"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder='Email de Registro'
            className='w-full mt-3 p-3 border rounded-xl bg-gray-50'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div className="my-5">
          <label
            className="uppercase text-gray-600 block text-xl font-bold"
            htmlFor="province"
          >
            Provincia
          </label>
          <input
            id="province"
            type="text"
            placeholder='Provincia'
            className='w-full mt-3 p-3 border rounded-xl bg-gray-50'
            value={province}
            onChange={e => setProvince(e.target.value)}
          />
        </div>

        <div className="my-5">
          <label
            className="uppercase text-gray-600 block text-xl font-bold"
            htmlFor="location"
          >
            Locacion
          </label>
          <input
            id="location"
            type="text"
            placeholder='Locacion'
            className='w-full mt-3 p-3 border rounded-xl bg-gray-50'
            value={location}
            onChange={e => setLocation(e.target.value)}
          />
        </div>

        <div className="my-5">
          <label
            className="uppercase text-gray-600 block text-xl font-bold"
            htmlFor="street"
          >
            Calle
          </label>
          <input
            id="street"
            type="text"
            placeholder='Calle'
            className='w-full mt-3 p-3 border rounded-xl bg-gray-50'
            value={street}
            onChange={e => setStreet(e.target.value)}
          />
        </div>

        <div className="my-5">
          <label
            className="uppercase text-gray-600 block text-xl font-bold"
            htmlFor="number"
          >
            Numeracion
          </label>
          <input
            id="number"
            type="number"
            placeholder='Numeracion'
            className='w-full mt-3 p-3 border rounded-xl bg-gray-50'
            value={number}
            onChange={e => setNumber(e.target.value)}
          />
        </div>

        <div className="my-5">
          <label
            className="uppercase text-gray-600 block text-xl font-bold"
            htmlFor="cp"
          >
            Codigo Postal
          </label>
          <input
            id="cp"
            type="number"
            placeholder='Codigo Postal'
            className='w-full mt-3 p-3 border rounded-xl bg-gray-50'
            value={postalCode}
            onChange={e => setPostalCode(e.target.value)}
          />
        </div>

        <div className="my-5">
          <label
            className="uppercase text-gray-600 block text-xl font-bold"
            htmlFor="password"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder='Password de Registro'
            className='w-full mt-3 p-3 border rounded-xl bg-gray-50'
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        <div className="my-5">
          <label
            className="uppercase text-gray-600 block text-xl font-bold"
            htmlFor="password2"
          >
            Repetir Password
          </label>
          <input
            id="password2"
            type="password"
            placeholder='Repetir Password'
            className='w-full mt-3 p-3 border rounded-xl bg-gray-50'
            value={repeatPassword}
            onChange={e => setRepeatPassword(e.target.value)}
          />
        </div>

        <input
          type="submit"
          value="Crear Cuenta"
          className="bg-orange-600 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-orange-700 transition-colors"
        />

      </form>

      {msg && <Alert alert={alert} />}

      <nav className="lg:flex lg:justify-between">
        <Link
          className="block text-center my-5 text-slate-500 uppercase text-sm"
          to="/login"
        >
          ¿Ya tienes una Cuenta? Iniciar Sesion
        </Link>
        <Link
          className="block text-center my-5 text-slate-500 uppercase text-sm"
          to="passrecovery"
        >
          Olvide mi contraseña
        </Link>
      </nav>

    </>
  )
}
