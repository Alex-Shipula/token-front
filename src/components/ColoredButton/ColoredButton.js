//styles
import './ColoredButton.css'

const ColoredButton = (props) => {
    return(
        <button 
            href={props.link} 
            className={`${props.color}Button ${props.classNames}`}
            style={{border: 'none', outline: 'none'}}
        >
            {props.children}
        </button>
    )
}

export default ColoredButton