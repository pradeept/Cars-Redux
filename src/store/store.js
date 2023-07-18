import { configureStore } from "@reduxjs/toolkit";
import { 

    carsReducer,
    addCar,
    deleteCar,
    changeSearchTerm 

} from "./slices/carsSlice";
import { 

    formReducer, 
    changeName, 
    changeCost

} from "./slices/formSlice";



const store = configureStore({
    reducer:{
        form:formReducer,
        cars:carsReducer
    }
})

export {
    store,
    addCar, 
    deleteCar, 
    changeCost,
    changeName, 
    changeSearchTerm
};