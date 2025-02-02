import { useEffect, useState } from "react";
import { BookCards } from "../justcards/cards"; 
import SkeletonLoading from "../shared/UiSkeleton"; 
import UiButton from "../featuredbutton/button"; 
import { fetchApiWithSanity } from "../../../sanity";

const FeaturedData = () => {
    const [loading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchApiWithSanity(`*[_type == "card"] | {mainImage, hoverImage, title, price, discountPrice, category, pricePerCent}`)
            .then((res) => {
                setData(res);
                setIsLoading(false);
            })
            .catch((err) => { 
                setError("Failed to load products. Please try again later."); 
                setIsLoading(false);
            });
    }, []);

    return (
        <div className="mt-20 mb-5">
            <h1 className="text-center text-4xl font-poppins font-semibold"> Featured Product
            </h1>

            <div className="grid grid-cols-1 justify-center">
                <div className="col-span-6">
                    <div className="flex items-stretch gap-4 my-10 justify-center max-md:flex-wrap">
                        <UiButton  text="New Arrivals" />
                        <UiButton  text="Best Sellers" />
                        <UiButton  text="Sale Items" />
                    </div>
                </div>
            </div>

            {error && <p className="text-center text-red-500 text-lg font-semibold">{error}</p>}

            {!loading && data.length === 0 && !error && (
                <p className="text-center text-gray-500 text-lg font-medium">
                    No Products Found.
                </p>
            )}

            <div className="my-10 grid grid-cols-4 gap-4 max-md:grid-cols-2 max-sm:grid-cols-1">
                {loading ? (
                    <SkeletonLoading count={4} /> 
                ) : (
                    data.map((item, index) => (
                        <BookCards key={index}
                            mainImage={item.mainImage}
                            hoverImage={item.hoverImage}
                            title={item.title}
                            price={item.price}
                            discountPrice={item.discountPrice}
                            category={item.category}
                            pricePerCent={item.pricePerCent} />
                    ))
                )}
            </div>

        </div>
    );
};

export default FeaturedData;
