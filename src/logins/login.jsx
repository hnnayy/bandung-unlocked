import React from 'react';
import './login.css';
import profile from '../assets/profile-simple-svgrepo-com.svg'


const Login = () => {
    return (
        <div className='flex flex-col w-full h-screen items-center justify-center'> 
            <div className='bg-white px-20 py-20 rounded-xl drop-shadow-xl'>
                <div className='flex '><img src={ profile} alt="icon" /></div>
                
                <h1 className='text-5xl font-semibold '>Selamat Datang</h1>
                <p className='font-medium text-lg text-gray-500 text-center mt-2'>silahkan login dengan akun anda</p>
                    <div className='mt-10'>
                        <div>
                            <label className='text-lg font-semibold '>Email</label>
                            <input 
                                className='w-full border-2 border-gray-100 rounded-xl p-3 bg-transparent' 
                                placeholder='masukkan email'/>
                        </div>
                        <div className='mt-5'>
                            <label className='text-lg font-semibold '>Password</label>
                            <input 
                                className='w-full border-2 border-gray-100 rounded-xl p-3 bg-transparent' 
                                placeholder='msukkan password' type='password'/>
                        </div>
                        <div className='forget-btn mt-2'>
                            <button className='font-medium text-base'>Lupa password</button>
                        </div>
                        <div className='login-btn mt-10 flex flex-col '>
                            <button className='py-3 bg-black text-lg font-bold rounded-xl'>
                                Login
                            </button>
                        </div>
                        <div className='flex mt-3 text-sm items-center justify-center'>
                            belum punya akun?<a href="">ayo daftar</a>
                        </div>
                    </div>
            </div>

        </div>
    );
};

export default Login;