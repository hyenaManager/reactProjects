import { useState } from "react";
import "./App.css";
import Add from "./components/actions";
import Task from "./components/tasks";
import myData from "./components/data";
let Id = 2;
function App() {
  const [datas, setDatas] = useState(myData);
  function onCheckChange(checked, taskId) {
    setDatas(
      datas.map((data) => {
        if (taskId === data.id) {
          return { ...data, done: checked };
        }
        return data;
      })
    );
  }
  function onDelete(taskId) {
    setDatas(datas.filter((data) => data.id !== taskId));
  }
  function onAdd(task) {
    if (task === "") {
      return;
    }
    Id++;
    setDatas((datas) => [...datas, { todo: task, done: false, id: Id }]);
  }
  const allDone = datas.find((data) => data.done === false);
  console.log(allDone);
  return (
    <>
      <div className="container-fluid shadow-lg rounded todoApp ">
        <div className="heading">
          <h2 className="head">Todo List</h2>
        </div>
        <Add onAdd={onAdd} />
        <Task
          initialData={datas}
          onCheckChange={onCheckChange}
          onDelete={onDelete}
        />
      </div>
    </>
  );
}

export default App;
