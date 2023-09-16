import { useState } from "react";
import image1 from "../../assets/images/beach.jpg"
import image2 from "../../assets/images/venice.jpg"
import image3 from "../../assets/images/mountain.jpg"

const cards = [
    {
        header: "Beach",
        image: image1,
        text: 'Enjoy the sea'
    },
    {
        header: "Venice",
        image: image2,
        text: 'Enjoy Italy'
    },
    {
        header: "Mountain",
        image: image3,
        text: 'Enjoy the mountain'
    }
]

export const Accordion = () =>{
    const [active, setActive] = useState (0);
    return (
        <section className=" flex flex-row h-screen">
            {cards.map((card, index) =>(
                <article
                key={card.image}
                className={active === index ? "w-2/3 hover:delay-300" : " w-1/6 hover:delay-300"}
                onMouseEnter={() => setActive(index)}
                onMouseLeave={()=> setActive("")}
                >
                    <img src={card.image} className=" h-full object-cover"/>
                </article>
            ))}
        </section>
    )
}