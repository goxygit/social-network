import ProfileStatusWithHook from './profileStatusWithHook.tsx'
import Preloader from '../../common/preloader'
import profileLogo from '../../img/profileLogo.gif'
import c from '../content.module.css'
const Profile = (props) =>{
    if(!props.profile){
        return(
            <Preloader/>
        )
    }
    const pushPhotos =(e)=>{
        if(e.target.files.length){
            props.setPhoto(e.target.files[0])
        }
    }
    return(
        <div>
    <div> <img alt='ky' className={c.back} src="https://images.ctfassets.net/hrltx12pl8hq/5KiKmVEsCQPMNrbOE6w0Ot/341c573752bf35cb969e21fcd279d3f9/hero-img_copy.jpg?fit=fill&w=800&h=300" /></div>
    <div className={c.logoBar}>
       {props.profile.photos.large
       ? <img alt='ku' className={c.prof} src={props.profile.photos.large} />
       : <img alt='ku' className={c.prof} src={profileLogo} />} 
       {props.isOwner && <input type='file'onChange={pushPhotos}/> }
        <div>
            <h1>{props.profile.fullName}</h1>
            <ProfileStatusWithHook getStatus={props.status} updateStatus={props.updateStatus}/>
            <p>{props.profile.aboutMe}</p>
            <p>{props.profile.lookingForAJobDescription}</p>
            <p>Skills: React</p>
        </div>
    </div>
    </div>)
}
export default Profile