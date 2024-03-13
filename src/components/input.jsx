const Input = ({ doClick }) => {
  const buttons = [];

  for (let index = 1; index < 10; index++) {
    buttons.push(
      <input className="button" type="button" key={index} value={index} onClick={() => doClick(index)} />
    );
  }
  buttons.push(
    <input className="button" type="button" key={0} value={0} onClick={() => doClick(0)} />
  );

  return <div>{buttons}</div>;
};



export default Input;
