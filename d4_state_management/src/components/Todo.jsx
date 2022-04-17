import { useState } from "react";
import { TodoInput } from "./TodoInput";
import { TodoItem } from "./TodoItem";
import { nanoid } from "nanoid";

function Todo() {
  const [todosList, setTodosList] = useState([]);

  const getData = (todo) => {
    // console.log("Received", todo);
    // setTodosList([...todosList, todo]);
    //-----------
    const payload = {
      title: todo,
      status: false,
      id: nanoid(5),
    };
    setTodosList([...todosList, payload]);
    //-----------
  };

  // find this id from todosList
  // toggle it's status
  // get new array, set it again
  const handleStatus = (id) => {
      console.log("id:", id);
      
// Method - I
    const newarr = todosList.map((e) => {
      if (e.id === id) {
        return {
          ...e,
          status: !e.status,
        };
      }
      return e;
    });

    setTodosList(newarr);

// Method - I
      
    //   setTodosList(
    //       todosList.map((e) => (e.id === id ? { ...e, status: !e.status } : e))
    //   );
  };
  return (
    <div>
      <TodoInput getData={getData} />
      {todosList.map((e) => (
        <TodoItem handleStatus={handleStatus} todo={e}></TodoItem>
      ))}
    </div>
  );
}

export { Todo };
