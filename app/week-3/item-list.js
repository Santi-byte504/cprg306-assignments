import Item from "./item";
export default function ItemList(){
    const item1 = {
  name: "milk, 4 L 🥛",
  quantity: 1,
  category: "dairy",
};
 
const item2 = {
  name: "bread 🍞",
  quantity: 2,
  category: "bakery",
};
 
const item3 = {
  name: "eggs, dozen 🥚",
  quantity: 2,
  category: "dairy",
};
 
const item4 = {
  name: "bananas 🍌",
  quantity: 6,
  category: "produce",
};
 
const item5 = {
  name: "broccoli 🥦",
  quantity: 3,
  category: "produce",
};
 
const item6 = {
  name: "chicken breasts, 1 kg 🍗",
  quantity: 1,
  category: "meat",
};
 
const item7 = {
  name: "pasta sauce 🍝",
  quantity: 3,
  category: "canned goods",
};
 
const item8 = {
  name: "spaghetti, 454 g 🍝",
  quantity: 2,
  category: "dry goods",
};
 
const item9 = {
  name: "toilet paper, 12 pack 🧻",
  quantity: 1,
  category: "household",
};
 
const item10 = {
  name: "paper towels, 6 pack",
  quantity: 1,
  category: "household",
};
 
const item11 = {
  name: "dish soap 🍽️",
  quantity: 1,
  category: "household",
};
 
const item12 = {
  name: "hand soap 🧼",
  quantity: 4,
  category: "household",
}
    return(
        <ul className="space-y-2">
            <Item Name={item1.name} Quantity={item1.quantity} Category={item1.category}/>
            <Item Name={item2.name} Quantity={item2.quantity} Category={item2.category}/>
            <Item Name={item3.name} Quantity={item3.quantity} Category={item3.category}/>
            <Item Name={item4.name} Quantity={item4.quantity} Category={item4.category}/>
            <Item Name={item5.name} Quantity={item5.quantity} Category={item5.category}/>
            <Item Name={item6.name} Quantity={item6.quantity} Category={item6.category}/>
            <Item Name={item7.name} Quantity={item7.quantity} Category={item7.category}/>
            <Item Name={item8.name} Quantity={item8.quantity} Category={item8.category}/>
            <Item Name={item9.name} Quantity={item9.quantity} Category={item9.category}/>
            <Item Name={item10.name} Quantity={item10.quantity} Category={item10.category}/>
            <Item Name={item11.name} Quantity={item11.quantity} Category={item11.category}/>
            <Item Name={item12.name} Quantity={item12.quantity} Category={item12.category}/>
        </ul>
    )
};
