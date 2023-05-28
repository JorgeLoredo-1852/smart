import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import { Grid } from '@mui/material';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'


const Chat = ({currTab, setCurrTab}) => {   
    const [age, setAge] = React.useState(''); 
    const [age2, setAge2] = React.useState(''); 
    const { width, height } = useWindowSize()


    const setTab = (t) => {
        setCurrTab(t)
    }

    const handleChange = (event) => {
        setAge(event.target.value);
      };

      const handleChange2 = (event) => {
        setAge2(event.target.value);
      };

    console.log(currTab)

    return(
    <div style={{maxWidth: "500px", padding:"1.5rem 2rem", fontSize:"1.3rem", position:"relative", zIndex:100}}>
        {currTab === 1 && (
            <div style={{width: "500px", backgroundColor:"white", borderRadius:"5px", position:"relative"}}>
                <div style={{boxShadow:"0.5rem 0.5rem 0.5rem rgba(0,0,0,0.2)",padding:"1rem 1.5rem"}}>
                    Hola Mauricio, soy el Señor Banorte, y yo lo guiaré durante su proceso. 
                </div>
            <div onClick = {() => setTab(2)}> 

            <PlayCircleFilledIcon
                onClick = {() => setTab(2)}
                sx={{
                    width: "2.5rem",
                    height: "2.5rem",
                    color: "rgba(186, 1,1, 1)",
                    position:"absolute",
                    bottom: "-3rem",
                    right: "0rem",
                    cursor: "pointer"
                  }}
            />
            </div>
            </div>
        )}
        {
            currTab === 2 && (
                <div style={{width: "500px"}}>
                    <div style={{backgroundColor:"white", borderRadius:"5px", position:"relative"}}>
                        <div style={{boxShadow:"0.5rem 0.5rem 0.5rem rgba(0,0,0,0.2)", padding:"1rem 1.5rem"}}>
                            Actualmente tiene una cuenta Banorte Generations. ¿Qué tramite desea realizar?
                        </div>
                    </div>
                    <div style={{display:"flex", justifyContent:"start", alignItems:"center", marginTop: "0.5rem", cursor: "pointer"}}>
                        <DoubleArrowIcon
                            sx={{
                                marginLeft:"1rem",
                                width: "3rem",
                                height: "3rem",
                                color: "rgba(186, 1,1, 1)",
                            }}
                        />
                        <div onClick = {() => setTab(3)} style={{boxShadow:"0.5rem 0.5rem 0.5rem rgba(0,0,0,0.2)", width:"100%",  marginLeft: "1rem", backgroundColor:"white", borderRadius:"5px", padding:"0.5rem 1rem"}}>
                            Agregar Cuenta Asociada
                        </div>
                    </div>
                    <div style={{ display:"flex", justifyContent:"start", alignItems:"center", marginTop: "0.5rem"}}>
                        <DoubleArrowIcon
                            sx={{
                                marginLeft:"1rem",
                                width: "3rem",
                                height: "3rem",
                                color: "rgba(186, 1,1, 1)",
                            }}
                        />
                        <div style={{boxShadow:"0.5rem 0.5rem 0.5rem rgba(0,0,0,0.2)", width:"100%", marginLeft: "1rem", backgroundColor:"white", borderRadius:"5px", padding:"0.5rem 1rem"}}>
                            Editar Cuenta Asociada
                        </div>
                    </div>
                    <div style={{display:"flex", justifyContent:"start", alignItems:"center", marginTop: "0.5rem"}}>
                        <DoubleArrowIcon
                            sx={{
                                marginLeft:"1rem",
                                width: "3rem",
                                height: "3rem",
                                color: "rgba(186, 1,1, 1)",
                            }}
                        />
                        <div style={{boxShadow:"0.5rem 0.5rem 0.5rem rgba(0,0,0,0.2)", width:"100%", marginLeft: "1rem", backgroundColor:"white", borderRadius:"5px", padding:"0.5rem 1rem"}}>
                            Eliminar Cuenta Asociada
                        </div>
                    </div>
                </div>
            )
        }
        {currTab === 3 && (
            <>
            <div style={{width: "500px", backgroundColor:"white", borderRadius:"5px", position:"relative"}}>
                <div style={{boxShadow:"0.5rem 0.5rem 0.5rem rgba(0,0,0,0.2)", padding:"1rem 1.5rem"}}>
                    Si desea agregar una cuenta asegurese de tener los siguientes documentos
                </div>
            </div>
            <div style={{display:"flex", marginTop:"1rem"}}>
                    <div style={{width:"40%"}}></div>
                    <div style={{width:"60%", boxShadow:"0.5rem 0.5rem 0.5rem rgba(0,0,0,0.2)", backgroundColor:"white", borderRadius:"5px", position:"relative", padding:"0.5rem 1rem"}}>

                        <div>Banorte Youth (Padre o Tutor)</div>
                        <div style={{marginLeft: "0.5rem",fontSize:"1.2rem", display:"flex", alignItems:"center", paddingTop:"0.5rem"}}>
                            <div style={{marginRight: "0.8rem",width:"0.5rem", height:"0.5rem", backgroundColor:"rgba(186, 1,1, 1)", borderRadius:"1rem"}}></div>
                            Acta de Nacimiento
                        </div>
                        <div style={{marginLeft: "0.5rem",fontSize:"1.2rem", display:"flex", alignItems:"center"}}>
                            <div style={{marginRight: "0.8rem",width:"0.5rem", height:"0.5rem", backgroundColor:"rgba(186, 1,1, 1)", borderRadius:"1rem"}}></div>
                            CURP
                        </div>
                        <div style={{marginLeft: "0.5rem",fontSize:"1.2rem", display:"flex", alignItems:"center", paddingBottom:"0.8rem"}}>
                            <div style={{marginRight: "0.8rem",width:"0.5rem", height:"0.5rem", backgroundColor:"rgba(186, 1,1, 1)", borderRadius:"1rem"}}></div>
                            Comprobante de Domicilio
                        </div>
                        <div onClick={() => setTab(4)} style={{color:"white", backgroundColor:"rgba(186, 1,1, 1)", fontSize:"1.2rem", padding:"0.2rem 1rem", textAlign:"center", borderRadius:"5px", cursor:"pointer"}}>
                            Seleccionar
                        </div>
                    </div>
                </div>
                <div style={{display:"flex", marginTop:"1rem"}}>
                    <div style={{width:"40%"}}></div>
                    <div style={{width:"60%", boxShadow:"0.5rem 0.5rem 0.5rem rgba(0,0,0,0.2)", backgroundColor:"white", borderRadius:"5px", position:"relative", padding:"0.5rem 1rem"}}>

                        <div>Banorte Lifetime</div>
                        <div style={{marginLeft: "0.5rem",fontSize:"1.2rem", display:"flex", alignItems:"center", paddingTop:"0.5rem"}}>
                            <div style={{marginRight: "0.8rem",width:"0.5rem", height:"0.5rem", backgroundColor:"rgba(186, 1,1, 1)", borderRadius:"1rem"}}></div>
                            INE
                        </div>
                        <div style={{marginLeft: "0.5rem",fontSize:"1.2rem", display:"flex", alignItems:"center"}}>
                            <div style={{marginRight: "0.8rem",width:"0.5rem", height:"0.5rem", backgroundColor:"rgba(186, 1,1, 1)", borderRadius:"1rem"}}></div>
                            CURP
                        </div>
                        <div style={{marginLeft: "0.5rem",fontSize:"1.2rem", display:"flex", alignItems:"center", paddingBottom:"0.8rem"}}>
                            <div style={{marginRight: "0.8rem",width:"0.5rem", height:"0.5rem", backgroundColor:"rgba(186, 1,1, 1)", borderRadius:"1rem"}}></div>
                            Comprobante de Domicilio
                        </div>
                        <div onClick={() => setTab(4)} style={{color:"white", backgroundColor:"rgba(186, 1,1, 1)", fontSize:"1.2rem", padding:"0.2rem 1rem", textAlign:"center", borderRadius:"5px", cursor:"pointer"}}>
                            Seleccionar
                        </div>
                    </div>
                </div>
            </>
        )}
        {currTab === 4 && (
            <div style={{width: "500px"}}>
                <div style={{backgroundColor:"white", borderRadius:"5px", position:"relative"}}>
                    <div style={{boxShadow:"0.5rem 0.5rem 0.5rem rgba(0,0,0,0.2)", padding:"1rem 1.5rem"}}>
                        Capture los siguientes documentos:
                    </div>
                </div>
                <Grid container sx={{marginTop:"1rem"}} columnSpacing={1}>
                    <Grid item xs = {4}>
                        <div style = {{backgroundColor:"white", borderRadius:"5px"}}>
                            <div style={{height:"11rem", background:"url(/acta.jpeg)", backgroundSize:"cover", borderRadius:"5px 5px 0 0"}}></div>
                            <div style={{display:"flex", justifyContent:"space-between", alignItems:"center",padding:"0.8rem 1rem"}}>
                                <div style={{flex:1, fontSize:"1rem"}}>Acta de Nacimiento</div>
                                <CameraAltIcon
                                    sx={{
                                        width: "2.5rem",
                                        height: "2.5rem",
                                        color: "rgba(186, 1,1, 1)",
                                        cursor: "pointer"
                                    }}
                                />
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs = {4}>
                        <div style = {{backgroundColor:"white", borderRadius:"5px"}}>
                        <div style={{height:"11rem", background:"url(/curp.jpeg)", backgroundSize:"cover", borderRadius:"5px 5px 0 0"}}></div>
                        <div style={{display:"flex", justifyContent:"space-between", alignItems:"center",padding:"0.8rem 1rem"}}>
                            <div style={{flex:1, fontSize:"1rem"}}>CURP &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                            <CameraAltIcon
                                sx={{
                                    width: "2.5rem",
                                    height: "2.5rem",
                                    color: "rgba(186, 1,1, 1)",
                                    cursor: "pointer"
                                }}
                            />
                        </div>
                        </div>
                    </Grid>
                    <Grid item xs = {4}>
                        <div style = {{backgroundColor:"white", borderRadius:"5px"}}>
                        <div style={{height:"11rem", background:"url(/comp.jpg)", backgroundSize:"cover", borderRadius:"5px 5px 0 0"}}></div>
                        <div style={{display:"flex", justifyContent:"space-between", alignItems:"center",padding:"0.8rem 1rem"}}>
                            <div style={{flex:1, fontSize:"1rem"}}>Compro. de domicilio</div>
                            <CameraAltIcon
                                sx={{
                                    width: "2.5rem",
                                    height: "2.5rem",
                                    color: "rgba(186, 1,1, 1)",
                                    cursor: "pointer"
                                }}
                            />
                        </div>
                        </div>
                    </Grid>
                </Grid>
                <div onClick={() => setTab(5)} style={{margin:"0 auto", marginTop: "1rem",color:"white", backgroundColor:"rgba(186, 1,1, 1)", fontSize:"1.2rem", padding:"0.2rem 2rem", textAlign:"center", borderRadius:"5px", cursor:"pointer", width:"fit-content"}}>
                            Seleccionar
                        </div>
            </div>
        )}
        {currTab === 5 && (
            <div style={{width: "500px", position:"relative"}}>
                
                <div style={{marginTop:"1rem",display:"flex", backgroundColor:"white", borderRadius:"5px", boxShadow:"0.5rem 0.5rem 0.5rem rgba(0,0,0,0.2)", padding:"1rem 1.5rem"}}>
                    <div style={{fontWeight:"600"}}>
                        Nombre:<br/>
                        Fecha de Nacimiento:<br/>
                        CURP:<br/>
                        Domicilio:<br/>
                    </div>
                    <div style={{fontWeight:"400", textAlign:'end'}}>
                        Jorge Loredo Meléndez<br/>
                        22/Marzo/2006<br/>
                        SJADIAHOIF90313<br/>
                        Miguel Alemán 2392<br/>
                    </div>               
                </div>
                <Grid container columnSpacing={2} sx = {{marginTop: "1rem"}}>
                    <Grid item xs={6}>
                    <div style={{fontSize:"1.2rem", backgroundColor:"white", borderRadius:"5px", boxShadow:"0.5rem 0.5rem 0.5rem rgba(0,0,0,0.2)", padding:"1rem 1.5rem"}}>
                        Límite gastos por mes               
                    </div>
                    </Grid>
                    <Grid item xs={6}>
                    <FormControl fullWidth error>
                        <InputLabel id="demo-simple-select-label">M.X.N</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                        sx={{backgroundColor:"white"}}
                        >
                        <MenuItem value={1}>5,000 M.X.N</MenuItem>
                        <MenuItem value={2}>10,000 M.X.N</MenuItem>
                        <MenuItem value={3}>20,000 M.X.N</MenuItem>
                        </Select>
                    </FormControl>
                    </Grid>
                    <Grid item xs={6} sx={{marginTop:"1rem"}}>
                    <div style={{fontSize:"1.2rem",backgroundColor:"white", borderRadius:"5px", boxShadow:"0.5rem 0.5rem 0.5rem rgba(0,0,0,0.2)", padding:"1rem 1.5rem"}}>
                    Límite por transacción           
                </div>
                    </Grid>
                    <Grid item xs={6} sx={{marginTop:"1rem"}}>
                    <FormControl fullWidth error>
                        <InputLabel id="demo-simple-select-label">M.X.N</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age2}
                        label="Age"
                        onChange={handleChange2}
                        sx={{backgroundColor:"white"}}
                        >
                        <MenuItem value={4}>1,000 M.X.N</MenuItem>
                        <MenuItem value={5}>2,000 M.X.N</MenuItem>
                        <MenuItem value={6}>5,000 M.X.N</MenuItem>
                        </Select>
                    </FormControl>
                    </Grid>
                </Grid>
                <div onClick={() => setTab(6)} style={{margin:"0 auto", marginTop: "1rem",color:"white", backgroundColor:"rgba(186, 1,1, 1)", fontSize:"1.2rem", padding:"0.2rem 2rem", textAlign:"center", borderRadius:"5px", cursor:"pointer", width:"fit-content"}}>
                            Continuar
                        </div>
            </div>
        )}
        {currTab === 6 && (
            <>    
            <div style={{position:"absolute", top:0, left:'-35rem'}}>
            <Confetti

            width={width}
            height={height}
          /></div>
            <div style={{width: "500px", backgroundColor:"white", borderRadius:"5px", position:"relative"}}>
                <div style={{boxShadow:"0.5rem 0.5rem 0.5rem rgba(0,0,0,0.2)",padding:"1rem 1.5rem"}}>
                Los datos fueron guardados, asiste a ventanilla a recoger la nueva tarjeta de: <span style={{fontWeight:"600"}}>Jorge Loredo     </span>           </div>
            <div onClick = {() => setTab(2)}> 
            </div>
            </div></>
        )}
    </div>
    )
}

export default Chat;