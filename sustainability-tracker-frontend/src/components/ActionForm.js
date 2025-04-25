import React, { useState } from 'react';
import axios from 'axios';

const ActionForm = ({ onLog }) => {
  const [actionType, setActionType] = useState('');
  const [points, setPoints] = useState('');

  const logAction = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.post('/api/actions/log', { actionType, points }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setActionType('');
      setPoints('');
      onLog();
    } catch {
      alert('Failed to log action');
    }
  };

  return (
    <div>
      <input placeholder="Action Type" value={actionType} onChange={e => setActionType(e.target.value)} />
      <input type="number" placeholder="Points" value={points} onChange={e => setPoints(e.target.value)} />
      <button onClick={logAction}>Log Action</button>
    </div>
  );
};

export default ActionForm;
