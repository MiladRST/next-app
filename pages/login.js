import Head from "next/head";
import AppLogin from "../components/AppLogin";


function Login() {
    return (
        <>
            <Head>
                <title>ماراتن برنامه نویسی | ورود</title>
                <meta name="description" content="ماراتن برنامه نویسی | ورود" />
                <link rel="icon" href="images/logo.png" />
            </Head>



            <AppLogin />

        </>
    )
}

export default Login;