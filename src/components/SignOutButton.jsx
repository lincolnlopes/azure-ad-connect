import Button from "react-bootstrap/Button";
import { useMsal } from "@azure/msal-react";



const SignOutButton = () => {

    function handleLogout(instance) {
        instance.logoutPopup().catch(e => {
            console.error(e);
        });
    }

    const { instance } = useMsal();

    return (
        <Button variant="secondary" className="ml-auto" onClick={() => handleLogout(instance)}>Sign out using Redirect</Button>

    )
}

export default SignOutButton
