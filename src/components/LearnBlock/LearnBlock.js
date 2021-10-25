//components
import ColoredButton from "../ColoredButton/ColoredButton"
//styles
import './LearnBlock.css'
//images
import dogLeft from '../../img/blockchain2.svg'
import dogRight from '../../img/learnDogRight.svg'

const LearnBlock = (props) => {

    const textPos = props.textPosition

    return(
        <div className="learnBlock" style={ textPos === 'right' ? {flexDirection: 'row-reverse'} : null }>
            <div className='lbLeft'>
                <div className="lbTitle">{props.title}</div>
                <div className="lbContent">{props.content}</div>
                <ColoredButton link={props.link} color='orange'>Get your Token Dog now</ColoredButton>
            </div>
            <div className='lbRight'>
                {/* <img type="image/svg+xml" src={textPos === 'left' ? dogRight : dogLeft} alt=""/> */}
                <object id="learn-images" type="image/svg+xml" data={textPos === 'left' ? dogRight : dogLeft}></object>
            </div> 
        </div>
    )
}

export default LearnBlock