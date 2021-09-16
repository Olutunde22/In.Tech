import Cookies from 'js-cookie'

export const setCookie = (userId: string) => Cookies.set('OT', userId)

export const deleteCookie = () => Cookies.remove('OT')