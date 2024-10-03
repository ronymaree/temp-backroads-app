const Tour = ({id, title, img, date, text, location, duration, cost }) => {
    return (
        <article className="tour-card" key={id}>
            <div className="tour-img-container">
                <img src={img} className="tour-img" alt=""/>
                <p className="tour-date">{date}</p>
            </div>
            <div className="tour-info">
                <div className="tour-title">
                    <h4>{title}</h4>
                </div>
                <p>
                    {text}
                </p>
                <div className="tour-footer">
                    <p>
                        <span><i className="fas fa-map"></i></span> {location}
                    </p>
                    <p>{duration}</p>
                    <p>{cost}</p>
                </div>
            </div>
        </article>
    )
}
export default Tour
