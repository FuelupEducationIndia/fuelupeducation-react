import React from 'react'
import {AiFillCaretDown} from 'react-icons/ai'

const Card = (props) => {
    return (
        <div className='card'>
            <img src={props.img} alt='' className='card__img' />
            <div className='card__details'>
                <div className='card__content'>
                    <h3 className='card__heading'>{props.heading}</h3>
                    <p className='card__subHeading'>{props.subHeading}</p>
                    <p className='card__text'>{props.text}</p>
                </div>

                <div className='card__creator'>
                    <img
                        src={props.creatorImg}
                        alt=''
                        className='card__creator--img'
                    />
                    <div>
                        <p className='card__creator--name'>
                            Created by {props.creatorName}
                        </p>
                        <p className='card__creator--date'>
                            Created on {props.createdAt}
                        </p>
                    </div>
                </div>

                <div className='card__controls'>
                    <button className='card__controls--btn'>View</button>

                    <div className='card__controls--action'>
                        <p className='card__controls--actionText'>Action</p>
                        <AiFillCaretDown className='card__controls--down' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
