import { Formik } from 'formik'
import React from 'react'
import '../styles/CreateProduct.scss'

function CreateProduct() {
  const handleSubmit = (values, { setSubmitting }) => {
    console.log('values >>> ', values)
  }
  return (
    <div className='containerCrud'>
      <Formik
        initialValues={{ nombre: '', precio: '', categoria: '', marca: '', estilo: '', color: '', descripcion: '', tiempoEntrega: '', images: [] }}
        validate={values => {
          const errors = {};
          if (!values.nombre) {
            errors.nombre = 'Este campo es requerido';
            errors.nombre = 'Required';
          }
          return errors;
        }}
        onSubmit={handleSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          setFieldValue
          /* and other goodies */
        }) => (
          <form className='crudContent' onSubmit={handleSubmit}>
            <div>
              <label>Nombre</label>
              <div>
                <input
                  type="text"
                  name="nombre"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.nombre}
                />
                {errors.nombre && touched.nombre && (
                  <span>
                    {errors.nombre}
                  </span>
                )}
              </div>
            </div>
            <div>
              <label>Precio</label>
              <div>
                <input
                  type="text"
                  name="precio"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.precio}
                />
                {errors.nombre && touched.nombre && (
                  <span>
                    {errors.nombre}
                  </span>
                )}
              </div>
            </div>
            <div>
              <label>Categoria</label>
              <div>
                <input
                  type="text"
                  name="categoria"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.categoria}
                />
                {errors.nombre && touched.nombre && (
                  <span>
                    {errors.nombre}
                  </span>
                )}
              </div>
            </div>
            <div>
              <label>Marca</label>
              <div>
                <input
                  type="text"
                  name="marca"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.marca}
                />
                {errors.nombre && touched.nombre && (
                  <span>
                    {errors.nombre}
                  </span>
                )}
              </div>
            </div>
            <div>
              <label>Estilo</label>
              <div>
                <input
                  type="text"
                  name="estilo"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.estilo}
                />
                {errors.nombre && touched.nombre && (
                  <span>
                    {errors.nombre}
                  </span>
                )}
              </div>
            </div>
            <div>
              <label>Color</label>
              <div>
                <input
                  type="text"
                  name="color"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.color}
                />
                {errors.nombre && touched.nombre && (
                  <span>
                    {errors.nombre}
                  </span>
                )}
              </div>
            </div>
            <div>
              <label>Descripcion</label>
              <div>
                <input
                  type="text"
                  name="descripcion"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.descripcion}
                />
                {errors.nombre && touched.nombre && (
                  <span>
                    {errors.nombre}
                  </span>
                )}
              </div>
            </div>
            <div>
              <label>Tiempo De entrega</label>
              <div>
                <input
                  type="text"
                  name="tiempoEntrega"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.tiempoEntrega}
                />
                {errors.nombre && touched.nombre && (
                  <span>
                    {errors.nombre}
                  </span>
                )}
              </div>
            </div>
            <div>
              <label>Imagenes</label>
              <div>
                <input
                  type="file"
                  multiple
                  accept='image/*'
                  name="tiempoEntrega"
                  onBlur={handleBlur}
                  onChange={(event) => {
                    setFieldValue("images", event.currentTarget.files);
                  }}
                />
                {errors.nombre && touched.nombre && (
                  <span>
                    {errors.nombre}
                  </span>
                )}
              </div>
            </div>
            <div className='btnContainer'>
              <button type="submit" disabled={isSubmitting}>
                Crear
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  )
}

export default CreateProduct