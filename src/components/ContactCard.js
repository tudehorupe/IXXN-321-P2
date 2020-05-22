import React from 'react';
// import hdy from "../assets/hydrangea-landing-image.jpg";

export default function ContactCard(props) {
    return (
        <div>
            <div class="cardBox">
                <div class="card">
                    <img src={props.userImg} />
                    <h3>{props.firstName} {props.lastName}</h3>
                    <p class="title">{props.jobTitle}</p>
                    <p>{props.region}</p>
                    <p>{props.phoneNumber}</p>
                </div>
            </div>
        </div>
    )
}