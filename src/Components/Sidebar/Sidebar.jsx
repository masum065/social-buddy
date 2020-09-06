import React from 'react';
import './Sidebar.css';
const Sidebar = () => {
  const latestPost = ['Sports', 'Travel', 'Flim', 'Art', 'Programming'];
  return (
    <div style={{ background: 'white' }}>
      <h3 className='bartitle'>Latest Posts</h3>
      <ul className='side-items'>
        {latestPost.map((post, index) => (
          <li key={index}>{post}</li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
