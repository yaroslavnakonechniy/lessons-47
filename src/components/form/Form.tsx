import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string, number, array, ref } from 'yup';
import style from "./form.module.css"

export const RegistrationSchema = object().shape({
    name: string()
        .min(2, "Занадто коротке ім'я")
        .max(50, "Занадто довге ім'я")
        .required("Обов'язкове поле"),

    lastName: string()
        .min(2, "Занадто коротке LastName")
        .max(50, "Занадто довге LastName")
        .required("Обов'язкове поле"),

    age: number()
        .typeError('Вік має бути числом')
        .integer('Вік має бути цілим числом')
        .min(1, 'Вам має бути не менше 1 років')
        .max(100, 'Введіть реальний вік')
        .required('Вік є обов\'язковим'),
    roles: array()
        .of(string())
        .min(1, 'Оберіть хоча б одну посаду')
        .max(3, 'Можна обрати не більше 3 посад')
        .required('Це поле є обов’язковим'),

    email: string()
        .email('Неправильний формат електронної пошти')
        .required("Обов'язкове поле"),
        
    password: string()
        .min(8, 'Пароль повинен містити мінімум 8 символів')
        .required("Обов'язкове поле"),
    
    confirmPassword: string()
    .oneOf([ref('password')], 'Паролі мають збігатися')
    .required('Підтвердження пароля обов’язкове'),
});

export const RegistrationForm = () => {
  return (
    <Formik
      initialValues={{
        name: '',
        lastName: '',
        age: '',
        roles: [],
        email: '',
        password: '',
        confirmPassword: '',
      }}
      validationSchema={RegistrationSchema}
      onSubmit={(values, { resetForm }) => {
        console.log('Дані форми:', values);
        alert('Реєстрація успішна!');
        resetForm();
      }}
    >
      {() => (
        <Form className={style.form} >

          <div className={style.input}>
            <label className={style.label}>Ім'я</label>
            <Field name="name" />
            <ErrorMessage name="name" component="div" className={style.error} />
          </div>

          <div className={style.input}>
            <label className={style.label}>Прізвище</label>
            <Field name="lastName" />
            <ErrorMessage name="lastName" component="div" className={style.error} />
          </div>

          <div className={style.input}>
            <label className={style.label}>Вік</label>
            <Field name="age" type="number" />
            <ErrorMessage name="age" component="div" className={style.error} />
          </div>

          <div className={style.input}>
            <label className={style.label}>Посади</label>
            <div>
              <label>
                <Field type="checkbox" name="roles" value="admin" />
                Admin
              </label>
              <label>
                <Field type="checkbox" name="roles" value="manager" />
                Manager
              </label>
              <label>
                <Field type="checkbox" name="roles" value="developer" />
                Developer
              </label>
              <label>
                <Field type="checkbox" name="roles" value="tester" />
                Tester
              </label>
            </div>
            <ErrorMessage name="roles" component="div" className={style.error} />
          </div>

          <div className={style.input}>
            <label className={style.label}>Email</label>
            <Field name="email" type="email" />
            <ErrorMessage name="email" component="div" className={style.error} />
          </div>

          <div className={style.input}>
            <label className={style.label}>Пароль</label>
            <Field name="password" type="password" />
            <ErrorMessage name="password" component="div" className={style.error} />
          </div>

          <div className={style.input}>
            <label className={style.label}>Підтвердіть пароль</label>
            <Field name="confirmPassword" type="password" />
            <ErrorMessage name="confirmPassword" component="div" className={style.error} />
          </div>

          <button type="submit">Зареєструватися</button>

        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;