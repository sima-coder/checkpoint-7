import React from 'react';
import PropTypes from 'prop-types';

const Profile = (props) => {
  
    return(
        <div>
            <h1 style={{color:"red", textAlign:"center"}}>Profile</h1>
            <div style={{marginLeft:"50px"}}>
                {props.children}
                <p><strong style={{color:"#2D2F44",fontSize:"1.1em"}}>FullName : </strong>{props.fullname}</p>
                <p><strong style={{color:"#2D2F44",fontSize:"1.1em"}}>Biography : </strong>{props.bio}</p>
                <p><strong style={{color:"#2D2F44",fontSize:"1.1em"}}>Profession : </strong>{props.profession}</p>
                {/* <a style={{color:"red"}} href="/" onClick={handleName}>Click here</a>  */}
                {props.handleName(props.fullname)}
               
            </div>
        </div>
    );
};

Profile.defaultProps = {
    fullname:  "Tom Cruise",
    bio: "Tom Cruise is the star of several box-office hits, including 'Risky Business,' 'A Few Good Men,' 'The Firm,' 'Jerry Maguire' and the 'Mission: Impossible' franchise.",
    profession: "Actor",
};

Profile.propTypes = {
    fullname: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
};


export default Profile;