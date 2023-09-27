
import img4 from "../img/img4.jpg"

const Cards = ({ id, image, title, release_year, type_title }) => {
    return (
        <div className="md:mt-20 mt-16">
                    <div className="flex flex-col items-center justify-center w-full h-74 md:h-96 p-4 md:p-8  transition-transform transform-gpu md:hover:scale-105 hover:transition-transform duration-300">
                        <img
                            className="mt-1 object-cover h-auto w-60 md:h-60 md:w-60"
                            src={image? image: img4}
                            alt="producto"
                        />
                        <div className="flex flex-col gap-2 items-center justify-start w-full">
                            <h6 className="text-lg md:text-lg text-center">{title}</h6>
                            <div>
                                <h3 className="font-bold items-center flex justify-center">
                                    {release_year}
                                </h3>
                            </div>
                        </div>
                    </div>
        </div>
    );
};

export default Cards;