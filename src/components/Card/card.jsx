import "./card.css";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const Card = ({ dateForm }) => {
  const history = useHistory();
  console.log(dateForm);
  return (
    <div className="card">
      <h2> Bem vindo! </h2>
      <div id="layPhoto">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiMrhYcCGWBjgem5GQo6rkb6GSlbpmdnDMSSDh6keL9dIq7sZ3W1PKzWgvLby0y1nkojc&usqp=CAU"
          alt="foto"
        />
        <div>
          <p>
            <strong>Usuário:</strong> {dateForm.userName}
          </p>
          <p>
            <strong>Nome:</strong> {dateForm.fullName}
          </p>
          <p>
            <strong>Email:</strong> {dateForm.email}
          </p>
        </div>
      </div>
      <p>
        <strong>Usuário criado com sucesso!</strong>
      </p>
      <Link to="/">Voltar</Link>
    </div>
  );
};

export default Card;
