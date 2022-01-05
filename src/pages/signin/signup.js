import React from 'react';
import '../signin/signin.css'
const signup = () => {
    return (
        <div className='smain'>
            <div className='scontainer'>
                <div>

                    <div className='head1'>
                        <ul className='Google1'>
                            <li style={{ color: 'blue' }}>F</li>
                            <li style={{ color: 'red' }}>u</li>
                            <li style={{ color: 'yellowgreen' }}>n</li>
                            <li style={{ color: 'blue' }}>d</li>
                            <li style={{ color: 'green' }}>o</li>
                            <li style={{ color: 'red' }}>o</li>
                        </ul>
                        <h4>Sign in</h4>
                        <h5>Use your Google Account</h5>
                    </div>
                    <div style={{display:'flex',flexDirection:'column',alignItems:'baseline',marginTop:'20px'}}>
                        <input className='sinput1' placeholder='Email or phone'></input>
                        <input className='sinput1' placeholder='password'/>
                        <button style={{marginBottom:'20px'}}>Forget Password?</button>
                        <h5>Not your computer?Use Guest mode to sign in privately</h5>
                        <button>Learn more</button>
                    </div>
                    <div style={{display:'flex',justifyContent:'space-between',marginTop:'20px'}}>
                        <button>Create account</button>
                        <button className='snextbtn1'>Next</button>
                    </div>
                </div>
                
            </div>
            <div>Welcome</div>
        </div>
    );
};

export default signup;