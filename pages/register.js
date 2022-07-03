import Head from "next/head";
import AppRegister from "../components/AppRegister";


function Register() {
    return (
        <>
            <Head>
                <title>ماراتن برنامه نویسی | ثبت نام</title>
                <meta name="description" content="ماراتن برنامه نویسی | ثبت نام" />
                <link rel="icon" href="images/logo.png" />
            </Head>

            <AppRegister />

        </>
    )
}

export default Register;