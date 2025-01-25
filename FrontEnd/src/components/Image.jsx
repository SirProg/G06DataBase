export default function Image({src, alt, width, height, className}) {
    return (
        <div className="">
            <img className={className + " bg-cover"} src={src} alt={alt} width={width} height={height}/>
        </div>
    )
}