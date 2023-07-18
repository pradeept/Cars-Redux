import { useSelector,useDispatch } from "react-redux";
import { deleteCar } from "../store/store";


function CarList(){

    const dispatch = useDispatch();

    //we are using destructuring of main state into cars and again inside cars into searchTerma & data
    const {cars, name} = useSelector(({form,cars:{searchTerm, data}})=>{
        const filteredCars =  data.filter((car)=> car.name.toLowerCase().includes(searchTerm.toLowerCase()));
        return {
            cars: filteredCars,
            name: form.name
        }
    })

    const handleCarDelete = (id)=>{
        dispatch(deleteCar(id))
    }

    return<>
    <div className="car-list">
         {
            cars.map((car)=>{
                const bold = name && car.name.toLowerCase().includes(name.toLowerCase())
                return <div key={car.id} className={`panel ${bold && 'bold'}`}>
                    <p>
                        {car.name} - {car.cost}₹
                    </p>
                    <button
                        className="button is-danger"
                        onClick={()=> handleCarDelete(car.id)}
                    >
                        Delete
                    </button>
                </div>
            })
        }
    </div>
       
    </>
}

export default CarList;