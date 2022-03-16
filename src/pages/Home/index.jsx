import { connect } from "react-redux";
import Form from "../../components/Form";
import Item from "../../components/Item";
import { addTask, completeTask, deleteTask } from "../../redux/actions";
import styles from "./Home.style.js";

function Home(props) {
  const { addTodo, taskItems, deleteTodo, completeTodo } = props;
  return (
    <div style={styles.appContainer}>
      <div style={styles.container}>
        <h1 style={styles.title}>Todo App</h1>
        <div style={styles.inputWrapper}>
          <Form
            addTodo={(task) => {
              addTodo(task);
            }}
          />
          <hr style={styles.seperator} />
        </div>
        {taskItems.map((task, index) => {
          return (
            <Item
              key={index}
              task={task}
              deleteTodo={(task) => {
                deleteTodo(task);
              }}
              completeTodo={(task) => {
                completeTodo(task);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  taskItems: state.taskItems,
});

const mapDispatchToProps = (dispatch) => ({
  addTodo: (task) => dispatch(addTask(task)),
  completeTodo: (task) => dispatch(completeTask(task)),
  deleteTodo: (task) => dispatch(deleteTask(task)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
