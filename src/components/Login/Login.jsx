import React, {useState} from "react";
import {loginUser} from "../../services/userServices";

import {toast} from "react-toastify";
import {useForm} from "react-hook-form";
import {Link, useHistory} from "react-router-dom";
import {Helmet} from "react-helmet";

function Login() {
    const [isLoading, setIsLoading] = useState(false)

    const {register, handleSubmit, errors} = useForm();
    const history = useHistory()


    const onLogin = async (dataInputs, e) => {
        try {
            setIsLoading(true)
            const {data, status} = await loginUser(dataInputs)
            if (status === 200) {
                toast.success("ورود موفقیت آمیز بود", {position: "top-right", closeOnClick: true})
                localStorage.setItem("token", data.token)
                setIsLoading(false)
                history.replace("/")
                e.target.reset()
            }

        } catch (error) {
            setIsLoading(false);
            toast.error("مشکلی پیش آمده", {
                position: "top-right",
                closeOnClick: true
            })
        }
    }

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <main className="client-page">
            <div className="container-content">
                <header>
                    <h2> ورود به سایت </h2>
                </header>

                <Helmet>
                    <title>ورود به سایت</title>
                </Helmet>

                <div className="form-layer">
                    <form onSubmit={handleSubmit(onLogin)}>

                        <div className="input-handler">
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
                                    ref={register({
                                        required: true,
                                        pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                                    })}
                                    name="email"
                                />
                            </div>
                            {errors.email && errors.email.type === "required" &&
                            <small>این فیلد اجباری است</small>}
                            {errors.email && errors.email.type === "pattern" &&
                            <small>ایمیل نوشته شده صحیح نمی باشد</small>}
                        </div>

                        <div className="input-handler">
                            <div className="input-group">
                            <span className="input-group-addon" id="password">
                                <i className="zmdi zmdi-lock"></i>
                            </span>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="رمز عبور "
                                    ref={register({required: true, minLength: 6, maxLength: 12})}
                                    name="password"
                                />
                            </div>
                            {errors.password && errors.password.type === "required" &&
                            <small>این فیلد اجباری است</small>}
                            {errors.password && errors.password.type === "minLength" &&
                            <small>حداقل باید 6 کاراکتر وارد کنید</small>}
                            {errors.password && errors.password.type === "maxLength" &&
                            <small>حداکثر می توانید 12 کاراکتر وارد کنید</small>}
                        </div>

                        <div className="remember-me">
                            <label>
                                <input type="checkbox" name=""/> مرا بخاطر
                                بسپار{" "}
                            </label>
                        </div>

                        <div className="link">
                            <a href="">
                                {" "}
                                <i className="zmdi zmdi-lock"></i> رمز عبور خود
                                را فراموش کرده ام !
                            </a>
                            <Link to="/register">
                                {" "}
                                <i className="zmdi zmdi-account"></i> عضویت در
                                سایت{" "}
                            </Link>
                        </div>

                        <button className="btn btn-success">
                            {" "}
                            ورود به سایت{" "}
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
}

export default Login;
