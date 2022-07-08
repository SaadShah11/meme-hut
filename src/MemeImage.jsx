import './App.css'

function MemeImage(props) {

  return (
    <div>
      <img className='imgStyle' src={props.imageSrc}></img>
    </div>
  )
}

export default MemeImage;
