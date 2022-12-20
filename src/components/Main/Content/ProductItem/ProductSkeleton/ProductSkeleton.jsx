import React from "react"
import ContentLoader from "react-content-loader"

const ProductSkeleton = () => (
    <div className="ProductItem">
        <ContentLoader 
            speed={2}
            width={360}
            height={416}
            viewBox="0 0 360 416"
            backgroundColor="#ededed"
            foregroundColor="#dabcdc"
        >
            <rect x="80" y="100" rx="10" ry="10" width="182" height="162" /> 
            <rect x="265" y="22" rx="10" ry="10" width="68" height="41" /> 
            <rect x="20" y="22" rx="10" ry="10" width="48" height="41" /> 
            <rect x="55" y="300" rx="10" ry="10" width="240" height="30" />
        </ContentLoader>  
    </div>

)

export { ProductSkeleton };