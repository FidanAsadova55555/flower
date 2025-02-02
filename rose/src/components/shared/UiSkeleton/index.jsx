import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonLoading = ({ count }) => {
    return (
        <>
            {
                new Array(count).fill(0).map((_, index) => (
                    <div key={index} >
                        <Skeleton width={"100%"} height={400} />
                        <Skeleton width={"100%"} height={10} />
                        <Skeleton width={"70%"} height={10} />
                    </div>
                ))
            }
        </>
    )
}

export default SkeletonLoading