import "./cadUser.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";

const CadUser = ({ setDateForm }) => {
  const history = useHistory();

  // variável com as validações e erros
  const schema = yup.object().shape({
    userName: yup
      .string()
      .min(5, "O tamanho mínimo é de 5 caracteres")
      .required("Escolha seu usuário!"),
    fullName: yup
      .string()
      .required("Esqueceu de preencher seu nome!")
      .max(18, "O tamanho máximo é de 18 caracteres!"),
    email: yup
      .string()
      .required("Precisamos saber seu email!")
      .email("Confira o preenchimento do email!"),
    emailConfirmation: yup
      .string()
      .required("Esqueceu de confirmar seu email!")
      .oneOf([yup.ref("email")], "os Emails devem ser iguais!"),
    password: yup
      .string()
      .required("Escolha uma senha segura!")
      .min(3, "O tamanho mínimo é de 3 caracteres!"),
    passwordConfirmation: yup
      .string()
      .required("Esqueceu de confirmar sua senha!")
      .oneOf([yup.ref("password")], "está diferente!")
      .min(3, "O tamanho mínimo é de 3 caracteres!"),
    accepted: yup
      .boolean()
      //não consegui usar os .bool(), .string()
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
    setDateForm(date);
    history.push("/card");
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
        <span> - Aceito os termos de uso da aplicação</span>
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
