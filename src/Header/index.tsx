import React from 'react';
import './header.css';

type HeaderType = {
  title: string;
};

export const Header = (props: HeaderType) => {
  const { title } = props;
  return <h2 className="h2">{title}</h2>;
};
