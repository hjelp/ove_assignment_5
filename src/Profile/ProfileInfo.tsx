const ProfileInfo = (props: { uname: string }) => {


 return (
    <> 
      <h4 id="profileUsername">
        {props.uname}
      </h4>
    </>
)



}

export default ProfileInfo;