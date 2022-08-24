const Image = ({ source, classes, alt }) => {
    return <img src={source} className={`image ${classes}`} alt={alt} />
}
export default Image;