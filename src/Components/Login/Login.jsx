import React, { useEffect, useState } from "react";
import logo from "../../Images/logo.png";
import { userAtom } from '../../_state';
import { useRecoilValue } from 'recoil';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import "./Login.scss";
import axios from 'axios';
import { useUserActions } from '../../_actions';

const Login = ({history}) => {
    const [email_id, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [checked, isCheckedvalue] = useState(false);
    const user = useRecoilValue(userAtom);
    const userActions = useUserActions();

    useEffect(() => {
        if (user) {
            history.push('/');
        }
    }, []);

    // form validation rules
    const validationSchema = Yup.object().shape({
        username: Yup.string().required('Username is required'),
        password: Yup.string().required('Password is required')
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    // get functions to build form with useForm() hook
    const { register, handleSubmit, setError, formState } = useForm(formOptions);
    const { errors, isSubmitting } = formState;

    function onSubmit({ username, password }) {
        return userActions.login(username, password)
            .catch(error => {
                setError('apiError', { message: error });
            });
    }


    const handleclick = () => {
        let val = true;
        console.log(email_id, password, checked);
        if (email_id === "") {
            alert("Please provide an email id");
            val = false;
        } else if (password === "") {
            alert("Please provide a valid password");
            val = false;
        } else if (checked === false) {
            alert("Please accept the terms and conditions");
            val = false;
        }
        if (val === true) {
            // isloggedin(true);
            userActions.login(email_id, password).catch((error) => {
                console.log("errror");
            });
        }
    };

    return (
        <div className="mainLogin">
            <div className="leftSideLogin">
                <div className="loginHeading">
                    <h1>QAS.AI</h1>
                </div>
                <div className="loginLogo">
                    <img src={logo} alt="" />
                </div>
            </div>
            <div className="rightSideLogin">
                <div className="componentLogin">
                    <div className="componentLoginHeading">
                        <h2>Login</h2>
                    </div>
                    <div className="componentDetails">
                        <p className="enterDetails"> Please enter your details to continue. </p>
                    </div>
                    <div>
                    <div className="componentUsername">
                        <input type="text" onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email id" />
                    </div>
                    <div className="componentPassword">
                        <input type="password" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="componentTermsandconditions">
                        <input style={{ marginRight: "10px" }} onClick={(e) => isCheckedvalue(!checked)} type="checkbox" />
                        I agree with the terms and conditions
                    </div>
                    <div className="componentSignin">
                        <button disabled={isSubmitting} onClick={handleclick}>Sign in</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
