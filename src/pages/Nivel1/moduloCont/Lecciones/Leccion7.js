import HeaderAlumno from '../../../../modelos/header/HeaderAlumno.jsx';
import FooterApp from '../../../../modelos/footer/FooterApp.jsx'; 
import fracciones from '../../../../assets/common/fracciones.png';
import fracciones3_ej from '../../../../assets/common/fracciones3_ej.png';

export default function Leccion5(){
        return(
            <>
            <HeaderAlumno/>
            <div style={{display:"flex", padding:"var(--XXS, 24px) var(--L, 64px)", flexDirection:"column", alignItems:"center", gap:"var(--M, 48px)", alignSelf:"stretch"}}>
                <div style={{display:"flex", flexDirection:"column", alignItems:"center", gap:"var(--XS, 32px)", alignSelf:"stretch"}}>
                <div style={{width:"100%",borderRadius:"var(--US, 12px)", overflow: 'hidden'}}>
                    <img style={{margin: "0", objectFit: "cover",width:"100%", display:"flex",height:"320px", padding:"0", justifyContent:"center", alignItems:"center", alignSelf:"stretch"}} src={fracciones} alt='leccion'/>
                    </div>
                    <h3 className='secondary brand'>Leccion6</h3>
                    <div style={{display:"flex",padding:"0px var(--L, 64px)", justifyContent:"center", alignItems:"center", gap:"var(--S, 36px)", alignSelf:"stretch"}}>
                        <div style={{display:"flex", alignItems:"center", gap:"var(--XXXS, 16px)"}}>
                            <h5 className='primary brand'>Grado: </h5><t5>4°</t5>
                            <h5 className='primary brand'>  Tema:</h5><t5>Fracciones</t5>
                        </div>
                    </div>    
                        <div style={{display:"flex", alignItems:"flex-start", gap:"var(--S, 36px)", alignSelf:"stretch", flex:"1 0 0"}}>

                                <t5>
                                Fracciones: Es la expresión de una cantidad dividida entre otra cantidad; es decir que representa un cociente no efectuado de números.<br></br><br></br>
                                División de fracciones: <br></br><br></br>
                                Multiplicar en cruz: <br></br>
                                Este método consiste en multiplicar el numerador de la primera fracción por el denominador de la segunda fracción y el resultado colocarlo en el numerador de la fracción final. Por otro lado, tenemos que multiplicar el denominador de la primera fracción por el numerador de la segunda fracción y el resultado lo escribimos en el denominador de la fracción final. Después simplificamos si es necesario.

                                </t5>
                                
                                <img style={{display:"flex", width:"50%", alignItems:"center", justifyContent:"center", alignSelf:"stretch"}}src={fracciones3_ej} alt='nnanana'/>         
                        </div>
                        <div style={{display:"flex",flexDirection:"column", alignItems:"flex-start", gap:"var(--S, 36px)", alignSelf:"stretch"}}>
                            <t5>
                            División de fracciones mixtas: <br></br>
                            En la división de fracciones mixtas, es necesario que la parte entera se exprese como una fracción con el mismo denominador que en la parte fraccionaria que la acompaña.  El resultado de la multiplicación se suma con el numerador de la fracción que la acompaña. Una vez que se convierten las fracciones mixtas, se puede realizar la división.

                            </t5>
                        </div>
                </div>
            </div>
            <FooterApp/>
            </>
        )

}