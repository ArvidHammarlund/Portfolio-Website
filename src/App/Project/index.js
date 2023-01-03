
export default ({title, video, link, text}) => {
  return (
    <div>
      <video>
        <source src={video} type="video/mp4" />>
      </video>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  )
}
