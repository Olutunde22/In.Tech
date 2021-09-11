import { lazy } from 'react';

export const Home = lazy(() => import('./components/Home'));

export const Login = lazy(() => import('./components/auth/Login'));

export const Signup = lazy(() => import('./components/auth/Signup'));