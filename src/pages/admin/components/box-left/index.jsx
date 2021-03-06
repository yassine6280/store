import './index.css';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import DashboardIcon from '@mui/icons-material/Dashboard';
import StoreIcon from '@mui/icons-material/Store';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Button, IconButton } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBagShopping,faClipboardList,faUsers,faFilterCircleDollar,
faRightFromBracket,faChartLine,faCommentDots,faGears,faScrewdriverWrench,
faGauge,faBarsStaggered
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux/es/exports';
import { boxAdminLeft } from '../../../../redux/headerTools';

export default function BoxLeft(){
const[Box,setBox]=useState(true);

/////////// router 
    const navigate=useNavigate();

///////sttate  Redux
    const state=useSelector((state)=>state.headerTools);
    const dispatch=useDispatch();
//
    return(
        <div 
        onMouseMove={()=>setBox(false)}
        onMouseLeave={()=>setBox(true)}
        className={(Box && state.boxAdminLeft)?"admin-boxleft-close":"admin-boxleft-open"} >
            
            
            <div className='admin-logo'>
                {(Box && state.boxAdminLeft)?(<span></span>):(<span>Laghouat Shop</span>)}
                
                <IconButton onClick={()=>dispatch(boxAdminLeft())}>
                    <ArrowBackIosNewIcon className={!state.boxAdminLeft?"":'admin-list-arrow-activie'} />
                </IconButton>
            </div>



            <div className='admin-list'>
                <div onClick={()=>navigate('/store/admin/')} >
                    <p className='admin-list-p'>ADMIN</p>
                </div>
                <div className='admin-list-item'>
                    <Button  startIcon={<span className='admin-list-icon-btn'><FontAwesomeIcon icon={faGauge} /></span>}
                        onClick={()=>navigate('/store/admin/dashboard/')} >
                        <span  className='admin-list-title' >???????? ??????????????</span>
                    </Button>
                </div>


                <div className='admin-list-item'>
                    <Accordion className=' admin-accordion'>
                        <Button style={{width:'100%',padding:0}} >
                            <AccordionSummary style={{width:'100%'}}  expandIcon={<ArrowBackIosNewIcon/>}>
                                <Typography> 
                                    <span className='admin-list-icon'><FontAwesomeIcon icon={faBagShopping} /></span>
                                    <span className='admin-list-title' >????????????????</span>
                                </Typography>
                            </AccordionSummary>
                        </Button>
                        <AccordionDetails>

                            <Button onClick={()=>navigate('/store/admin/products')} startIcon={<ArrowRightIcon/>}>?????????? ????????????????</Button>
                            <Button onClick={()=>navigate('/store/admin/products/create')} startIcon={<ArrowRightIcon/>}>?????????? ????????</Button>
                            <Button onClick={()=>navigate('/store/admin/categorie')}  startIcon={<ArrowRightIcon/>}>????????????</Button>
                            <Button onClick={()=>navigate('/store/admin/categorie/create')}  startIcon={<ArrowRightIcon/>}>?????????? ??????</Button>

                        </AccordionDetails>
                    </Accordion>
                    
                </div>

                <div className='admin-list-item'>
                    <Accordion className='admin-accordion'>
                        <Button style={{width:'100%',padding:0}} >
                            <AccordionSummary style={{width:'100%'}} expandIcon={<ArrowBackIosNewIcon/>}>
                                <Typography>
                                    <span className='admin-list-icon'><FontAwesomeIcon icon={faClipboardList} /></span>
                                    <span className='admin-list-title' >??????????????</span>
                                </Typography>
                            </AccordionSummary>
                        </Button>
                        <AccordionDetails>
                            <Button startIcon={<ArrowRightIcon/>}>?????????? ??????????????</Button>
                            <Button startIcon={<ArrowRightIcon/>}>???????????? ??????????</Button>
                        </AccordionDetails>
                    </Accordion>
                </div>

                <div className='admin-list-item'>
                    <Accordion className='admin-accordion'>
                        <Button style={{width:'100%',padding:0}} >
                            <AccordionSummary style={{width:'100%'}} expandIcon={<ArrowBackIosNewIcon/>}>
                                <Typography>
                                    <span className='admin-list-icon'><FontAwesomeIcon icon={faUsers} /></span>
                                    <span className='admin-list-title' > ????????????????????</span>
                                </Typography>
                            </AccordionSummary>
                        </Button>
                        <AccordionDetails>
                            <Button startIcon={<ArrowRightIcon/>}>??????????</Button>
                            <Button startIcon={<ArrowRightIcon/>}>???????????????? ????????????</Button>
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div className='admin-list-item'>
                    <Accordion className='admin-accordion'>
                        <Button style={{width:'100%',padding:0}} >
                            <AccordionSummary style={{width:'100%'}} expandIcon={<ArrowBackIosNewIcon/>}>
                                <Typography>
                                    <span className='admin-list-icon'><FontAwesomeIcon icon={faFilterCircleDollar} /></span>
                                    <span className='admin-list-title' > ?????????????? ??????????????</span>
                                </Typography>
                            </AccordionSummary>
                        </Button>
                        <AccordionDetails>
                            <Button startIcon={<ArrowRightIcon/>}>?????? ??????????</Button>
                            <Button startIcon={<ArrowRightIcon/>}>?????????????? ???? ??????????????</Button>
                        </AccordionDetails>
                    </Accordion>
                </div>
                
                <div>
                    <p className='admin-list-p'>????????</p>
                </div>
                <div className='admin-list-item'>
                    <Accordion className='admin-accordion'>
                        <Button style={{width:'100%',padding:0}} >
                            <AccordionSummary style={{width:'100%'}} expandIcon={<ArrowBackIosNewIcon/>}>
                                <Typography>
                                    <span className='admin-list-icon'><FontAwesomeIcon icon={faChartLine} /></span>
                                    <span className='admin-list-title' >??????????</span>
                                </Typography>
                            </AccordionSummary>
                        </Button>
                        <AccordionDetails>
                            <Button startIcon={<ArrowRightIcon/>}>?????? ??????????</Button>
                            <Button startIcon={<ArrowRightIcon/>}>?????????????? ???? ??????????????</Button>
                        </AccordionDetails>
                    </Accordion>
                </div>

                <div className='admin-list-item'>
                    <Button startIcon={<span className='admin-list-icon-btn'><FontAwesomeIcon icon={faCommentDots} /></span>} >
                        <span  className='admin-list-title' >??????????????????</span>   
                    </Button>
                </div>

                <div className='admin-list-item' onClick={()=>navigate("/store/admin/tools-store")}>
                    <Button startIcon={<span className='admin-list-icon-btn'><FontAwesomeIcon icon={faGears} /></span>} >
                    <span  className='admin-list-title' >?????????????? ????????????</span>
                    </Button>
                </div>

                <div className='admin-list-item'>
                    <Button startIcon={<span className='admin-list-icon-btn'><FontAwesomeIcon icon={faScrewdriverWrench} /></span>} >
                    <span  className='admin-list-title' > ?????????????? ????????????</span>
                    </Button>
                </div>

                <div className='admin-list-item mt-3'>
                    <Button startIcon={<span className='admin-list-icon-btn'><FontAwesomeIcon icon={faRightFromBracket} /></span>} >
                    <span  className='admin-list-title' >?????????? ????????????</span>
                    </Button>
                </div>

            </div>

            

        </div>
    )
}