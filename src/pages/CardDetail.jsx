import { useParams } from "react-router-dom";
import cardData from "../data/cardData";

function CardDetail() {
    const { name } = useParams();

    const selectedCard = cardData.find(
        (item) => item.title === name
    );

    return (
        <div className="min-h-screen flex items-center justify-center px-4">

            <div className="max-w-md w-full bg-white shadow-xl rounded-xl overflow-hidden">

                <img
                    src={selectedCard?.img}
                    alt={selectedCard?.title}
                    className="w-full h-64 object-cover"
                />

                <h1 className="text-3xl font-bold text-center p-6">
                    {selectedCard?.title}
                </h1>

            </div>

        </div>
    );
}

export default CardDetail;