import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { response } from "express";

//When the functon is called,
function pizzaDisplay(){
    useEffect(() => {
        fetchPizzaList()
    }, []);
const fetchPizzaList = () => {
    axios.get('/api/pizza')
    .then(response => {
        let pizzaList = response.data
        console.log('It hit!!', pizzaList)
    })
.catch(error =>{console.log(error)});

}
};
return (
    <ul>
    {pizzaList.map((pizza, i) => {
       return (
        const [pizza, setPizza]
        <li key = >{pizza.name} {pizza.description} {pizza.price} {pizza.image_path} </li>
       )
    })}
    </ul>
)

export default pizzaDisplay;


// export function PizzaDisplay({ display }) {
//   return (
//     <div
//       {display.map((item) => (
//         <PizzaDisplay
//           key={item.id}
//           id={item.id}
//           name={item.name}
//           description={item.description}
//           price={item.price}
//           image_path={item.image_path}

//         />
//       ))}
//     </div>
//   );
// }
//  export default PizzaDisplay;
