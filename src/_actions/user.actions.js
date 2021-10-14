import { useSetRecoilState } from 'recoil';

import { history } from '../_helpers';
import { authAtom, userAtom } from '../_state';
import axios from 'axios';
import Cookies from 'js-cookie'

export { useUserActions };


function useUserActions () {
    const setAuth = useSetRecoilState(authAtom);
    const setUser = useSetRecoilState(userAtom);

    return {
        login,
        logout,
        getMe
    }

    function login(email_id, password) {
        return axios.post('/api/auth/login', {'email_id': email_id, 'password': password}).then((response) => {
            if(response && response.status === 200 && response.data) {
                console.log(response);
                localStorage.setItem('access_token', response.data.access_token);
                console.log(response.data.user);
                localStorage.setItem('user', JSON.stringify(response.data.user));
                setAuth(response.data.access_token);
                console.log(response.data.user);
                setUser(response.data.user);
                history.push('/');
            }
        });
    }

    function logout() {
        localStorage.removeItem('user');
        localStorage.removeItem('access_token');
        setAuth(null);
        setUser(null);
        history.push('/login');
    }

    function getMe() {
        return axios.get('/api/me').then((response) => {
            if(response && response.status === 200) {
                console.log(Cookies.get('csrftoken'));
                axios.defaults.headers.post['X-CSRFToken'] = Cookies.get('csrftoken');
                console.log(response.data.user);
                setUser(response.data.user)
            }
        }).catch((error) => {
            console.log();
        });
    }
}
