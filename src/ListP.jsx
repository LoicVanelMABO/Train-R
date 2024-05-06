import Imput from "./components/forms/Imput"
import Checkbox from "./components/forms/Checkbox.jsx"
import ProductCategoryRow from "./components/products/ProductCategoryRow.jsx"
import { ProductRow } from "./components/products/ProductRow.jsx"
import { useState } from "react"
const PRODUCTS = [  
    {category: "Fruits", price: "$1", stocked: true, name: "Apple"},  
    {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},  
    {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},  
    {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},  
    {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},  
    {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}  
]

function List(){

    const [showStockedOnly, setShowStockedOnly] = useState(false)
    const [search, setSearch] = useState('')

    const visibileProducts = PRODUCTS.filter(product => {
        if(search && !product.name.includes(search)){
            return false
        }

        if (showStockedOnly && !product.stocked){
            return false
        }
        return true
    })

    return <div className="container my-3">
        <SearchBar showStockedOnly={showStockedOnly} onChangeStocked={setShowStockedOnly}  search={search} onChangeBar={setSearch} />
        <ProductTable products={visibileProducts} />
    </div>
}

function SearchBar({showStockedOnly,onChangeStocked, search, onChangeBar}){
    return <div>
        <div className="mb-3">
            <Imput value={search} placeholder="recherchez le" onChange={onChangeBar}/>
            <Checkbox id="stock" checked ={showStockedOnly} elt="affiche que les produits en stock" onChange={onChangeStocked} />
        </div>
    </div>
}

function ProductTable({products, onchecked}){
    const row = []
    let lastCategory = null
    for(let product of products){
        if(lastCategory != product.category){
            row.push(<ProductCategoryRow key={product.category} name={product.category}/>)
        }
        lastCategory = product.category
        row.push(<ProductRow product={product} key={product.name}/>)
    }

    return <table className="table">
        <thead>
            <tr>
                <th>Nom</th>
                <th>Prix</th>
            </tr>
        </thead>
        <tbody>
            {row}
        </tbody>
    </table>
}
export default List