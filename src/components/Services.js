import Title from "./Title";
import Service from "./Service";
import {services} from "../data";


const Services = () => {
    return (
        <section className="section services" id="services">
            <Title title="our" subTitle="services" />

            <div className="section-center services-center">

                {services.map((service) => {
                    const {id, icon, title, text} = service
                    return <Service id={id} icon={icon} title={title} text={text}/>
                })}
            </div>
        </section>
    )
}
export default Services
