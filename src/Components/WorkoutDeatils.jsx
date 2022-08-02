import React from 'react';
import { useParams } from 'react-router-dom';

const WorkoutDeatils = () => {
  const { userId } = useParams();
  return <div>Workout Details of {userId}</div>;
};

export default WorkoutDeatils;
