import React, {createContext, useState} from 'react';

export const CarritoContext = createContext();

export const CarritoProvider = ({children}) => {
    const [carrito, setCarrito] = useState([])
    console.log(carrito)

    const estaEnCarrito = (id) => carrito.some((item) => item.id === id);

    const addCarrito = (item, cant) => {
        if(estaEnCarrito(item.id)){
            const nuevoCarrito = carrito.map((carritoElement) =>{
                if(carritoElement.id === item.id){
                    return{ ...carritoElement, cant: carritoElement.cant + cant};
                }else{
                    return carritoElement;
                }
            })
            setCarrito(nuevoCarrito);
        }else{
            setCarrito((prev) => [...prev, {...item, cant}]);
        }
    }

    const removeCarrito = (itemId) => {
        setCarrito(carrito.filter((element) => element.id !== itemId));
    }

    const clear = () => setCarrito({})

    return(
        <CarritoContext.Provider value={{carrito, addCarrito, removeCarrito}}>
            {children}
        </CarritoContext.Provider>
    )
    
}