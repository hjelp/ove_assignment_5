import './Profile.css';
import ProfileHistory from "./ProfileHistory"
import Logout from "./Logout"






//10 last translation for current user
//Only need to display the text
//Button to clear the translations(delete from browser local storage)
//Return 
function Profile() {
    return (
    <>
        <Logout></Logout>
        <ProfileHistory></ProfileHistory>
    </>)
}

export default Profile;