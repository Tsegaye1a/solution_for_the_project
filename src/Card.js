import './Card.css';
const Card = ({ userData }) => {
    return (
        <div className="card">
            
            <div className="card__body">
                <div>Name: {userData.name} </div>
                <div>Brewery Type: {userData.brewery_type}</div> 
                <div>City: {userData.city} </div>   
                
            </div>

        </div>
    )
};

export default Card;