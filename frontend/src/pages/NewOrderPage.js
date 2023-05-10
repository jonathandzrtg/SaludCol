import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useOrders } from '../context/orderContext'
import { useNavigate, useParams, Link } from 'react-router-dom';
import * as Yup from 'yup';
import { useEffect, useState } from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

export function NewOrderPage() {

  const { createOrder, getOrder, updateOrder } = useOrders();
  const navigate = useNavigate();
  const params = useParams();
  const [order, setOrder] = useState({
    estado: '',
    tipo: '',
    fecha_aprobacion: '',
    nombre_paciente: '',
    id_paciente: '',
    nota: ''
  })

  useEffect(() => {
    (async () => {
      if (params.id) {
        const order = await getOrder(params.id);
        setOrder(order);
      }
    })();
  }, [params.id]);


  return (
    <div className="flex items-center justify-center">
      <div className="bg-zinc-800 p-10 shadow-md shadow-black">

        <header className="flex justify-between items-center py-4 text-white">
          <h3 className="text-xl">Crear una nueva order</h3>
        </header>

        <Formik
          initialValues={order}
          validationSchema={Yup.object({
            estado: Yup.string().required("Estado es requerido"),
            tipo: Yup.string().required("Tipo es requerido"),
            fecha_aprobacion: Yup.string().required("Fecha es requerida"),
            nombre_paciente: Yup.string().required("Nombre es requerido"),
            id_paciente: Yup.string().required("Identificacion es requerido"),
            nota: Yup.string().required("Nota es requerido"),
          })}
          onSubmit={async (values, actions) => {
            if (params.id) {
              await updateOrder(params.id, values);
            } else {
              await createOrder(values);
            }
            actions.setSubmitting(false);
            navigate('/');
          }}
          enableReinitialize
        >
          {
            ({ handleSubmit, isSubmitting }) => (
              <Form onSubmit={handleSubmit}>
                <label htmlFor="estado" className="text-sm block font-bold text-gray-400">Estado</label>
                <Field name='estado' className="px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full mb-4" placeholder="Estado" /> <ErrorMessage component="p" className="text-red-500 text-sm" name='estado' />
                <label htmlFor="tipo" className="text-sm block font-bold text-gray-400">Tipo</label>
                <Field name='tipo' className="px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full mb-4" placeholder="Tipo" /> <ErrorMessage component="p" className="text-red-500 text-sm" name='tipo' />
                <label htmlFor="fecha_aprobacion" className="text-sm block font-bold text-gray-400">Fecha de aprobación</label>
                <Field name='fecha_aprobacion' className="px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full mb-4" placeholder="Fecha de aprobación" /> <ErrorMessage component="p" className="text-red-500 text-sm" name='fecha_aprobacion' />
                <label htmlFor="nombre_paciente" className="text-sm block font-bold text-gray-400">Nombre del Paciente</label>
                <Field name='nombre_paciente' className="px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full mb-4" placeholder="Nombre del paciente" /> <ErrorMessage component="p" className="text-red-500 text-sm" name='nombre_paciente' />
                <label htmlFor="id_paciente" className="text-sm block font-bold text-gray-400">Identificacion del paciente del Paciente</label>
                <Field name='id_paciente' className="px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full mb-4" placeholder="Id del paciente" /> <ErrorMessage component="p" className="text-red-500 text-sm" name='id_paciente' />
                <label htmlFor="nota" className="text-sm block font-bold text-gray-400">Nota</label>
                <Field name='nota' className="px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full mb-4" placeholder="Nota" /> <ErrorMessage component="p" className="text-red-500 text-sm" name='nota' />
                <button type='submit' className="bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded mt-2 text-white focus:outline-none disabled:bg-indigo-400" disabled={isSubmitting}>{isSubmitting ? (
                  <AiOutlineLoading3Quarters className="animate-spin h-5 w-5"/>
                ) : 'Guardar'}</button>
                <Link to="/" className="bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded mt-2 text-white focus:outline-none disabled:bg-indigo-400">Regresar</Link>
              </Form>
            )
          }
        </Formik>
      </div>
    </div>
  )
}

