import { useEffect, useState } from "react";
import { BookCards } from "../cards/card";
import { fetchApiWithSanity } from "../../../sanity";

const FeatureProductSection = () => {
    const [loading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchApiWithSanity(`*[_type == "card"] | {mainImage, hoverImage, title, price, discountPrice, category, pricePerCent}`)
            .then((res) => {
                setData(res);
                setIsLoading(false);
            })
            .catch((err) => { setError(err); });
    }, []);

    return (
        <div className="mt-20 mb-5">
            <h1 className="text-center text-4xl font-poppins font-semibold"> Featured Product
            </h1>
            
            {data.length === 0 && <p className="text-center mt-10">No data found</p>}

            <div className="my-10 grid grid-cols-4 gap-4 max-md:grid-cols-2 max-sm:grid-cols-1">
                {loading ? <p className="text-center">Loading...</p> : data.map((item, index) => (
                    <BookCards key={index}
                        mainImage={item.mainImage}
                        hoverImage={item.hoverImage}
                        title={item.title}
                        price={item.price}
                        discountPrice={item.discountPrice}
                        category={item.category}
                        pricePerCent={item.pricePerCent} />
                ))}
            </div>
        </div>
    );
};

export default FeatureProductSection;
