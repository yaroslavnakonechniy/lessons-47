import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import style from "../form/form.module.css";
import { RegistrationSchema } from "../form/Form";

export const RegistrationFormOnHookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(RegistrationSchema),
  });

  const onSubmit = (data: any) => {
    console.log("Дані форми:", data);
    alert("Реєстрація успішна!");
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
      
      <div className={style.input}>
        <label className={style.label}>Ім'я</label>
        <input {...register("name")} />
        {errors.name && (
          <div className={style.error}>{errors.name.message}</div>
        )}
      </div>

      <div className={style.input}>
        <label className={style.label}>Прізвище</label>
        <input {...register("lastName")} />
        {errors.lastName && (
          <div className={style.error}>{errors.lastName.message}</div>
        )}
      </div>

      <div className={style.input}>
        <label className={style.label}>Вік</label>
        <input type="number" {...register("age")} />
        {errors.age && (
          <div className={style.error}>{errors.age.message}</div>
        )}
      </div>

      <div className={style.input}>
        <label className={style.label}>Посади</label>
        <label>
          <input type="checkbox" value="admin" {...register("roles")} />
          Admin
        </label>
        <label>
          <input type="checkbox" value="manager" {...register("roles")} />
          Manager
        </label>
        <label>
          <input type="checkbox" value="developer" {...register("roles")} />
          Developer
        </label>
        <label>
          <input type="checkbox" value="tester" {...register("roles")} />
          Tester
        </label>
        {errors.roles && (
          <div className={style.error}>{errors.roles.message}</div>
        )}
      </div>

      <div className={style.input}>
        <label className={style.label}>Email</label>
        <input type="email" {...register("email")} />
        {errors.email && (
          <div className={style.error}>{errors.email.message}</div>
        )}
      </div>

      <div className={style.input}>
        <label className={style.label}>Пароль</label>
        <input type="password" {...register("password")} />
        {errors.password && (
          <div className={style.error}>{errors.password.message}</div>
        )}
      </div>

      <div className={style.input}>
        <label className={style.label}>Підтвердіть пароль</label>
        <input type="password" {...register("confirmPassword")} />
        {errors.confirmPassword && (
          <div className={style.error}>
            {errors.confirmPassword.message}
          </div>
        )}
      </div>

      <button type="submit">Зареєструватися</button>
    </form>
  );
};

export default RegistrationFormOnHookForm;