import React from 'react';
import { userAtom } from '../../_state';
import { useRecoilValue } from 'recoil';

const Home = () => {
    const user = useRecoilValue(userAtom);
    return (
        <div>
            Hi {user.first_name}, Welcome to Qas.ai
        </div>
    );
}

export default Home;
