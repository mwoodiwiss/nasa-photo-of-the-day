import React, { useState } from "react";

function PhotoCard(props) {
    return (
        <div class='photo-card'>
            <img class='image' src='#' alt='NASA image of the day'></img>

            <div class='text'>
                <h2 class='title-text'>yo</h2>
                <h3 class='text-content'>sup</h3>
                <a href="#">ayyy</a>
            </div>
        </div>
    );
}

export default PhotoCard;