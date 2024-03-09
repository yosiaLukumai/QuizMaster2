import picFile from './assets/pic.jpg'

function Card(){

return(
    <div className="card">
        <img className='card-image' src={picFile} alt="profile picture"></img>
        <h2 className='card-title'>Cool Pics</h2>
        <p className='card-text'>all cool pics</p>
    </div>
); 
}

export default Card