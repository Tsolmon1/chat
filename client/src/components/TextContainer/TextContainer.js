<<<<<<< HEAD
import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div>
      <h1>Chat app <span role="img" aria-label="emoji">💬</span></h1>

    </div>
    {
      users
        ? (
          <div>
            <h1>Чатлаж байна::</h1>
            <div className="activeContainer">
              <h2>
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                    {name}
                    <img alt="Online Icon" src={onlineIcon}/>
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
);

=======
import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div>
      <h1>Chat app <span role="img" aria-label="emoji">💬</span></h1>

    </div>
    {
      users
        ? (
          <div>
            <h1>Чатлаж байна::</h1>
            <div className="activeContainer">
              <h2>
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                    {name}
                    <img alt="Online Icon" src={onlineIcon}/>
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
);

>>>>>>> c9fce104ee8458b832f891055dc7f1b39edaa9e2
export default TextContainer;