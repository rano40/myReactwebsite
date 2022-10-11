import React, { useState } from 'react';

const Contact = () => {
  const [data, setData] = useState({
    fullName: '',
    phone: '',
    email: '',
    message: '',
  });

  const inputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    alert(`Succes! My Name is ${data.fullName}. My Phone is ${data.phone} and email ${data.email} and here I want to say ${data.message}`);
  }
  return (
    <>
      <div className='my-5'>
        <h1 className='text-center'>Contact Us</h1>
      </div>
      <div className='container contact_div'>
        <div className='row'>
          <div className='col-md-6 col-10 mx-auto'>
            <form onSubmit={formSubmit}>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"> FullName </label>
                <input type="text" class="form-control" id="exampleFormControlInput1" name='fullName'
                  value={data.fullName} onChange={inputEvent} placeholder="Enter Your Name" autoComplete='off' required />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Phone No</label>
                <input type="number" class="form-control" id="exampleFormControlInput1" name='phone'
                  value={data.phone} onChange={inputEvent} placeholder="Phone No" autoComplete='off' required />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" name='email'
                  value={data.email} onChange={inputEvent} placeholder="name@example.com" autoComplete='off' required />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" name='message'
                  value={data.message} onChange={inputEvent} rows="3"></textarea>
              </div>
              <div class="col-12">
                <button class="btn btn-outline-primary" type="submit">Submit form</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
