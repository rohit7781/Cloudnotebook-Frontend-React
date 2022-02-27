import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { useNavigate } from 'react-router-dom'
var value ;
export default function GoogleIn(props) {
    const host = process.env.REACT_APP__HOST;

    let navigate = useNavigate();

    const responseGoogle = async (response) => {
        const email = response.profileObj.email
        const name = response.profileObj.name
        const password = response.profileObj.googleId
        const image = response.profileObj.imageUrl
        value = image
        // console.log(email, name, password, image)

 

        props.setProgress(30);
        const responses = await fetch(`${host}/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });
        props.setProgress(55);
        // eslint-disable-next-line
        const json = await responses.json()
        if (json.success) {
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken);
            props.showAlert('Loged In Success', 'success')
            props.setProgress(100);
            navigate("/", { replace: true });
        }
        else {

            const signupresponse = await fetch(`${host}/api/auth/createuser`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, password })
            });
            props.setProgress(60);
    
            // eslint-disable-next-line
            const json = await signupresponse.json()
    
            if (json.success) {
                // Save the auth token and redirect
                localStorage.setItem('token', json.authtoken);
                navigate("/", { replace: true });
                props.showAlert("SignUp Success. Start saving your Notes", 'success')
    
            }
            
            props.setProgress(100);
        }

    }
    return <div>
        <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            buttonText="Login with Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
        />

    </div>;
}

export {value};
