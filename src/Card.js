import './Card.css';
const Card = ({ userData }) => {
    return (
        <div className="card">
            
            <div className="card__body">
                <div><b>Name: </b>{userData.name} </div>
                <div><b>Brewery Type: </b>{userData.brewery_type}</div> 
                <div><b>City: </b>{userData.city} </div> 
                <div class="vertical-center">
                    <button ><b>View</b></button>
                    
                </div>
                
            </div>

        </div>
    )
};

export default Card;