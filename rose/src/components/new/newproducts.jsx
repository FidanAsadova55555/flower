import React, { useEffect, useState } from 'react';
import { BookCards } from '../cards/card';
import { fetchApiWithSanity } from '../../../sanity';

const NewProducts = () => {
    const [loading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
    
    useEffect(() => {
        fetchApiWithSanity(`*[_type == "card"] | {mainImage, hoverImage, title, price, discountPrice, category, pricePerCent}`)
            .then((res) => {
                setData(res);
                setIsLoading(false);
            });
    }, []);
    
    const filterCategoryData = data.filter((item) => item.category === 'new');
    
    return (
        <div className='my-20'>
            <div className='w-full mx-auto'>
                <h2 className='font-semibold text-center font-poppins text-3xl'>New Products</h2>
            </div>
            {data.length === 0 && <p className="text-center mt-10">No data found</p>}
            
            <div className="my-10 grid grid-cols-4 gap-4 max-md:grid-cols-2 max-sm:grid-cols-1">
                {loading ? <p className="text-center">Loading...</p> : filterCategoryData.map((item, index) => (
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

export default NewProducts;
