import React from 'react'
import Banner from 'components/Banner'
import PhotoForm from 'features/Photo/components/PhotoForm'
import './styles.scss'
import { useDispatch, useSelector } from 'react-redux'
import { addPhoto, updatePhoto } from 'features/Photo/photoSlice'
import { useHistory, useParams } from 'react-router-dom'

AddEditPage.propTypes = {}

function AddEditPage(props) {
	const dispatch = useDispatch()
	const history = useHistory()
	const { photoId } = useParams()

	const isAddMode = !photoId
	const editedPhoto = useSelector(state =>
		state.photos.find(photo => photo.id === Number(photoId))
	)
	const initialValues = isAddMode
		? {
				title: '',
				categoryId: null,
				photo: '',
		  }
		: editedPhoto

	const handleSubmit = values => {
		setTimeout(() => {
			if (isAddMode) {
				dispatch(addPhoto(values))
			} else {
				dispatch(updatePhoto(values))
			}

			history.push('/photos')
		}, 2000)
	}

	return (
		<div className="photo-edit">
			<Banner title="Pick your amazing photo 😎" />

			<div className="photo-edit__form">
				<PhotoForm
					onSubmit={handleSubmit}
					initialValues={initialValues}
					isAddMode={isAddMode}
				/>
			</div>
		</div>
	)
}

export default AddEditPage
