import { Button } from 'components';
import PropTypes from 'prop-types';

export const Todo = ({data, checkTodo, deleteTodo}) => {
  return(
    <div className='App__footer__todo'>
      <div className={`App__footer__todo__title ${data.checked && "todo-done"}`}>{data.title}</div>
      <div className='App__footer__todo__actions'>
        <Button type='success' text="✅" Click={() => checkTodo(data)}/>
        <Button type='warning' text="❌" Click={() => deleteTodo(data.id)}/>
      </div>
    </div>
  );
}

Todo.prototype = {
  data: PropTypes.object.isRequired,
  checkTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
}