import styles from "./Item.style.js";

function Item({ task, deleteTodo, completeTodo }) {
  return (
    <div>
      <div style={styles.taskContainer}>
        <div style={styles.taskWrapper}>
          <p style={task.completed ? styles.completedTask : styles.task}>
            {task.text}
          </p>
          <div style={styles.iconsWrapper}>
            <i
              className="fas fa-check-circle"
              style={styles.completedIcon}
              onClick={() => completeTodo(task.text)}
            ></i>
            <i
              className="fas fa-trash-alt"
              onClick={() => deleteTodo(task.text)}
              style={styles.deletedIcon}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
