import React from 'react';
import './MaxWidthContent.scss';

const MaxWidthContent = (props: any) => (
  <div className="max-width-content">
    {/* eslint-disable-next-line react/destructuring-assignment */}
    {props.children}
  </div>
);

export default MaxWidthContent;
