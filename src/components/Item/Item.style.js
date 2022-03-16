const styles = {
  taskContainer: {
    justifyContent: "center",
    display: "flex",
    itemAlign: "center",
  },
  taskWrapper: {
    marginBottom: 12,
    width: "80%",
    textAlign: "center",
    alignSelf: "center",
    borderRadius: 4,
    display: "flex",
    justifyContent: "space-between",
    boxShadow: "0 10px 15px 15px rgba(0, 0, 0, 0.1)",
  },
  task: {
    textAlign: "right",
    TextDecoration: "none",
    paddingLeft: 20,
    fontSize: 20,
  },
  iconsWrapper: {
    paddingTop: 20,
  },
  completedIcon: {
    fontSize: 20,
    color: "springgreen",
  },
  deletedIcon: {
    fontSize: 20,
    paddingLeft: 10,
    paddingRight: 20,
    color: "red",
  },
  completedTask: {
    textAlign: "right",
    textDecoration: "line-through",
    paddingLeft: 20,
    fontSize: 20,
  },
};

export default styles;
