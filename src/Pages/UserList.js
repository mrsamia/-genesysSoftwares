import React from 'react';
import Footer from '../Components/Footer/Footer';

function UserList(props) {
    return (
        <>
            <div className='container vh-100 d-flex align-items-center justify-content-center'>

                <table class="table caption-top">
                    <caption className='f-17'>User List</caption>
                    <thead>
                        <tr>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Email</th>
                            <th scope="col" className='d-flex justify-content-end'>Password</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td scope="row" className='pt-3 pb-3'>Mark</td>
                            <td className='pt-3 pb-3'>Mark</td>
                            <td className='pt-3 pb-3'>Otto</td>
                            <td className='pt-3 pb-3 d-flex justify-content-end'> @mdo</td>
                        </tr>
                        <tr>
                            <td scope="row" className='pt-3 pb-3'>Mark</td>
                            <td className='pt-3 pb-3'>Mark</td>
                            <td className='pt-3 pb-3'>Otto</td>
                            <td className='pt-3 pb-3 d-flex justify-content-end'> @mdo</td>
                        </tr>
                        <tr>
                            <td scope="row" className='pt-3 pb-3'>Mark</td>
                            <td className='pt-3 pb-3'>Mark</td>
                            <td className='pt-3 pb-3'>Otto</td>
                            <td className='pt-3 pb-3 d-flex justify-content-end'> @mdo</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Footer />
        </>
    );
}

export default UserList;