import Link from 'next/link';

function AppRegister() {
    return (
        <div id="AppRegister">

            <div className="lr_box">

                <h1 className="lr_title">ثبت نام</h1>

                <form className="lr_form" method="POST">

                    <div className="lr_form-group">
                        <label htmlFor="floatingEmail">نام و نام خانوادگی</label>
                        <input type="text" className="form-control lr_input" name="floatingEmail" placeholder="نام خود را وارد کنید" />
                    </div>
                    <div className="lr_form-group">
                        <label htmlFor="floatingEmail">پست الکترونیک</label>
                        <input type="email" className="form-control lr_input" name="floatingEmail" placeholder="پست الکترونیک خود را وارد کنید" />
                    </div>

                    <div className="lr_form-group">
                        <label htmlFor="floatingPassword">رمز عبور</label>
                        <input type="password" className="form-control lr_input" name="floatingPassword" placeholder="رمز عبور " />
                    </div>

                    <div className="lr_form-group">
                        <label htmlFor="floatingPassword">تکرار رمز عبور</label>
                        <input type="password" className="form-control lr_input" name="floatingPassword" placeholder="تکرار رمز عبور " />
                    </div>


                    <div className="lr_form-group">
                        <button className="lr_btn" type="submit">ثبت نام</button>
                    </div>

                    <div className="lr_form-groups lr_sign_login">
                        <p>
                            برای ورود
                            <Link href='/login'>
                                <a title="ورود">اینجا</a>
                            </Link>
                            کلیک کنید.
                        </p>
                    </div>

                </form>

            </div>

        </div >
    )
}

export default AppRegister;
