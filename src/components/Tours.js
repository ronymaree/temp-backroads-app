import Title from "./Title";
import {tours} from "../data";
import Tour from "./Tour";

const Tours = () => {
    return (

        <section className="section" id="tours">
            <Title title="featured" subTitle="tours" />


            <div className="section-center featured-center">

                {tours.map((tour) => {
                    console.log(tour)
                    const { id, img, date, title, text, location, duration, cost  } = tour

                    return <Tour id = {id} img={img} date={date} title={title} text={text} location={location} duration={duration} cost={cost}  />
                })}


            </div>
        </section>
    )
}
export default Tours
