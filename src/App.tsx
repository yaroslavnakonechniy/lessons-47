import './App.css'
import RegistrationForm from './components/form/Form'
import RegistrationFormOnHookForm from './components/formOnHookForm/Form'

function App() {

  return (
    <>  <p>Formik</p>
        <RegistrationForm />
        <p>React Hoor Form</p>
        <RegistrationFormOnHookForm />
    </>
  )
}

export default App
