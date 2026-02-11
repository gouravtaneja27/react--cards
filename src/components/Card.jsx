import { Link } from "react-router-dom";
import cardData from "../data/cardData";

function Card() {
    return (
        <section className="min-h-screen flex items-center justify-center px-4">

            <div className="max-w-7xl w-full">

                <div className="
          grid gap-6
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
        ">

                    {cardData.map((item) => (
                        <Link
                            key={item.id}
                            to={`/card/${item.title}`}
                            className="bg-white shadow-lg rounded-xl overflow-hidden 
                         hover:scale-105 transition duration-300 block"
                        >
                            <img
                                src={item.img}
                                alt={item.title}
                                className="h-48 w-full object-cover"
                            />
                            <h2 className="p-4 font-bold text-center">
                                {item.title}
                            </h2>
                        </Link>
                    ))}

                </div>
            </div>

        </section>
    );
}

export default Card;
