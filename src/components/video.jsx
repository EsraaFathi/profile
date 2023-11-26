
import './3 main/Main.css'

function Video({item}){
    return(
        <>

<div >
<video autoPlay className="customvideo"  poster={item.imgpath} controls>
        <source src={item.videoPath}  />
      </video>

</div>

        </>
    )
}
export default Video;