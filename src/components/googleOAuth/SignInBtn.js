import React from 'react'
import btnImg from 'assets/img/google_signin_icon.png'


const GOOGLE_BUTTON_ID = 'google-sign-in-button'
export default class SignInBtn extends React.Component {
    componentDidMount() {
        window.gapi.signin2.render(
            GOOGLE_BUTTON_ID,
            {
                width: 240,
                height: 50,
                onsuccess: this.onsuccess,
                longtitle: true,
                theme: 'light'
            }
        )
    }

    onSuccess(googleUser) {
        const profile = googleUser.getBasicProfile()
        console.log('name: ' + profile.getName())
    }
    render () {
        return (
            <div>
                <a href="http://localhost:4500/api/auth/google"><img src={btnImg} /></a>
                <div id={GOOGLE_BUTTON_ID}/>
                
            </div>
        )
    }
}