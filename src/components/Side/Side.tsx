import React from 'react';
import './Side.scss';
import { Card } from 'antd';

const SideWidget = () => {
  const text = `You can put anything you want inside 
    of these side widgets. They are easy to use, 
    and feature the Bootstrap 5 card component!`;
  return (
    <Card className="sideWidget" title="Side Widget">
      {text}
    </Card>
  );
};

export default SideWidget;
