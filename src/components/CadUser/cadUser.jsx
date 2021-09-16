import "./cadUser.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const CadUser = () => {
  // variável com as validações e erros
  const schema = yup.object().shape({
    userName: yup
      .string()
      .required("O nome de usuário obrigatório!")
      .max(18, "O cumprimento máximo é de 18 caracteres!"),
    email: yup
      .string()
      .required("O email é exigido!")
      .email("Verifique o formato de email!"),
    emailConfirmation: yup
      .string()
      .required("A confirmação do email é exigida!")
      .oneOf([yup.ref("email")], "os Emails devem ser iguais!"),
    password: yup
      .string()
      .required("A senha é exigida!")
      .min(3, "Cumprimento mínimo de 3 caracteres!"),
    passwordConfirmation: yup
      .string()
      .required("A confirmação da senha é exigida!")
      .oneOf([yup.ref("password")], "as senhas devem ser iguais!")
      .min(3, "Cumprimento mínimo de 3 caracteres!"),
    accepted: yup
      .string()
      .required("Aceite os termos de uso para se cadastrar!"),
  });
  // register e handleSubmit administram as variáveis do yup
  // errors vem yupResolver e administra validações e mensagens de erro
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmitFunction = (date) => {
    console.log("ao submeter form", date, date.userName);
  };
  return (
    <div className="cadUser">
      <h1> Cadastro de Usuário </h1>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <div>
          <input placeholder="Nome de usuário" {...register("userName")} />
          {errors.userName?.message && (
            <p className="erros">{errors.userName.message}</p>
          )}
        </div>
        <div>
          <input placeholder="Nome completo" {...register("fullName")} />
          {errors.fullName?.message && (
            <p className="erros">{errors.fullName.message}</p>
          )}
        </div>
        <div>
          <input placeholder="Endereço de Email" {...register("email")} />
          {errors.email?.message && (
            <p className="erros">{errors.email.message}</p>
          )}
        </div>
        <div>
          <input
            placeholder="Confirme seu Email"
            {...register("emailConfirmation")}
          />
          {errors.emailConfirmation?.message && (
            <p className="erros">{errors.emailConfirmation.message}</p>
          )}
        </div>
        <div className="doble">
          <div>
            <input placeholder="Senha" {...register("password")} />
            {errors.password?.message && (
              <p className="erros">{errors.password.message}</p>
            )}
          </div>
          <div>
            <input
              placeholder="Confirme sua senha"
              {...register("passwordConfirmation")}
            />
            {errors.passwordConfirmation?.message && (
              <p className="erros">{errors.passwordConfirmation.message}</p>
            )}
          </div>
        </div>
        <input type="checkbox" id="aceito" {...register("accepted")} />
        <span>Eu aceito os termos de uso da aplicação</span>
        {errors.accepted?.message && (
          <p className="erros">{errors.accepted.message}</p>
        )}
        <div>
          <button type="submit">Cadastrar</button>
        </div>
      </form>
    </div>
  );
};

export default CadUser;
