import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../authConfig";
import Button from "react-bootstrap/Button";

const SignInButton = () => {
    function handleLogin(instance) {
        instance.loginPopup(loginRequest).catch(e => {
            console.error(e);
        });
    }

    /**
     * Renders a button which, when selected, will open a popup for login
     */

    const { instance } = useMsal();

    return (
        <Button
            onClick={() => handleLogin(instance)}
            variant="secondary"
            className="ml-auto">
            Sign in using Popup
        </Button>
    )
}

export default SignInButton
