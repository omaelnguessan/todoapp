import { useState } from "react";
import styles from "./Form.style.js";
function Form(props) {
  let [todo, setTodo] = useState("");
  return (
    <div>
      <input
        style={styles.inputField}
        placeholder="Entrez la tâche"
        value={todo}
        onChange={(event) => setTodo(event.target.value)}
      />
      <button
        style={styles.submitButton}
        onClick={() => {
          props.addTodo(todo);
          setTodo("");
        }}
      >
        Ajouter
      </button>
    </div>
  );
}

export default Form;
