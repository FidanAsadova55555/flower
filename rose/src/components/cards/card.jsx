import styles from "./style.module.scss";
import useSWR from "swr";
import { fetchApiWithSanity } from "../../../sanity";
import { sanityImageUrlFor } from "../../../sanity";

export const BookCardsContainer = () => {
    const { data: cards, error } = useSWR(
        `*[_type == "card"] {
            mainImage,
            hoverImage,
            pricePerCent,
            category,
            title,
            price,
            discountPrice
        }`,
        fetchApiWithSanity
    );
    
    console.log("Fetched cards Data:", cards); 

    if (error) return <p className="text-center">Failed to load books.</p>;
    if (!cards || cards.length === 0) return <p className="text-center">No books available.</p>;

    return (
        <div className="my-10 grid grid-cols-4 gap-4 max-md:grid-cols-2 max-sm:grid-cols-1">
            {cards.map((book, index) => (
                <BookCards key={index} {...book} />
            ))}
        </div>
    );
};

export const BookCards = ({ mainImage, pricePerCent, category, hoverImage, title, price, discountPrice }) => {
    return (
        <div className={styles?.root || ""}>
            <div className={styles?.card || ""}>
                <div className={styles?.cardImage || ""}>
                    <img 
                        src={mainImage?.asset ? sanityImageUrlFor(mainImage.asset) : "/placeholder.jpg"} 
                        alt={title} 
                    />
                    <div className={styles?.pinItem || ""}>
                        <div>
                            <p className="text-fuchsia-500">-${pricePerCent}%</p>
                            <h2 className="font-poppins font-semibold text-md text-indigo-600">{category}</h2>
                        </div>
                    </div>
                    <div className={styles?.HoverImg || ""}>
                        <div className="w-full h-full">
                            <img 
                                src={hoverImage?.asset ? sanityImageUrlFor(hoverImage.asset) : "/placeholder.jpg"} 
                                alt={title} 
                            />
                            <div className={styles?.hoverImgItem || ""}>
                                <div className="flex gap-2 items-center">
                                    <div className="w-10 h-10 flex items-center rounded-full justify-center bg-fuchsia-400">  
                                        <i className="ri-shopping-cart-2-line text-md text-white"></i>
                                    </div>
                                    <div className="w-10 h-10 flex items-center rounded-full justify-center bg-fuchsia-400">  
                                        <i className="ri-eye-fill text-md text-white"></i>
                                    </div>
                                    <div className="w-10 h-10 flex items-center rounded-full justify-center bg-fuchsia-400">  
                                        <i className="ri-git-pull-request-line text-md text-white"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-between items-center mt-2">
                <div>
                    <p className="font-poppins text-md cursor-pointer">{title}</p>
                    <h1 className="text-sm font-poppins">
                        $ {price} - <span className="text-fuchsia-600">$ {discountPrice}</span>
                    </h1>
                </div>
                <div>
                    <i className="ri-heart-line text-xl"></i>
                </div>
            </div>
        </div>
    );
};
