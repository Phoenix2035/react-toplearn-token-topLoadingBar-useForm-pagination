import React from "react";
import {registerUser} from "../../services/userServices";

import {toast} from "react-toastify";
import {useForm} from "react-hook-form";
import {Link, useHistory} from "react-router-dom";
import {Helmet} from "react-helmet";
import {useDispatch} from "react-redux";
import {hideLoading, showLoading} from "react-redux-loading-bar";

const Register = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const {register, handleSubmit, errors} = useForm()

    const onSubmit = async (data, e) => {
        try {
            dispatch(showLoading())
            const {status} = await registerUser(data)
            if (status === 201) {
                toast.success("کاربر با موفقیت ساخته شد", {position: "top-right", closeOnClick: true})
                dispatch(hideLoading())
                history.push("/login")
                e.target.reset()
            }

        } catch (error) {
            toast.error("مشکلی پیش آمده", {
                position: "top-right",
                closeOnClick: true
            })
            dispatch(hideLoading())
        }
    }


    return (
        <main className="client-page">
            <div className="container-content">
                <header>
                    <h2> عضویت در سایت </h2>
                </header>

                <Helmet>
                    <title>عضویت در سایت</title>
                </Helmet>

                <div className="form-layer">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="input-handler">
                            <div className="input-group">
                            <span className="input-group-addon" id="username">
                                <i className="zmdi zmdi-account"></i>
                            </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="نام و نام خانوادگی"
                                    ref={register({required: true, minLength: 5})}
                                    name="fullname"
                                />

                            </div>
                            {errors.fullname && errors.fullname.type === "required" &&
                            <small>این فیلد اجباری است</small>}
                            {errors.fullname && errors.fullname.type === "minLength" &&
                            <small>حداقل باید 5 کاراکتر وارد کنید</small>}
                        </div>


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
                                    placeholder="رمز عبور"
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
                            <Link to="/login">
                                {" "}
                                <i className="zmdi zmdi-account"></i> ورود به
                                سایت{" "}
                            </Link>
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
