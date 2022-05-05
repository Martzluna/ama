import { Formik } from 'formik';
import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { listCategoriesAction } from '../Redux/actions/product';
import { createCategoryAction } from '../utils/connection';

function CreateCategory() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleCreate = async (values, { setSubmitting, resetForm }) => {
        setSubmitting(false);
        await createCategoryAction(values)
        resetForm()
        dispatch(listCategoriesAction())
        navigate('/dashboard')
    }
return (
    <div className='containerCrud'>
        <h1>Create Category</h1>
        <Formik
            initialValues={{ name: '', descripcion: '' }}
            validate={values => {
                const errors = {};
                if (!values.name) {
                    errors.name = 'Este campo es requerido';
                    errors.name = 'Required';
                }
                return errors;
            }}
            onSubmit={handleCreate}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
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

export default CreateCategory