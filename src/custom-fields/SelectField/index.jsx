import React from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import { FormGroup, Label } from 'reactstrap'
import { ErrorMessage } from 'formik'
import { FormFeedback } from 'reactstrap'

const SelectField = props => {
	const { field, form, label, placeholder, disabled, options } = props
	const { errors, touched } = form
	const showError = errors[field.name] && touched[field.name]

	const selectedOption =
		options.find(option => option.value === field.value) || null

	const handleSelectChange = selectedOption => {
		const selectedValue = selectedOption ? selectedOption.value : null

		const e = {
			target: {
				name: field.name,
				value: selectedValue,
			},
		}
		field.onChange(e)
	}

	const handleSelectBlur = () => {
		form.setFieldTouched(field.name, true, true)
	}

	return (
		<FormGroup>
			{label && <Label for={field.name}>{label}</Label>}
			<Select
				{...field}
				onChange={handleSelectChange}
				onBlur={handleSelectBlur}
				value={selectedOption}
				id={field.name}
				placeholder={placeholder}
				disabled={disabled}
				options={options}
				className={showError ? 'is-invalid' : ''}
			/>
			<ErrorMessage name={field.name} component={FormFeedback} />
		</FormGroup>
	)
}

SelectField.propTypes = {
	field: PropTypes.object.isRequired,
	form: PropTypes.object.isRequired,

	label: PropTypes.string,
	options: PropTypes.array,
	placeholder: PropTypes.string,
	disabled: PropTypes.bool,
}

SelectField.defaultProps = {
	label: '',
	options: [],
	placeholder: '',
	disabled: false,
}

export default SelectField
