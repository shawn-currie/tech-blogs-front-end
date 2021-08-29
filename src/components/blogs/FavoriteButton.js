import {useState} from "react";
import emptyHeart from "../../images/heartEmptyBig.jpg"
import fullHeart from "../../images/heartFullBig.jpg"


function FavoriteButton(props) {

    const [isFavorite, setFavorite] = useState(props.favorite);

    function persistFavorite() {
        fetch(`http://localhost:8080/tech-blogs/users/1/favorites/${props.id}`, {
            method: 'POST',
            mode: 'cors'
        }).then(response => {
            // update to the correct state?
        })
    }

    function removeFavorite() {
        fetch(`http://localhost:8080/tech-blogs/users/1/favorites/${props.id}`, {
            method: 'DELETE',
            mode: 'cors'
        }).then(response => {
            // update to the correct state?
        })
    }

    function handleClick() {
        setFavorite((prevState) => {
            if (prevState) {
                removeFavorite()
            } else {
                persistFavorite()
            }

            return !prevState;
        })
    }

    return (
        <img onClick={handleClick} src={isFavorite ? fullHeart : emptyHeart} alt={"favorite"}/>
    )
}

export default FavoriteButton;