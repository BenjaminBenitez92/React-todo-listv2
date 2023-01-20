const List = ({list}) => {
    const renderList = list.map((todo) =>{
        return <div key={todo.id}>{todo.title}</div>
    })
  return <div>
    {renderList}
  </div>;
};

export default List;
