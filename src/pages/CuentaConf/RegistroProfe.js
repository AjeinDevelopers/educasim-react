import HeaderApp from "../../modelos/header/HeaderApp";
import registroProf from "../CuentaConf/imagenes/registroProf.svg"
import MultiLinks from "../../componentes/multiboton/multiLinks";
import {useState, useEffect} from "react";
import InputEmail from "../../componentes/input/inputEmail";
import InputPassword from "../../componentes/input/inputPassword";
import Input from "../../componentes/input/input";
import Boton from "../../componentes/boton/boton";
import {NavLink} from "react-router-dom";
import FooterApp from "../../modelos/footer/FooterApp.jsx";

export default function RegistroProfe(){
    const [sendForm, setSendForm] = useState(false);
    const [emailError, setEmailError] = useState(true);
    const [passError, setPassError] = useState(true);
    const [inputError, setInputError] = useState(true);

    const [value, setValue] = useState(null);
    const [selector, setSelector] = useState(null);

    useEffect(() => {
        if(!emailError && !passError && !inputError ){
            setSendForm(true);
        }else{
            setSendForm(false);
        }
    }, [emailError, passError, inputError]);

    let handleValue = (value) => {
        setValue(value);
    }

    let handleEmailError = (error) => {
        setEmailError(error);
    }


    let handlePasswordError = (error) => {
        setPassError(error);
    };

    let handleInputError = (error) => {
        setInputError(error);
    };

    return(
        <>
            <HeaderApp/>
            <div style={{display:"flex", width:"calc(100% - 2*var(--XXS, 24px))", padding:"var(--XXS, 24px)", alignItems:"flex-start"}}>
            <div style={{display:"flex", padding:"var(--XS, 24px) 0px", flexDirection:"column", alignItems:"center", gap:"var(--M, 48px)", flex:"1 0 0"}}>
                <h2 className="secondary brand">¡Hola! Bienvenid@</h2>
                <div style={{display:"flex",padding:"0px var(--XXS, 32px)", flexDirection:"column", alignItems:"center", gap:"var(--XXS, 8px)", alignSelf:"stretch"}}>
                        <MultiLinks
                        text1="Estudiante" text2="Profesor/a" show1={true} show2={true}
                        showIcon1={true}  showIcon2={false} to1="/registro/Alum"  to2="/registro/Profe"
                        />   
                        <div style={{display:"flex",padding:"var(--US, 8px) var(--XXXS, 12px)", width:"100%", flexDirection:"column"}}>
                        <InputEmail Style={"primary"} label={"Correo Electrónico"} showLabel={true} EmailError={handleEmailError} required={true} register={true}/>
                        <InputPassword label={"Contraseña"} showLabel={true} PasswordError={handlePasswordError} required={true} register = {true}/>
                        <Input Style={"primary"} label={"Nombre(s)"} showLabel={true} required={true} InputError={handleInputError}/>
                        <Input Style={"primary"} label={"Apellido Paterno"} showLabel={true} required={true} InputError={handleInputError}/>
                        <Input Style={"primary"} label={"Apellido Materno"} showLabel={true} required={true} InputError={handleInputError}/>
                        </div>
                        <div style={{display: "flex", justifyContent: "center", alignItems: "center", padding: "12px", width:"100%" }}>
                             <Boton size = {"small"} style={"secondary"} text={"Crear cuenta"} showIcon2={true}
                             icon2={"fa-solid fa-right-to-bracket fa-fw"} method={"SUMBIT"} {...(sendForm ? { disabled: false } : { disabled: true })} />
                             </div> 
                             <div style={{display: "flex", justifyContent: "center", textAlign: "center", padding: "0px", width:"100%"}}>
                                <t6>¿Ya tienes cuenta?&nbsp;&nbsp;</t6>
                                <nav className={"/"}>
                                <NavLink to="/login/profesor" ><t6 className={"primary brand"}> Inicia Sesión</t6></NavLink>
                                    </nav>
                                </div> 
                </div> 
            </div>
                <div style={{width: "40%", position: "sticky", top: "0"}}>
                    <img style={{width: "100%"}} src={registroProf} alt="Profesor con libros"/>
                </div>
        </div>
        </>

    )

}