import {
  useState,
  //useEffect
} from "react";
import { getTasksQuery } from "../queries/queries";
import { graphql } from "react-apollo";
import TaskDetails from './TaskDetails';

function TaskList(props) {
  const [state, setState] = useState({
    selected: null
  });

  function displayTasks() {
    console.log(props.data);
    var data = props.data;

    if (data.loading) {
      return ( <div> Loading tasks... </div>);
      }
      else {
        return data.tasks.map(task => {
            return ( <li key = {
                task.id
              }
              onClick = {
                (e) => {
                  setState({
                    selected: task.id
                  });
                }
              } > {
                task.title
              } </li>);
            })
        }
    }

  return (
    <div>
      <ul id="task-list">{displayTasks()}</ul>
      <TaskDetails taskId={state.selected}/>
    </div>
  );
}

export default graphql(getTasksQuery)(TaskList);
