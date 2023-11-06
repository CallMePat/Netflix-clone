import React from 'react';
import "../../App.css";


export const LoginScreen = () => {
    return (
        <div className='loginscreen'>
            <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt=""
                    className='fixed left-0 w-32 object-contain pl-5 pt-5' />

                <div className='fixed right-5 top-5'>
                    <button className='cursor-pointer px-5 py-2 text-sm text-white bg-[#e50914]'>
                        Sign In
                    </button>
                </div>
                <div className='loginscreenGradient' />
            </div>
                <div className='loginScreenBody '>
                    <>
                        <h1>Unlimited films, TV programmes and more.</h1>
                        <h2>Watch anywhere, cancel at any time.</h2>
                        <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                    </>
                </div>

        </div >
    )
}
