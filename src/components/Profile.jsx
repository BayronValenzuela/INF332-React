import ProfilePicture from '../assets/profile-image.png'

function Profile () {
  return (
    <div>
      <h1>Profile</h1>
      <div className='d-flex flex-column align-items-center'>
        <img src={ProfilePicture} style={{ maxHeight: '100px', borderRadius: '50%' }}/>
        <h2>Bastián Paz</h2>
        <h5>Voluntario</h5>
      </div>
    </div>
  )
}

export default Profile;