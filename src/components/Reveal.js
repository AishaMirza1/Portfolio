import { useRef,useEffect } from "react"
import {motion,useInView,useAnimation} from "framer-motion"

export default function Reveal({children}){
  const ref = useRef(null)
  const isInView = useInView(ref,{once:true})
  const controls = useAnimation()
  const SliderControls = useAnimation()
  useEffect(()=>{
    if(isInView){
      controls.start("visible")
      SliderControls.start("visible")
    }
  },[isInView])
    return(
        <div ref={ref} style={{position:"relative",overflow:"hidden",width:"fit-content"}}>
            <motion.div
               variants={{
                 hidden:{opacity:0,y:75},
                 visible:{opacity:1,y:0}    
               }}
               initial="hidden"
               animate={controls}
               transition={{ duration:.5,delay:.25}}
               >
              {children}  
            </motion.div>
            <motion.div
            variants={{
              hidden:{left:0},
              visible:{left:"100%"}
            }}
            initial="hidden"
            animate={SliderControls}
            transition={{duration:.5,ease:"easeIn"}}
            style={
              {
                position:"absolute",
                left:0,
                right:0,
                top:4,
                bottom:4,
                backgroundColor:"#ff3c78",
                zIndex:20,
              }
            }
            >

            </motion.div>
        </div>
    )
}