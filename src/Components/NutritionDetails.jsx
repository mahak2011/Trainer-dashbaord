import React from 'react';
import { useParams } from 'react-router-dom';

const NutritionDeatils = () => {
  const { userId } = useParams();
  return <div>Nutrition Details of {userId}</div>;
};

export default NutritionDeatils;
