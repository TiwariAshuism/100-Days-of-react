import React from 'react'
import "./Contact.css"

function Contact() {
    const frontCard = document.querySelector(".front_card");
    const signUpBtn = document.querySelector(".signup_msg_btn");
    const loginBtn = document.querySelector(".login_msg_btn");
    const userEmailInp = document.querySelector(".user_email");
    const userFNameInp = document.querySelector(".user_full_name");

    signUpBtn.addEventListener("click", () => {
        frontCard.classList.add("front_card_signup");
        userFNameInp.focus();
    });

    loginBtn.addEventListener("click", () => {
        frontCard.classList.remove("front_card_signup");
        userEmailInp.focus();
    });


    return (
        <>
            <div className="container">
                <div className="front_card">
                    <form action="#" className="login_form">
                        <input type="email" className="user_email" placeholder="Email" autoFocus/>
                        <input type="password" className="user_password" placeholder="Password"/>
                            <button className="login_btn">LogIn</button>
                    </form>
                    <form action="#" className="signup_form">
                        <input type="text" className="user_full_name" placeholder="Full Name"/>
                            <input type="email" className="user_email" placeholder="Email"/>
                            <input type="password" className="user_password" placeholder="Password"/>
                                <button className="login_btn">SignUp</button>
                    </form>
                </div>
                <div className="back_card">
                    <div className="login_msg">
                        <h2>Have account?</h2>
                        <button className="login_msg_btn">LogIn</button>
                    </div>
                    <div className="signup_msg">
                        <h2>Do not have account?</h2>
                        <button className="signup_msg_btn">SignUp</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Contact