import React from 'react';
import './footer.css';

function Footer(props) {
  const menu = [
    {
      title: "Home",
    },
    {
      title: "Gift Card",
    },
    {
      title: "Seasonal",
    },
    {
      title: "Kid & Nursery",
    },
    {
      title: "Pet",
    },
    {
      title: "Gift Registry",
    },
  ];
  const customerCare = [
    {
      title: "Privacy policy",
    },
    {
      title: "Return policy",
    },
    {
      title: "Contact Us",
    },
    {
      title: "Shipping Policy",
    }
  ];
  const about = [
    {
      title: "Our Story",
    },
    {
      title: "Terms Of Services",
    },
    {
      title: "Articles",
    },
  ];
  return (
    <div className='bg-color'>
      <div className='ps-5 pe-5 pt-95 pb-40'>
        <div className='row'>
          <div className='col-sm-12 col-lg-3 mq-cnter'>
            <div>
              <div className='mq-cnter'>
                <img src={require('../../Images/flogo.jpg')} />
              </div>
              <div className='pt-4 mq-cnter'>
                <p>By completing this form you're signing up to receive our emails and can unsubscribe at any time</p>
              </div>
            </div>
          </div>
          <div className=' col-sm-12 col-lg-1 mq-cnter pt-mq'>
            <div>
            <div>
              <h5 className='footer-header pb-2'>Menu</h5>
            </div>
            {
              menu.map((item) => (
                <div>
                  <p>{item.title}</p>
                </div>
              ))
            }
            </div>
          </div>
          <div className='col-sm-12 col-lg-2 d-flex justify-content-center pt-mq'>
            <div>
              <div>
                <h5 className='footer-header pb-2'>customer care</h5>
              </div>
              {
                customerCare.map((item) => (
                  <div>
                    <p>{item.title}</p>
                  </div>
                ))
              }
            </div>
          </div>
          <div className='col-sm-12 col-lg-2 d-flex justify-content-center pt-mq'>
            <div>
              <div>
                <h5 className='footer-header pb-2'>about us</h5>
              </div>
              {
                about.map((item) => (
                  <div>
                    <p>{item.title}</p>
                  </div>
                ))
              }
            </div>
          </div>
          <div className='col-sm-12 col-lg-4 d-flex justify-content-end mq-cnter pt-mq'>
            <div>
              <div>
                <h5 className='footer-header pb-2 mq-cnter'>SUBSCRIBE TO OUR NEWSLETTER</h5>
              </div>
              <div className='mq-cnter'>
                <p>Signup for our newsletter to stay up to date on sales and events.</p>
              </div>
              <div className='py-3 mq-cnter'>
                <input type="email" placeholder='Email' className='footer-email' />
              </div>
              <div className='mq-cnter'>
                <p>By completing this form you're signing up to receive our emails and can unsubscribe at any time</p>
              </div>
            </div>
          </div>
        </div>
      </div>





    <div className='ps-5 pe-5'>
    <div className='row '>
        <div className='col-sm-12 col-lg-6 d-flex align-items-end mq-cnter'>
         <div>
         <img src={require('../../Images/fb.jpg')} />
          <img src={require('../../Images/tw.jpg')} />
          <img src={require('../../Images/in.jpg')} />
         </div>
        </div>
        <div className='col-sm-12 col-lg-6 d-flex justify-content-end mq-cnter pt-mq'>
        <div>
        <select className="select-footer">
            <option selected>United States (USD $)</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <div className='pt-2 d-flex justify-content-end'>
        <div>
        <img src={require('../../Images/vi.jpg')} />
          <img src={require('../../Images/am.jpg')} />
          <img src={require('../../Images/pa.jpg')} />
          <img src={require('../../Images/ame.jpg')} />
        </div>
          </div>
        </div>
        </div>

      </div>
      <hr></hr>
      <div className='d-flex justify-content-center'>
        <p>© Copyright 2022 by Cole & Son. All rights reserved.</p>
      </div>
    </div>
    </div>
  );
}

export default Footer;