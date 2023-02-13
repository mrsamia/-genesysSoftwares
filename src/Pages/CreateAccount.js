import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Components/Button';
import Footer from '../Components/Footer/Footer';
import Input from '../Components/Input';
import PageTitle from '../Components/PageTitle';

function CreateAccount(props) {
    return (
        <>
            <div className='cal d-flex align-items-center justify-content-center '>
                <div>
                    <div>
                        <PageTitle name="CREATE ACCOUNT" />
                    </div>
                    <div>
                        <p className='text-center pb-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <form className='d-flex justify-content-center'>
                       <div>
                       <div>
                            <Input placeholder="First name" />
                        </div>
                        <div className='pt-3 pb-3'>
                            <Input placeholder="Last name" />
                        </div>
                        <div>
                            <Input placeholder="Email" />
                        </div>
                        <div className='pt-4 pb-5'>
                            <Input placeholder="Password" />
                        </div>
                        <div>
                            <Button name="CREATE" />
                        </div>
                       </div>
                    </form>
                    <div className='d-flex justify-content-center pt-2'>
                        <p className='f-17'>Already have an account?</p>
                        <Link to="/Login"> <p className='f-17 ps-2'>Back to Login</p></Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default CreateAccount;