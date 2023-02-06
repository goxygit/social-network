import { useForm } from "react-hook-form";
import { login } from "../../redux/reducer/authReducer.ts";
import { connect } from "react-redux";
import { withAuthRedirect } from "../common/withAuthRedirect";
import { Navigate } from "react-router-dom";
const OnLogin = (props) => {
  if(props.isAuth){
    return <Navigate to='/profile'/>
  }
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div style={{ width: "200px", height: "350px", backgroundColor: "blue" }}>
        <LoginForm login={props.login} />
      </div>
    </div>
  );
};
const LoginForm = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
    defaultValues: {
      post: "",
    },
  });
  const onSubmit = (data) => log(data);

  const log = (data) => {
    props.login(data.email, data.password, data.rememberMe);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="email"
        placeholder="kurwa text"
        {...register("email", {
          required: "Це поле є обов`язковим",
          pattern: {
            value:
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: "Please enter a valid email",
          },
        })}
      />
      {errors.email && <div>{errors.email.message}</div>}
      <input
        type="password"
        placeholder="kurwa text"
        {...register("password", {
          required: "Це поле є обов`язковим",
          maxLength: {
            value: 16,
            message: "Максимальна кількість символів - 20",
          },
          minLength: { value: 8, message: "Мінімальна кількість символів - 8" },
        })}
      />
      {errors.password && <div>{errors.password.message}</div>}
      <input
        type="checkbox"
        placeholder="kurwa text"
        {...register("rememberMe")}
      />
      <input type="submit" />
    </form>
  );
};
const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};
export default connect(mapStateToProps, { login })(OnLogin);
