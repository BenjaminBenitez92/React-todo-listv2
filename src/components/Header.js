import Button from "./Button"

const Header = ({onClick, showAddTask}) => {
    const text = showAddTask? 'close': 'Add'
  return (
    <header className="header">
       <h1>TO-DO LIST</h1> 
        <Button 
        color={showAddTask? 'steelblue':'green'}
        onClick={onClick}>
        {text}
        </Button>
    </header>
  )
}

export default Header
