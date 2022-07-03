import Link from 'next/link';

function AppLogin() {
    return (
        <div id="AppLogin">

            <div className="lr_box">

                <h1 className="lr_title">ورود</h1>

                <form className="lr_form" method="POST">

                    <div className="lr_form-group">
                        <label htmlFor="floatingEmail">پست الکترونیک</label>
                        <input type="email" className="form-control lr_input" name="floatingEmail" placeholder="پست الکترونیک خود را وارد کنید" />
                    </div>

                    <div className="lr_form-group">
                        <label htmlFor="floatingPassword">رمز عبور </label>
                        <input type="password" className="form-control lr_input" name="floatingPassword" placeholder="رمز عبور خود را وارد کنید" />
                    </div>
                    <div className="lr_form-group" style={{ display: "flex", alignItems: "center" }}>
                        <input type="checkbox" className="form-control" id="rememberme" name="rememberme" />
                        <label htmlFor="rememberme" style={{ marginTop: "3px" }}> مرا به خاطر بسپار</label>
                    </div>

                    <div className="lr_form-group">
                        <button className="lr_btn" type="submit">وارد شوید</button>
                    </div>

                    <div className="lr_form-groups lr_sign_login">
                        <p>
                            برای ثبت نام
                            <Link href='/register'>
                                <a title="ثبت نام">اینجا</a>
                            </Link>
                            کلیک کنید.
                        </p>
                    </div>
                </form>

            </div>

        </div >
    )
}

export default AppLogin;
