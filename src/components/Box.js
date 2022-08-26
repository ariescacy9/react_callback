import { useState } from "react";
import './Box.css';

function Box(props) {

  const [count, updateCount] = useState(0);

  function click() {
    props.boxClicked(props.id);
    updateCount(count + 1);
  }

  return(
    <div className ="box" onClick={() => click()}>
      <p> <h2>Box {props.id}</h2> </p>
      <p>Contador Hijo: <h3>{count}</h3> </p>
      <p>Diferencia con mi primer hermano: {count - props.brotherCount1}</p>
      <p>Diferencia con mi segundo hermano: {count - props.brotherCount2}</p>
    </div>
  );
}

export default Box;