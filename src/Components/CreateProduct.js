import { Formik } from 'formik'
import React from 'react'
import '../styles/CreateProduct.scss'
import { Image } from 'cloudinary-react';
import { uploadImages } from '../utils/uploadImages'
import { createProductAction } from '../utils/connection';
import { useDispatch, useSelector } from 'react-redux';
import { listProductsAction } from '../Redux/actions/product';
import { useNavigate } from 'react-router-dom';

function CreateProduct() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const listCategories = useSelector(state => state.product.listCategories)
  const handleSubmit = async (values, { setSubmitting }) => {
    const listImages = await uploadImages(values.images)
    await createProductAction({
      ...values,
      images: listImages,
    })
    dispatch(listProductsAction())
    navigate('/dashboard')
  }
  return (
    <div className='containerCrud'>
      <Formik
        initialValues={{ name: '', price: '', category: '', brand: '', style: '', color: '', description: '', timeDelivery: '', images: [] }}
        validate={values => {
          const errors = {};
          if (!values.name) {
            errors.name = 'Este campo es requerido';
            errors.name = 'Required';
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
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
                {errors.name && touched.name && (
                  <span>
                    {errors.name}
                  </span>
                )}
              </div>
            </div>
            <div>
              <label>Precio</label>
              <div>
                <input
                  type="number"
                  name="price"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.price}
                />
                {errors.price && touched.price && (
                  <span>
                    {errors.price}
                  </span>
                )}
              </div>
            </div>
            <div>
              <label>Categoria</label>
              <div>
                <select name="category" onChange={handleChange} onBlur={handleBlur} value={values.category}>
                  <option value="">Seleccione una categoria</option>
                  {listCategories.map(category => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                  ))}
                </select>
                {errors.category && touched.category && (
                  <span>
                    {errors.category}
                  </span>
                )}
              </div>
            </div>
            <div>
              <label>Marca</label>
              <div>
                <input
                  type="text"
                  name="brand"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.brand}
                />
                {errors.brand && touched.brand && (
                  <span>
                    {errors.brand}
                  </span>
                )}
              </div>
            </div>
            <div>
              <label>Estilo</label>
              <div>
                <input
                  type="text"
                  name="style"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.style}
                />
                {errors.style && touched.style && (
                  <span>
                    {errors.style}
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
                {errors.color && touched.color && (
                  <span>
                    {errors.color}
                  </span>
                )}
              </div>
            </div>
            <div>
              <label>Descripcion</label>
              <div>
                <input
                  type="text"
                  name="description"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.description}
                />
                {errors.description && touched.description && (
                  <span>
                    {errors.description}
                  </span>
                )}
              </div>
            </div>
            <div>
              <label>Tiempo De entrega</label>
              <div>
                <input
                  type="text"
                  name="timeDelivery"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.timeDelivery}
                />
                {errors.timeDelivery && touched.timeDelivery && (
                  <span>
                    {errors.timeDelivery}
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
                  name="images"
                  onBlur={handleBlur}
                  onChange={(event) => {
                    setFieldValue("images", event.currentTarget.files);
                  }}
                />
                {errors.images && touched.images && (
                  <span>
                    {errors.images}
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