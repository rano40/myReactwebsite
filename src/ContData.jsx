import React from 'react';

const ContData = (props) => {
    return (
        <>
            <div className='container contact_div'>
                <div className='row'>
                    <div className='col-md-6 col-10 mx-auto'>
                        <form onSubmit={formSubmit}>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">{props.label}</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" name='fullName'
                                    value={data.fullName} onChange={inputEvent} placeholder="Enter Your Name" autoComplete='off' required />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}


export default ContData;