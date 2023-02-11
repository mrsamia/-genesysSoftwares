import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Components/Button';
import Footer from '../Components/Footer/Footer';
import Input from '../Components/Input';
import PageTitle from '../Components/PageTitle';

function RecoverPass(props) {
    return (
        <>
            <div className='vh-100 d-flex align-items-center justify-content-center '>
                <div>
                    <div>
                        <PageTitle name="Recover Password" />
                    </div>
                    <div>
                        <p className='text-center pb-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <form>
                        <div>
                            <Input placeholder="Email" />
                        </div>
                        <div className='pt-4 pb-5'>
                            <Input placeholder="Password" />
                        </div>
                        <div>
                            <Button name="Submit" />
                        </div>
                    </form>
                    <div className='d-flex justify-content-center'>
                        <Link to="#" className='text-decoration-none'> <p className='f-17'>Remember Password?</p></Link>
                        <Link to="/Login"><p className='f-17 pl-2'>Back to Login</p></Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default RecoverPass;