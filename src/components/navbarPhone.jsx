// import React, { useEffect, useRef, useState } from 'react'
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
// import {faBars,faXmark} from "@fortawesome/free-solid-svg-icons"
// import { Link } from 'react-router-dom'
// export default function NavBarPhone(){
//     const [menu, setMenu] = useState(false)
//     const [prevScrollPos, setPrevScrollPos] = useState(window.pageXOffset);
//     const [visible, setVisible] = useState(true)
//     const menuRef = useRef(null)

//     // useEffect(()=>{
//     //     let handle = (e)=>{
//     //         if(!menuRef?.current?.contains(e?.target)){
//     //             setMenu(false)
//     //         }
//     //     }
//     //     document.addEventListener("mousedown",handle)
//     //     return()=>{
//     //         document.removeEventListener("mousedown",handle)
//     //     }
//     // }, [])
    
//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollPos = window.pageYOffset;
//       const visible = prevScrollPos > currentScrollPos;

//       setPrevScrollPos(currentScrollPos);
//       setVisible(visible);
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, [prevScrollPos]);
//     return (
//         <div style={{display: visible ? 'block' : 'none'}}>

//         !menu? <>
//             <div style={{position:"fixed", zIndex:9999,backgroundColor:"#B06440",width:"100%",height:"60px",display:"flex",justifyContent:'center',top:0,alignItems: "center"}}>
                
//                 <FontAwesomeIcon icon={faBars} style={{fontSize:30,position:"absolute",left:15,top:15}} onClick={()=>setMenu(!menu)}/>       
//                 <p style={{textAlign:"center",color:"white",marginTop:8}}>Boyero de Berna Club Argentino</p>
                
//             </div>
//         </>:<>
//         {
            
//             <div ref={menuRef} style={{position:"fixed",zIndex:99999,backgroundColor:"#B06440",height:"100vh",width:"50vw",left:0}}>
//                 <FontAwesomeIcon icon={faXmark} style={{fontSize:30,position:"absolute",left:10,top:5}} onClick={()=>setMenu(!menu)}/>       
//                 <div className='contain_navigate'>
//                     <ul style={{display:"flex",flexDirection:"column",margin:"180px 0 0 50px",alignItems: "flex-start"}}>
//                         <li onClick={()=>setMenu(!menu)}>Inicio</li>
//                         <li onClick={()=>setMenu(!menu)}>Inicio</li>
//                         <li onClick={()=>setMenu(!menu)}>Inicio</li>
//                         <li onClick={()=>setMenu(!menu)}>Inicio</li>                        
//                     </ul>
//                 </div>
//             </div>
//         }</>
//         </div>
//   )
// }