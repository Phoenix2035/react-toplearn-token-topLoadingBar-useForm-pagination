import React, { useRef } from "react";
import { registerUser } from "../../services/userServices";

import axios from "axios";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form"

const Register = () => {
    const { register, handleSubmit } = useForm()
    const inputFocus = useRef()


    const onSubmit = async (data, e) => {
        try {
            const { status } = await registerUser(data)
            console.log(data);
            if (status === 200) {
                toast.success("کاربر با موفقیت ساخته شد", { position: "top-right", closeOnClick: true })
                inputFocus.current.focus()
                e.target.reset()
            }

        } catch (error) {
            toast.error("مشکلی پیش آمده", {
                position: "top-right",
                closeOnClick: true
            })
        }
    }



    return (
        <main className="client-page">
            <div className="container-content">
                <header>
                    <h2> عضویت در سایت </h2>
                </header>

                <div className="form-layer">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="input-group">
                            <span className="input-group-addon" id="username">
                                <i className="zmdi zmdi-account"></i>
                            </span>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="نام و نام خانوادگی"
                                ref={(e) => {
                                    register(e)
                                    inputFocus.current = e
                                }}
                                name="fullname"
                            />
                        </div>

                        <div className="input-group">
                            <span
                                className="input-group-addon"
                                id="email-address"
                            >
                                <i className="zmdi zmdi-email"></i>
                            </span>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="ایمیل"
                                ref={register}
                                name="email"
                            />
                        </div>

                        <div className="input-group">
                            <span className="input-group-addon" id="password">
                                <i className="zmdi zmdi-lock"></i>
                            </span>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="رمز عبور"
                                ref={register}
                                name="password"
                            />
                        </div>

                        <div className="accept-rules">
                            <label>
                                <input type="checkbox"
                                /> قوانین و
                                مقررات سایت را میپذیرم{" "}
                            </label>
                        </div>

                        <div className="link">
                            <a href="">
                                {" "}
                                <i className="zmdi zmdi-assignment"></i> قوانین
                                و مقررات سایت !
                            </a>
                            <a href="">
                                {" "}
                                <i className="zmdi zmdi-account"></i> ورود به
                                سایت{" "}
                            </a>
                        </div>

                        <button className="btn btn-success">
                            {" "}
                            عضویت در سایت{" "}
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default Register;
