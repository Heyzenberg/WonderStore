import './ProductSkeleton.scss';
import ContentLoader from "react-content-loader"

const ProductSkeleton = () => (
    <div className="ProductSkeleton">
        <ContentLoader 
            speed={1}
            width={360}
            height={416}
            viewBox="0 0 360 416"
            backgroundColor="#ededed"
            foregroundColor="#dabcdc"
        >
            <rect x="100" y="70" rx="10" ry="10" width="170" height="140" /> image
            <rect x="285" y="20" rx="10" ry="10" width="68" height="41" /> price
            <rect x="25" y="20" rx="10" ry="10" width="48" height="41" /> cart
            <rect x="60" y="230" rx="10" ry="10" width="240" height="30" /> title
        </ContentLoader>  
    </div>

)

export { ProductSkeleton };