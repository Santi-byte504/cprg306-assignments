export default function Item({Name, Quantity, Category}){
    return(
        <li className="rounded bg-gray-900 p-2">
            <p>{Name}</p>
            <p>Quantity: {Quantity}</p>
            <p className="capitalize">Category: {Category}</p>
        </li>
    
    )}
