import { Item } from '../Item/index'

export const Products = (props) => {
    const { products } = props
    return (
        <main>
        <h1>Home</h1>
        <div className="row">
            {products.map((product) => (
            <Item key={product.id} item={product}/>))}
        </div>
        </main>
    )
}
