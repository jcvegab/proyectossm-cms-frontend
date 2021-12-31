import Cookies from 'universal-cookie';

import { getCookie, setCookie, removeCookie, cleanCookies } from './cookies';

const cookies = new Cookies();

export { getCookie, setCookie, removeCookie, cleanCookies };

export default cookies;
