function ProfileCard({ title, handle, image, alt, description }) {
    return (
        <div className='card' style={{ minHeight: "100%" }}>

            {/* Logo Image */}
            <div className='card-image'>
                <fugure className='image is-1by1'>
                    <img alt={alt} src={image} />
                </fugure>
            </div>

            {/* Card Text */}
            <div className="card-content">
                <div className="media-content">
                    <p className="title is-4">{title}</p>
                    <p className="subtitle is-6">{handle}</p>
                </div>
                <div className="content">
                    {description}
                </div>
            </div>

        </div>
    )
}

export default ProfileCard;