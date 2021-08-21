import React from 'react'
import Banner from 'components/Banner'
import PhotoList from 'features/Photo/components/PhotoList'
import Images from 'constants/images'
import { Link, useHistory } from 'react-router-dom'
import { Container } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import { removePhoto } from 'features/Photo/photoSlice'

MainPage.propTypes = {}

function MainPage(props) {
	const dispatch = useDispatch()
	const photos = useSelector(state => state.photos)
	const history = useHistory()

	function handlePhotoEditClick(photo) {
		history.push(`/photos/${photo.id}`)
	}

	function handlePhotoRemoveClick(photo) {
		dispatch(removePhoto(photo))
	}

	return (
		<div className="photo-main">
			<Banner title="Your awesome photos 🎉" backgroundUrl={Images.ORANGE_BG} />

			<Container className="text-center">
				<div className="py-5">
					<Link to="/photos/add">Add new photo</Link>
				</div>

				<PhotoList
					photoList={photos}
					onPhotoEditClick={handlePhotoEditClick}
					onPhotoRemoveClick={handlePhotoRemoveClick}
				/>
			</Container>
		</div>
	)
}

export default MainPage
