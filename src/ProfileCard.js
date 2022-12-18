/* function ProfileCard(props) {
    return (
        <div>
            <div>Title is: {props.title}</div>
            <div>Handle is: {props.handle}</div>
        </div>
    )
} */

//DESTRUCTURING THE PROPERTIES MAKE IT LOOK CLEANER
function ProfileCard({ title, handle, image, alt }) {
    return (
        <div>
            <img alt={alt} src={image} />
            <div>Title is: {title}</div>
            <div>Handle is: {handle}</div>
        </div>
    )
}

export default ProfileCard;