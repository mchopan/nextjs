export const generateMetadata = ({ params }) => {
    return {
        title: `Product ${params.productId}`
    }
}

export default function productDetails({ params }) {

    const number = 2;

    if (number == 2) {
        throw new Error("Unexpected Error occured in item")
    }

    else {
        return <h1>Product details of {params.productId}</h1>
    }
}