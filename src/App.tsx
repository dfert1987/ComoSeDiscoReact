import React  from 'react';
import { useLocation } from 'react-router-dom';
import { Router } from 'components';
// import { routes } from 'constants/routes';

type Props = {
  history: any;
};
export default function App({ history }: Props) {
  // const { pathname } = useLocation();
    return (
        <Router />
    );
  };
