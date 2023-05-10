import {ImFilesEmpty} from 'react-icons/im'
import { useOrders } from "../context/orderContext"
import { Link } from "react-router-dom"
import { OrderCard } from '../components/OrderCard'

export function HomePage() {
    const {orders} = useOrders()

    const PrincipalRender = () => {

        if(orders.length === 0){
            return(
                <div className="flex flex-col justify-center items-center">
                    <ImFilesEmpty className="h-40 w-40"/>
                    <h1 className="text-2x1">No hay ordenes medicas</h1>
                </div>
            ); 
        } else {
            return (
                <div className="grid grid-cols-3 gap-4">
                {orders.map((order) => (
                    <OrderCard order={order} key={order._id} />
                ))}
                </div>
                )
        }
    }

    return (
        
        <div className="text-white">
          <div><h1 className="text-4xl text-black font-bold">Sistema de gestión de procesos medicos SaludCol</h1></div>
          <header className="flex justify-between py-4">
            <h2 className="text-2xl text-black "> Ordenes ({orders.length})</h2>
            <h2 className="text-2xl text-black "> Identificacion: 100250 </h2>
            <h2 className="text-2xl text-black "> Nombre: Juan Luis Perez</h2>
            <Link to="/new-order" className="px-3 py-2 bg-indigo-500 hover:bg-indigo-600 text-white">Generar nueva orden medica</Link>
          </header>
          {PrincipalRender()}
        </div>
      );
}
