import HeaderAlumno from "../../../../modelos/header/HeaderAlumno.jsx";
import {useState, useEffect} from "react";
import Pregunta from "../../../../modelos/pregunta/pregunta.jsx";
import RadButtonGroup from "../../../../componentes/radbutton/RadButtonGroup.jsx";
import FooterApp from "../../../../modelos/footer/FooterApp.jsx";
import Boton from "../../../../componentes/boton/boton.jsx";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

//Formas geométricas básicas
export default function Ejercicio3N2(){
    const [sendForm, setSendForm] = useState(false);
    const [radButtonError, setRadButtonError] = useState(true);

    let handleContent1 = (value) => {
        setinp1(value)
    }
    let handleContent2 = (value) => (
        setinp2(value)
    )
    let handleContent3 = (value) => (
        setinp3(value)
    )
    let handleContent4 = (value) => (
        setinp4(value)
    )
    let handleContent5 = (value) => (
        setinp5(value)
    )

    const [inp1 , setinp1] = useState(0);
    const [inp2 , setinp2] = useState(0);
    const [inp3 , setinp3] = useState(0);
    const [inp4 , setinp4] = useState(0);
    const [inp5 , setinp5] = useState(0);

    const correctAnswers3 = {
        inp1: '42',
        inp2: '48',
        inp3: '51',
        inp4: '56', 
        inp5: '59'
    };

    /**repuestas correctas: 
     * Pregunta 1: {value: '42', label: '3'}
     * Pregunta 2: {value: '48', label: 'Rectángulo'}
     * Pregunta 3: {value: '51', label: '4'}
     * Pregunta 4: {value: '56', label: 'Hexágono'}
     * Pregunta 5: {value: '59', label: 'Pentágono'}
    */
    const items = [
        {value: '41', label: '4'},
        {value: '42', label: '3'},
        {value: '43', label: '5'}, 
        {value: '44', label: '2'}

    ];
    const items1 = [
        {value: '45', label: 'Cuadrado'},
        {value: '46', label: 'Círculo'},
        {value: '47', label: 'Triángulo'}, 
        {value: '48', label: 'Rectángulo'}

    ];
    const items2 = [
        {value: '49', label: '2'},
        {value: '50', label: '3'},
        {value: '51', label: '4'},
        {value: '52', label: '5'}

    ];
    const items3 = [
        {value: '53', label: 'Triángulo'},
        {value: '54', label: 'Cuadrado'},
        {value: '55', label: 'Pentágono'},
        {value: '56', label: 'Hexágono'}

    ];
    const items4 = [
        {value: '57', label: 'Triángulo'},
        {value: '58', label: 'Cuadrado'},
        {value: '59', label: 'Pentágono'},
        {value: '60', label: 'Hexágono'}

    ];

    const [value, setValue] = useState(null);
    const [selector, setSelector] = useState(null);

    useEffect(() => {
        if(!radButtonError){
            setSendForm(true);
        }else{
            setSendForm(false);
        }
    }, [ radButtonError]);

    let handleValue = (value) => {
        setValue(value);
    }


    let handleRadButtonError = (error) => {
        setRadButtonError(error);
    }

    const navigate = useNavigate();
    const [logged, setLogged] = useState(false);

    async function validarSesion() {

        try {
            const sessionId = localStorage.getItem("sessionId");
            const sessionType = localStorage.getItem("sessionType");
            await axios.post("http://localhost:8080/usuario/validar/alumno", {
                "sesionId": sessionId,
                "type": sessionType
            }).then((res) => {
                if (res.data.error === false) {
                    setLogged(true);
                } else {
                    navigate('/login/alumno');
                }
            });
        } catch(error){
            navigate('/login/alumno');
        }
    }

    useEffect(() => {
        if (localStorage.getItem("sessionId") === null && localStorage.getItem("sessionType") === null) {
            navigate('/login/alumno');
        } else {
            validarSesion();
        }
    }, []);
    let respTot = 0;
    async function handleSubmit() {
        
        const userAnswers3 = {
            inp1,
            inp2,
            inp3,
            inp4,
            inp5
        };

        let respBuenas3 = 0;
        for (let key in correctAnswers3) {
            if (correctAnswers3[key] === userAnswers3[key]) {
                respBuenas3++;
                respTot++;
            }
        }

        if (respBuenas3 === Object.keys(correctAnswers3).length) {
            alert("¡Todas las respuestas son correctas!");
        } else {
            alert(`Respuestas correctas: ${respBuenas3}/${Object.keys(correctAnswers3).length}`);
        }
    }

    return(
        <>
         <HeaderAlumno/>
         <div style={{display:"flex", width:"1440px", padding:"var(--M, 48px) var(--XS, 32px)", flexDirection:"column", alignItems:"flex-start", gap:"var(--XS, 32px)"}}>
            <div style={{display:"flex", flexDirection:"column", alignItems:"center", gap:"var(--XXS, 24px)", alignSelf:"stretch"}}>
                <h2 className="secondary brand">Formas geométricas básicas</h2>
                <div style={{display:"flex", padding:"var(--XXS, 24px) var(--XS, 32px)", justifyContent:"center", alignItems:"center", gap:"var(--XXXS, 16px)", alignSelf:"stretch"}}>
                    <div style={{display:"flex", color:"var(--Color-Principales-Fuertes-Text_Alt, #F0F8FF)",borderRadius:"var(--XUS, 8px)", background:"var(--Color-Principales-Fuertes-Secondary, #00BB9A)", padding:"var(--XXS, 16px) var(--XS, 24px)", justifyContent:"center", alignItems:"center", gap:"var(--XXXS, 8px)", flex:"1 0 0"}}>
                        <t5>Grado: 1°</t5>
                    </div>
                    <div style={{display:"flex", color:"var(--Color-Principales-Fuertes-Text_Alt, #F0F8FF)", borderRadius:"var(--XUS, 8px)", background:"var(--Color-Principales-Fuertes-Secondary, #00BB9A)", padding:"var(--XXS, 16px) var(--XS, 24px)", justifyContent:"center", alignItems:"center", gap:"var(--XXXS, 8px)", flex:"1 0 0"}}>
                        <t5>Reactivos: 5</t5>
                    </div>
                    <div style={{display:"flex", color:"var(--Color-Principales-Fuertes-Text_Alt, #F0F8FF)", borderRadius:"var(--XUS, 8px)",background:"var(--Color-Principales-Fuertes-Secondary, #00BB9A)", padding:"var(--XXS, 16px) var(--XS, 24px)", justifyContent:"center", alignItems:"center", gap:"var(--XXXS, 8px)", flex:"1 0 0"}}>
                        <t5>Opcion Multiple</t5>
                    </div>
                </div>
                <div style={{display:"flex", padding:"var(--M, 48px)",flexDirection:"column", alignItems:"center", gap:"var(--XXS, 24px)", alignSelf:"stretch",background:"var(--Color-Principales-Claros-Primary, #CAE6FF)", border:"4px solid var(--Color-Principales-Fuertes-Primary, #4BA8FF)", borderRadius:"var(--XXXS, 16px)"}}>
                    <h3>Instrucciones</h3>
                    <t5>Lee con atención las siguientes preguntas y contesta lo que se te solicita, elige solo una opción de las que se muestran en cada caso.</t5>
                </div>
                <div style={{display:"flex",padding:"var(--M, 48px)", width:"1344px", flexDirection:"column",justifyContent:"center", alignItems:"flex-start", gap:"var(--XXXS, 16px)"}}>
                <h5 className="secondary brand">Pregunta 1</h5>
                <RadButtonGroup items={items} size={"large"} estilo={"secondary"}
                                    label={"¿Cuántos lados tiene un triángulo?"}
                                     required={true} onChange={handleContent1} RadButtonError={handleRadButtonError}/>
                <h5 className="secondary brand">Pregunta 2</h5>
                <RadButtonGroup items={items1} size={"large"} estilo={"secondary"}
                                    label={"¿Cuál de estas formas es cuadrada?"}
                                     required={true} onChange={handleContent2} RadButtonError={handleRadButtonError}/>
                <h5 className="secondary brand">Pregunta 3</h5>
                <RadButtonGroup items={items2} size={"large"} estilo={"secondary"}
                                    label={"¿Cuántos lados tiene un cuadrado?"}
                                     required={true} onChange={handleContent3} RadButtonError={handleRadButtonError}/>
                <h5 className="secondary brand">Pregunta 4</h5>
                <RadButtonGroup items={items3} size={"large"} estilo={"secondary"}
                                    label={"¿Cuál de estas formas tiene 6 lados?"}
                                     required={true} onChange={handleContent4} RadButtonError={handleRadButtonError}/>
                <h5 className="secondary brand">Pregunta 5</h5>
                <RadButtonGroup items={items4} size={"large"} estilo={"secondary"}
                                    label={"¿Cuál de estas formas tiene 5 lados?"}
                                     required={true} onChange={handleContent5} RadButtonError={handleRadButtonError}/>
                </div>
                <div style={{alignItems:"center"}}>
                <Boton size={"small"} Style={"secondary"} text={"Comprobar"} showIcon2={true}
                           icon2={"fa-solid fa-check fa-fw"}
                           handleClick={handleSubmit}
                           method={"SUMBIT"} {...(sendForm ? {disabled: false} : {disabled: true})} />                
                 </div>
            </div>
         </div>
         <FooterApp/>
        </>
    )

}