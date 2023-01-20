


const Button = ({color,children,onClick}) => {
  return <button 
  style={{backgroundColor: color}}
  className="btn" 
  onClick={onClick}>{children}</button>
}

export default Button
