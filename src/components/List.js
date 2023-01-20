const List = ({ list, Edit }) => {
  const renderList = list.map((todo) => {
    return (
      <div className="task" key={todo.id} onDoubleClick={() => Edit(todo.id)}>
        <h3>{todo.title}</h3>
      </div>
    );
  });
  return <div className="container">{renderList}</div>;
};

export default List;
