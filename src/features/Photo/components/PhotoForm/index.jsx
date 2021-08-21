import PropTypes from 'prop-types'
import React from 'react'
import { Button, FormGroup, Spinner } from 'reactstrap'
import { PHOTO_CATEGORY_OPTIONS } from 'constants/global'
import { Formik, Form, FastField } from 'formik'
import InputField from 'custom-fields/InputField'
import SelectField from 'custom-fields/SelectField'
import RandomPhotoField from 'custom-fields/RandomPhotoField'
import * as Yup from 'yup'

PhotoForm.propTypes = {
	isAddMode: PropTypes.bool,
	initialValues: PropTypes.object,
	onSubmit: PropTypes.func,
}

PhotoForm.defaultProps = {
	isAddMode: true,
	initialValues: {},
	onSubmit: null,
}

const validationSchema = Yup.object({
	title: Yup.string().required('Title is required!'),
	categoryId: Yup.number().required('CategoryId is required!').nullable(),
	photo: Yup.string().required('Photo is required!'),
})

function PhotoForm(props) {
	const { initialValues, isAddMode } = props

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={props.onSubmit}
		>
			{formik => {
				const { isSubmitting } = formik

				return (
					<Form>
						<FastField
							name="title"
							component={InputField}
							label="Title"
							placeholder="Enter title"
						/>

						<FastField
							name="categoryId"
							component={SelectField}
							label="Category"
							placeholder="What's your photo category?"
							options={PHOTO_CATEGORY_OPTIONS}
						/>

						<FastField
							name="photo"
							component={RandomPhotoField}
							label="Photo"
						/>

						<FormGroup>
							<Button
								type="submit"
								color="primary"
								style={{
									display: 'flex',
									alignItems: 'center',
								}}
							>
								{isSubmitting && (
									<Spinner style={{ marginRight: '6px' }} size="sm" />
								)}
								{isAddMode ? 'Add to album' : 'Update to album'}
							</Button>
						</FormGroup>
					</Form>
				)
			}}
		</Formik>
	)
}

export default PhotoForm
