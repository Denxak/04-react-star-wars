import React from 'react';
import { friends } from '../data/friendsData';

const FriendImage = ({ src, className = '', alt }) => (
    <img className={`col-4 p-1 ${className}`} src={src} alt={alt} />
);

function SectionTeam() {
    return (
        <section className="float-end w-50 row border rounded-bottom-4 mx-2">
            <h2 className="col-12 text-center">Dream Team</h2>
            {friends.map((friend, index) => (
                <FriendImage
                    key={index}
                    src={friend.src}
                    className={friend.className}
                    alt={`Friend ${index + 1}`}
                />
            ))}
        </section>
    );
}

export default SectionTeam;
