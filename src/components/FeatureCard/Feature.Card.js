//images
import dog from '../../img/feat-dog.png'
import zamok from '../../img/feat-zamok.png'
import charts from '../../img/feat-charts.png'

const images = {
    'dog': dog,
    'zamok': zamok,
    'charts': charts
}

const FeatureCard = (props) => {
    return(
        <div className="card">
            <img src={images[props.type]} className="card-img-top" alt="..."/>
            <div className="card-body">
                <div className="ctitle">{props.title}</div>
                <p className="card-text">{props.text}</p>
            </div>
        </div>
    )
}

export default FeatureCard