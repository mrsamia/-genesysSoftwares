// import React from 'react';
// import { Link } from 'react-router-dom';

// import Button from '../Components/Button';
// import Footer from '../Components/Footer/Footer';
// import Input from '../Components/Input';
// import PageTitle from '../Components/PageTitle';

// function Login(props) {
//     return (
//         <>
//             <div className='vh-100 d-flex align-items-center justify-content-center '>
//                 <div>
//                     <div>
//                         <PageTitle name="LOGIN" />
//                     </div>
//                     <form className='d-flex justify-content-center'>
//                         <div>
//                             <div>
//                                 <Input placeholder="Email" />
//                             </div>
//                             <div className='pt-4 pb-5'>
//                                 <Input placeholder="Password" />
//                             </div>
//                             <div>
//                                 <Button name="LOGIN" />
//                             </div>
//                         </div>
//                     </form>
//                     <div className='d-flex justify-content-center'>
//                         <Link to="/CreateAccount" className='text-decoration-none'><p className='f-17'>Create account /</p></Link>
//                         <Link to="/recoverPass" className='text-decoration-none'><p className='f-17 pl-2'>Forgot your password?</p></Link>
//                     </div>
//                 </div>
//             </div>
//             <Footer />
//         </>
//     );
// }

// export default Login;
import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';

import Button from '../Components/Button';
import Footer from '../Components/Footer/Footer';
import Input from '../Components/Input';
import PageTitle from '../Components/PageTitle';

function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password, "cl");
        if (!email) {
            setEmailError("Email is required");
            return;
        } else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            setEmailError("Email is not valid");
            return;
        } else {
            setEmailError("");
        }

        if (!password) {
            setPasswordError("Password is required");
            return;
        } else {
            setPasswordError("");
        }

        if (emailError === '' && passwordError === '') {
            navigate('/UserList');

        }
    };

    return (
        <>
            <div className='vh-100 d-flex align-items-center justify-content-center '>
                <div>
                    <div>
                        <PageTitle name="LOGIN" />
                    </div>
                    <form className='d-flex justify-content-center' onSubmit={handleSubmit}>
                        <div>
                            <div>
                                <Input
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <p className="error">{emailError}</p>
                            </div>
                            <div className='pt-4 pb-5'>
                                <Input
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <p className="error">{passwordError}</p>
                            </div>
                            <div>
                                <Button name="LOGIN" type="submit" />
                            </div>
                        </div>
                    </form>
                    <div className='d-flex justify-content-center'>
                        <Link to="/CreateAccount" className='text-decoration-none'><p className='f-17'>Create account /</p></Link>
                        <Link to="/recoverPass" className='text-decoration-none'><p className='f-17 pl-2'>Forgot your password?</p></Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
export default Login;