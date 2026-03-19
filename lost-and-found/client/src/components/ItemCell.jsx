import './ItemCell.css'


export default function ItemCell({image,item,category,dateSubmitted,storage}){
    console.log(image);
    return(
       <div className="cellContainer">
            
            <div className='img_container'><img src={image}></img></div>
            <div className="details">
                <h6><b>Item: </b>{item}</h6>
                <h6><b>Categoty: </b>{category}</h6>
                <h6><b>Date_Found: </b>{dateSubmitted}</h6>
                <h6><b>Stored_at: </b>{storage}</h6>
            </div>
       </div>
    );
}