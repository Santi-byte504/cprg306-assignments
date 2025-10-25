export default function Item({name, quantity, category}){
    return(
        <li className="rounded bg-gray-900 p-2">
            <p>{name}</p>
            <p>Quantity: {quantity}</p>
            <p className="capitalize">Category: {category}</p>
        </li>
    
    )}
