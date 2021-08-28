import {useState} from "react";
import emptyHeart from "../../images/heartEmptyBig.jpg"
import fullHeart from "../../images/heartFullBig.jpg"


function FavoriteButton(props) {

    const [isFavorite, setFavorite] = useState(props.favorite);

    function handleClick() {
        setFavorite((prevState) => {
            // handle kicking off the save favorite functions
            return !prevState;
        })
    }

    return (
        <img onClick={handleClick} src={isFavorite ? fullHeart : emptyHeart} alt={"favorite"}/>
    )
}

export default FavoriteButton;