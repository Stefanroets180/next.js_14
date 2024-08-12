export default function Products({params}: {params: {id: string}}) {
    return (
        <div>
            <h1>Product {params.id}</h1>
            <p>This is the product page for {params.id}</p>
        </div>
    )
}

