import React from 'react';
import { Typography } from 'antd';
import { useSelector } from 'react-redux';

const { Title, Text } = Typography;

const Preview = () => {
  const { headline, subheadline, body, font, color } = useSelector(state => state);

  return (
    <div style={{ fontFamily: font, color }}>
      <Title>Ap</Title>
    </div>
  );
};

export default Preview;

