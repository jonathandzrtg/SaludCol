import toast from 'react-hot-toast';
import { useOrders } from '../context/orderContext';
import { useNavigate } from 'react-router-dom';

export function OrderCard({ order }) {

  const { deleteOrder } = useOrders();
  const navigate = useNavigate();

  const handlerDelete = (_id, nombre_paciente) => {
    toast((t) => (
      <div>
        <p className="text-white items-center flex justify-center">
          Desea Eliminar la orden?
        </p>
        <p className="text-white items-center flex justify-center">
          <strong>{nombre_paciente}</strong>
        </p>
        <div className="flex justify-center py-2">
          <button className="bg-red-600 hover:bg-red-400 text-sm px-3 py-1 text-white rounded-sm mx-2" onClick={() => { deleteOrder(_id); toast.dismiss(t.id); }}  >Si</button>
          <button className='bg-slate-400 hover:bg-slate-500 px-3 py-1 text-white rounded-sm mx-2' onClick={() => toast.dismiss(t.id)}>No</button>
        </div>
      </div>
    ), {
      style: {
        background: "#202020",
      },
    })
  }

  const handlerUpdate = (_id, nombre_paciente) => {
    toast((t) => (
      <div>
        <p className="text-white items-center flex justify-center">
          Desea actualizar la orden?
        </p>
        <p className="text-white items-center flex justify-center">
          <strong>{nombre_paciente}</strong>
        </p>
        <div className="flex justify-center py-2">
          <button className="bg-red-600 hover:bg-red-400 text-sm px-3 py-1 text-white rounded-sm mx-2" onClick={() => {
            navigate(`/orders/${order._id}`);
            toast.dismiss(t.id);
          }}  >Si</button>
          <button className='bg-slate-400 hover:bg-slate-500 px-3 py-1 text-white rounded-sm mx-2' onClick={() => toast.dismiss(t.id)}>No</button>
        </div>
      </div>
    ), {
      style: {
        background: "#202020",
      },
    })
  }

  return (

    <div className="bg-zinc-700 text-white rounded-sm shadow-md shadow-black hover:bg-zinc-400 hover:cursor-pointer">
      <div className="px-4 py-7">
        <div id="header">
          <h1><strong className="text-2xl text-yellow-400 font-bold font-semibold">{order.estado}</strong></h1>
          <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-400" onClick={(e) => { e.stopPropagation(); handlerDelete(order._id, order.nombre_paciente); }}>
            Eliminar
          </button>
          <button className="inline-flex items-center px-5 py-2 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-400 mb-2" onClick={(e) => { e.stopPropagation(); handlerUpdate(order._id, order.nombre_paciente); }}>
            Actualizar
          </button>
        </div>
      </div>
      <div className="p-3">
        <div className="mb-2">
          <p><strong className="text-red-400">tipo:</strong> {order.tipo}</p>
        </div>
        <div className="flex justify-between">
          <p><strong className="text-red-400">Fecha aprobacion:</strong> <span className="text-blue-200">{order.fecha_aprobacion}</span></p>
        </div>
        <div className="flex justify-between">
          <p><strong className="text-red-400">Nombre del paciente:</strong> <span className="text-blue-200">{order.nombre_paciente}</span></p>
        </div>
        <div className="flex justify-between">
          <p><strong className="text-red-400">Identificación del paciente:</strong> <span className="text-blue-200">{order.id_paciente}</span></p>
        </div>
        <div className="flex justify-between">
          <p><strong className="text-red-400">Nota:</strong> <span className="text-blue-200">{order.nota}</span></p>
        </div>
      </div>
    </div>

  );
}
