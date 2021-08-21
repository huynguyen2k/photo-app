import React from 'react'
import PropTypes from 'prop-types'
import { FormGroup, Label, Input, FormFeedback } from 'reactstrap'
import { ErrorMessage } from 'formik'

const InputField = props => {
	const { field, form, type, label, placeholder, disabled } = props
	const { errors, touched } = form
	const showError = errors[field.name] && touched[field.name]

	return (
		<FormGroup>
			{label && <Label for={field.name}>{label}</Label>}
			<Input
				{...field}
				id={field.name}
				type={type}
				placeholder={placeholder}
				disabled={disabled}
				invalid={showError}
			/>
			<ErrorMessage name={field.name} component={FormFeedback} />
		</FormGroup>
	)
}

InputField.propTypes = {
	field: PropTypes.object.isRequired,
	form: PropTypes.object.isRequired,

	type: PropTypes.string,
	label: PropTypes.string,
	placeholder: PropTypes.string,
	disabled: PropTypes.bool,
}

InputField.defaultProps = {
	type: 'text',
	label: '',
	placeholder: '',
	disabled: false,
}

export default InputField
