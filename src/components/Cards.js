import Card from "./Card"
import firstCardImg from "../media/first-card.jpg"
import secondCardImg from "../media/second-card.jpg"
import thirdCardImg from "../media/third-card.jpg"
import forthCardImg from "../media/forth-card.jpg"
import fifthCardImg from "../media/fifth-card.jpg"
import sixthCardImg from "../media/sixth-card.jpg"

export default function Cards() {
    const cards = [
        { id: 1, src: firstCardImg, title: "Oceans Of Tear" },
        { id: 2, src: secondCardImg, title: "Hard Judjment" },
        { id: 3, src: thirdCardImg, title: "Burn The Storm" },
        { id: 4, src: forthCardImg, title: "The Shattered Mask" },
        { id: 5, src: fifthCardImg, title: "Fire And Flame" },
        { id: 6, src: sixthCardImg, title: "Shadow Of The Fear" },
    ]

    return (
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-y-12 md:gap-9 xl:gap-14 mb-32 md:mb-44 xl:mb-56">
            {cards.map((card) => (
                <Card key={card.id} imgSrc={card.src} title={card.title} />
            ))}
        </div>
    )
}
