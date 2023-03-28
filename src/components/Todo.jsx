import { useState } from "react";
import CardList from "./CardList";
import {Box, Typography, Modal, TextField, Button} from "@mui/material";
//import { bgcolor } from "@mui/system";

const addNewTaskBarStyle = {
  padding: "20px",
  background: "#fefffe",
  width: { xs: "300px", md:"500px"},
  borderRadius: "10px",
  margin: "20px 0px",
  fontSize: "25px",
  color: "#7b7b7b",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
};

const wrapperTodoListStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "20px",
};

const wrapperHeaderStyle ={
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const headerTextStyle = {
  color: "#fefffb",
  fontSize: { xs: "50px", md: "60px"},
};

const headerTodoListLengthStyle = {
  padding: "20px 30px",
  backgroundColor: "#b0a3f5",
  boxShadow: " 0 4px 8px 0 rgba(0,0,0,0.2)",
  fontSize: "50px",
  borderRadius: "10px",
  color: "white",
  fontWeight: "bold",
};

const modalStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
};

const horizontalStyle = {
  width: "90%",
  backgroundColor: "white",
  boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
};

function Todo() {
  //state of modal
  const [open, setOpen] = useState(false);

  const [todo, setTodo] = useState([]);

  //state for validation
  const [todoInput, setTodoInput] = useState("");
  const [todoError, settodoError] = useState(true);
  //MOdal function
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  //handle Input
  function handleInput(e){
    setTodoInput(e.target.value);
    if(e.target.value === null || e.target.value === ""){
      settodoError(true);
    }else{
      settodoError(false);
    }
  }

  //handle Add button
  function handleAdd(){
    setTodo([...todo, todoInput]);
    setTodoInput("");
    settodoError(true);
    handleClose();
  }

  //handle Function
  // function handleAdd() {
  //   setTodo([...todo, "new task"])
  // }

  return (
    <>
    <Box sx={{ margin: "20px" }}>
      <div style={wrapperHeaderStyle}>
        <div>
          <Typography variant="h1" sx={headerTextStyle}>
            Incoming
          </Typography>
        </div>
        <div style={headerTodoListLengthStyle}>{todo.length}</div>
      </div>
      <Box sx={wrapperTodoListStyle}>
        <Box sx={addNewTaskBarStyle} onClick={handleOpen}>
        + Add New Tasks
      </Box>
      {/* Render Todo(s) into CardList */}
      {todo.map((item, index)=>{
        return (
          <CardList 
        todo={item}
        key={index}
        setState={setTodo}
        state={todo}
        />
        );
      })}
      </Box>
      <hr style={horizontalStyle} />
    </Box>
    <Modal 
        open ={open}
        onClose ={handleClose}
        aria-labelledby="modal-modal-title"
        aira-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <TextField
            error={todoError}
            id="todo"
            label="What do you want to do?"
            variant="outlined"
            onChange={(e)=>handleInput(e)}
          />
          <Button
            variant="contained"
            onClick={handleAdd}
            sx={{margin: "20px 0px 0px 0px"}}
            disabled={todoError}
          >
            Add
          </Button>
        </Box> 
    </Modal>
    </>
  );
}
export default Todo;