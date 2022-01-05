import React, { useState } from 'react';
import "./login.css"
import img from '../../asserts/account.svg'
const Login = () => {

    const [detail, setDetail] = useState({ firstName: "", lastName: "", email: "", password: "", confirmPassword: "" })
    const check = () => {
        if (detail.firstName !== "" && detail.lastName !== "" && detail.email !== ""
            && detail.password !== "" && detail.confirmPassword !== "" && detail.password == detail.confirmPassword) {
            console.log("success");
            alert("success")
        } else alert('failure')


    }
    const [showPassword, setPassword] = useState(false)
console.log(showPassword);

    console.table(detail);
    return (<>
        <div className='main'>
            <div className='container'>
                <div className='content'>

                    <div>

                        <div>

                            <ul className='Google'>
                                <li style={{ color: 'blue' }}>F</li>
                                <li style={{ color: 'red' }}>u</li>
                                <li style={{ color: 'yellowgreen' }}>n</li>
                                <li style={{ color: 'blue' }}>d</li>
                                <li style={{ color: 'green' }}>o</li>
                                <li style={{ color: 'red' }}>o</li>
                            </ul>
                            <h3>Create Your Google Account</h3>
                        </div>
                        <div className='name'>

                            <input className='fname' placeholder='First name' onChange={(e) => setDetail({ ...detail, firstName: e.target.value })}></input>
                            <input placeholder='Lastname' onChange={(e) => setDetail({ ...detail, lastName: e.target.value })}></input>

                        </div>
                        <div>
                            <input className='mail' placeholder='Username' onChange={(e) => setDetail({ ...detail, email: e.target.value })} ></input>
                            <p>you can use letters,numbers&periods</p>
                        </div>

                        <button className='mailbtn'>Use my current email address instead</button>
                        <div className='pwdc'>

                            <input className='pwd'type={showPassword?"text":"password"} placeholder='password' onChange={(e) => setDetail({ ...detail, password: e.target.value })}></input>
                            <input placeholder='Confirm'type={showPassword?"text":"password"} onChange={(e) => setDetail({ ...detail, confirmPassword: e.target.value })}></input>

                        </div>
                        <p>use 8 or more charcter with a mx of letters,numbers & symbols</p>
                        <input type="checkbox" onClick={()=>setPassword(prev=>!prev)}></input><span>Show password</span>
                        <div className='lbtn'>
                            <button style={{ background: 'none', color: 'blue', border: 'none' }}>Sign in instead</button>
                            <button onClick={check} style={{ backgroundColor: 'blue', color: 'white', width: '60px' }}>Next</button>
                        </div>


                    </div>
                    <div>
                        <img className='mainimg' src={img}></img>
                    </div>
                </div>

            </div>
            <div>
                welcome pending
            </div>
        </div>
    </>
    );
};

export default Login;