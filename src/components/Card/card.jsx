const Card = ({ dateForm }) => {
  console.log(dateForm.userName);
  return (
    <>
      <h1> Agora vem o card </h1>
      <p> {dateForm.userName}</p>
    </>
  );
};

export default Card;
