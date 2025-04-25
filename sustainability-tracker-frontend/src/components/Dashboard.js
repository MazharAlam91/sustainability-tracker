import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ActionForm from './ActionForm';

const Dashboard = () => {
  const [actions, setActions] = useState([]);

  const fetchActions = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.get('http://localhost:5000/api/actions/my-actions', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setActions(res.data);
    } catch {
      alert('Error fetching actions');
    }
  };

  useEffect(() => {
    fetchActions();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <ActionForm onLog={fetchActions} />
      <h3>Your Actions</h3>
      <ul>
        {actions.map((a, idx) => (
          <li key={idx}>{a.actionType} - {a.points} points</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
