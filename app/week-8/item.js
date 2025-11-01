export default function Item({name, quantity, category, onSelect}){
    const Handler = () => {
        if (onSelect) onSelect({name, quantity, category});
    }
    return(
        <li className="rounded bg-gray-900 p-2 cursor-pointer hover:bg-gray-300 hover:text-black" onClick={Handler}>
            <p>{name}</p>
            <p>Quantity: {quantity}</p>
            <p className="capitalize">Category: {category}</p>
        </li>
    
    )}
