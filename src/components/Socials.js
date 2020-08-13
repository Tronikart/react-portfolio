import React from 'react';
import SOCIAL from '../data/social';

const Social = props => {
        const {image, link} = props.socials;
        return (
            <span>
                <a href={link}><img src={image} alt='social-profile' style={{width: 35, margin: 10}}/></a>
            </span>
        )
}

const Socials = () => (
    <div>
        <h3>Contact me</h3>
        <div>
            {
                SOCIAL.map(SOCIALI => (
                        <Social key={SOCIALI.id} socials={SOCIALI} />
                    ))
            }
        </div>
    </div>
)

export default Socials;