function UserProfile() {
  const profileStyle = {
    border: '2px solid #ccc',
    padding: '20px',
    borderRadius: '8px',
    textAlign: 'center',
    margin: '20px auto',
    width: '300px'
  };

  const imageStyle = {
    borderRadius: '50%',
    width: '100px',
    height: '100px'
  };

  return (
    <div style={profileStyle}>
      <img
        src="https://via.placeholder.com/100"
        alt="Profile"
        style={imageStyle}
      />
      <h2>Davis Kibet</h2>
      <p>Frontend Developer | React Enthusiast</p>
    </div>
  );
}

export default UserProfile;
