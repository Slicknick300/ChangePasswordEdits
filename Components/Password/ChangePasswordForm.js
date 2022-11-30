import React, { useRef, useContext } from "react";
import classes from "./ChangePasswordForm.module.css";
import { RiTodoLine } from "react-icons/ri";
import AuthContext from "../../context/auth-context";
import { getAuth, updatePassword} from "firebase/Auth";
import { render } from "@testing-library/react";

const auth = getAuth();
const user = auth.currentUser;
const newPassword = getASecureRandomPassword();

	updatePassword(user, newPassword).then(() => {
 
}).catch((error) => {
  
})

function ChangePasswordForm(){
	const shoot = (a) =>{
		alert(a);
	}
return(
	<button onClick ={() => shoot("Password has been changed")}> Chnage Password </button>
);

}

const root = ReactDom.createroot(document.getElementById('root'));
root.render(<ChangePasswordForm/>);

export default ChangePasswordForm;
