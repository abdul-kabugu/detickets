import React, {useState} from 'react';

const UserProfile = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [userLocation, setLocation] = useState("")
    return <div className='user-profile-container'>

          
          <div className='user-profile-content'>
          <h2 className='market-title'>general info</h2>
              <div className='info-container'>
                  <h3 className='info-title'>name</h3>
                  <input name='name' type="text" value={name} onChange={e => setName(e.target.value) }   placeholder='Your user name'  className='name-imput'  />
              </div>

              <div className='info-container'>
                  <h3 className='info-title'>email</h3>
                  <input name='email' type="text" value={email} onChange={e => setEmail(e.target.value) }   placeholder='Your email'  className='name-imput'  />
              </div>

              <div className='info-container'>
                  <h3 className='info-title'>Where are you based?</h3>
                  <p className='info-description'> Feel free to input whatever you’re comfortable with (ex. city, country, etc).</p>
                  <input name='name' type="text" value={name} onChange={e => setName(e.target.value) }   placeholder='Your location'  className='name-imput'  />
              </div>
              <button className='save-info-btn'>save</button>
          </div>

    </div>;
}



export default UserProfile;