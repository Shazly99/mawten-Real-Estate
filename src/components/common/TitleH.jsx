import Icon from '@constants/icon'

const TitleH = ({ title, highlight }) => {
    return (
        <div className="title-container"  >
            <div className="icon">
                <Icon.title />
            </div>
            <h3 className="title">
                <strong>{title}</strong> <span className="highlight">{highlight}</span>
            </h3>
        </div>
    )
}

export default TitleH
