import React  from 'react';
import { Router } from './Components';

type Props = {
  history: any;
};
export default function App({ history }: Props) {
    return (
      <Router />
    );
  };
