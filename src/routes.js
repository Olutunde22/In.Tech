import { lazy } from 'react';

export const Landing = lazy(() => import('./components/Landing'));

export const Login = lazy(() => import('./components/auth/Login'));

export const Signup = lazy(() => import('./components/auth/Signup'));

export const Home = lazy(() => import('./components/Home'))

export const AboutUs = lazy(() => import('./components/AboutUs'))

export const Contact = lazy(() => import('./components/Contact'))

