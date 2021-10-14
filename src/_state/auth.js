import { atom } from 'recoil';

const authAtom = atom({
    key: 'access_token',
    default: null
});

export { authAtom };
