import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const ScrollImageChanger = () => {
    const svgRef = useRef(null);
    const isInView = useInView(svgRef, { triggerOnce: false, margin: "-50px" });
  

  return (
<svg   width="309" height="327" viewBox="0 0 309 327" fill="none" xmlns="http://www.w3.org/2000/svg" ref={svgRef} >
<motion.path
        initial={{ pathLength: 0 }}
        animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
        transition={{ duration: 2, ease: "easeInOut",delay:0 }}
        d="M223.656 300.937C178.156 345.437 101.156 322.437 85.1564 300.937C40.3565 293.337 30.1564 254.437 30.6563 235.937C-20.8438 192.937 5.15625 102.937 30.6563 92.4373C31.0563 43.6372 67.4897 28.7706 85.6564 27.4373C131.656 -20.0627 209.656 6.93726 222.656 27.4373C271.456 36.6373 279.323 74.6039 277.156 92.4373C332.656 141.437 302.156 215.437 277.156 235.937C282.356 275.137 244.156 300.937 223.656 300.937Z" stroke="#f15d239c"/>
<motion.path
 initial={{ pathLength: 0 }}
 animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
 transition={{ duration: 2, ease: "easeInOut",delay:2 }}
 d="M159.656 174.937C161.156 190.437 160.156 221.619 188.156 232.437C210.156 240.937 226.156 275.437 188.656 292.937C182.156 295.104 166.856 296.037 157.656 282.437" stroke="#f15d239c"/>
<motion.path
        initial={{ pathLength: 0 }}
        animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
        transition={{ duration: 2, ease: "easeInOut",delay:4 }}
        d="M165.156 167.937C165.323 169.104 167.156 172.337 173.156 175.937C180.49 181.604 196.956 195.537 204.156 205.937C208.823 214.271 220.356 231.637 229.156 234.437C233.156 235.937 243.656 240.937 243.156 240.937C242.656 240.937 245.656 240.937 246.656 247.437C246.656 251.771 244.756 261.737 237.156 266.937C227.656 273.437 222.156 273.437 216.656 272.437C212.256 271.637 212.49 270.771 213.156 270.437L214.156 260.437C221.99 262.937 237.356 263.837 236.156 247.437C236.323 246.771 231.156 245.437 229.156 244.937C227.156 244.437 210.956 236.637 204.156 225.437C200.323 218.937 190.156 206.937 189.656 205.937C189.156 204.937 163.656 177.137 159.656 175.937" stroke="#f15d239c"/>
<motion.path
        initial={{ pathLength: 0 }}
        animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
        transition={{ duration: 2, ease: "easeInOut",delay:4}}
        d="M165.156 157.437C165.323 156.271 167.156 153.521 173.156 149.921C180.49 144.255 196.956 130.321 204.156 119.921C208.823 111.588 220.356 94.2213 229.156 91.4213C233.156 89.9213 243.656 84.9213 243.156 84.9213C242.656 84.9213 245.656 84.9213 246.656 78.4213C246.656 74.088 244.756 64.1213 237.156 58.9213C227.656 52.4213 222.156 52.4213 216.656 53.4213C212.256 54.2213 212.49 55.088 213.156 55.4213L214.156 65.4213C221.99 62.9213 237.356 62.0213 236.156 78.4213C236.323 79.088 231.156 80.4213 229.156 80.9213C227.156 81.4213 210.956 89.2213 204.156 100.421C200.323 106.921 190.156 118.921 189.656 119.921C189.156 120.921 163.656 149.737 159.656 150.937" stroke="#f15d239c"/>
<motion.path
        initial={{ pathLength: 0 }}
        animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
        transition={{ duration: 2, ease: "easeInOut",delay:4 }}
        d="M143.156 157.437C142.99 156.271 141.156 153.521 135.156 149.921C127.823 144.255 111.356 130.321 104.156 119.921C99.4896 111.588 87.9563 94.2213 79.1562 91.4213C75.1562 89.9213 64.6562 84.9213 65.1562 84.9213C65.6562 84.9213 62.6562 84.9213 61.6562 78.4213C61.6562 74.088 63.5563 64.1213 71.1562 58.9213C80.6562 52.4213 86.1562 52.4213 91.6562 53.4213C96.0563 54.2213 95.8229 55.088 95.1562 55.4213L94.1562 65.4213C86.3229 62.9213 70.9562 62.0213 72.1562 78.4213C71.9896 79.088 77.1562 80.4213 79.1562 80.9213C81.1562 81.4213 97.3562 89.2213 104.156 100.421C107.99 106.921 118.156 118.921 118.656 119.921C119.156 120.921 144.656 149.737 148.656 150.937" stroke="#f15d239c"/>
<motion.path
        initial={{ pathLength: 0 }}
        animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
        transition={{ duration: 2, ease: "easeInOut",delay:4 }}
        d="M143.656 167.437C143.49 168.604 141.156 171.853 135.156 175.453C127.823 181.12 111.356 195.053 104.156 205.453C99.4896 213.787 87.9563 231.153 79.1562 233.953C75.1562 235.453 64.6562 240.453 65.1562 240.453C65.6562 240.453 62.6562 240.453 61.6562 246.953C61.6562 251.287 63.5563 261.253 71.1562 266.453C80.6562 272.953 86.1562 272.953 91.6562 271.953C96.0563 271.153 95.8229 270.287 95.1562 269.953L94.1562 259.953C86.3229 262.453 70.9562 263.353 72.1562 246.953C71.9896 246.287 77.1562 244.953 79.1562 244.453C81.1562 243.953 97.3562 236.153 104.156 224.953C107.99 218.453 118.156 206.453 118.656 205.453C119.156 204.453 145.156 176.137 149.156 174.937" stroke="#f15d239c"/>
<motion.path
        initial={{ pathLength: 0 }}
        animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
        transition={{ duration: 1, ease: "easeInOut",delay:5 }}
        d="M241.156 224.937C244.49 222.771 251.756 221.237 254.156 232.437C256.556 243.637 252.156 252.437 249.656 255.437" stroke="#f15d239c"/>
<motion.path
       initial={{ pathLength: 0 }}
       animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
       transition={{ duration: 1, ease: "easeInOut",delay:5 }}
       d="M241.656 100.437C244.99 102.604 252.256 104.137 254.656 92.9372C257.056 81.7372 252.656 72.9373 250.156 69.9373" stroke="#f15d239c"/>
<motion.path
        initial={{ pathLength: 0 }}
        animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
        transition={{ duration: 1, ease: "easeInOut",delay:5 }}
        d="M66.3501 100.437C63.0168 102.604 55.7501 104.137 53.3501 92.9372C50.9501 81.7372 55.3501 72.9373 57.8501 69.9373" stroke="#f15d239c"/>
<motion.path
       initial={{ pathLength: 0 }}
       animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
       transition={{ duration: 1, ease: "easeInOut",delay:5 }}
       d="M67.3501 224.469C64.0168 222.303 56.7501 220.769 54.3501 231.969C51.9501 243.169 56.3501 251.969 58.8501 254.969" stroke="#f15d239c"/>
<motion.path
       initial={{ pathLength: 0 }}
       animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
       transition={{ duration: 2, ease: "easeInOut",delay:2 }}
       d="M149.133 174.937C147.633 190.437 148.633 221.619 120.633 232.437C98.6333 240.937 82.6333 275.437 120.133 292.937C126.633 295.104 141.933 296.037 151.133 282.437" stroke="#f15d239c"/>
<motion.path
        initial={{ pathLength: 0 }}
        animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
        transition={{ duration: 2, ease: "easeInOut",delay:2 }}
         d="M143.921 167.937C128.421 169.437 97.2396 168.437 86.4214 196.437C77.9214 218.437 43.4214 234.437 25.9214 196.937C23.7547 190.437 22.8214 175.137 36.4214 165.937" stroke="#f15d239c"/>
<motion.path
       initial={{ pathLength: 0 }}
       animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
       transition={{ duration: 2, ease: "easeInOut",delay:2 }}
       d="M143.921 157.414C128.421 155.914 97.2396 156.914 86.4214 128.914C77.9214 106.914 43.4214 90.9141 25.9214 128.414C23.7547 134.914 22.8214 150.214 36.4214 159.414" stroke="#f15d239c"/>

<motion.path
       initial={{ pathLength: 0 }}
       animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
       transition={{ duration: 2, ease: "easeInOut",delay:2 }}
        d="M164.656 167.937C180.156 169.437 211.338 168.437 222.156 196.437C230.656 218.437 265.156 234.437 282.656 196.937C284.823 190.437 285.756 175.137 272.156 165.937" stroke="#f15d239c"/>

<motion.path
       initial={{ pathLength: 0 }}
       animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
       transition={{ duration: 2, ease: "easeInOut",delay:2 }}
        d="M164.656 157.414C180.156 155.914 211.338 156.914 222.156 128.914C230.656 106.914 265.156 90.9141 282.656 128.414C284.823 134.914 285.756 150.214 272.156 159.414" stroke="#f15d239c"/>

<motion.path
       initial={{ pathLength: 0 }}
       animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
       transition={{ duration: 2, ease: "easeInOut",delay:2 }}
       d="M149.133 151.203C147.633 135.703 148.633 104.521 120.633 93.7026C98.6333 85.2026 82.6333 50.7026 120.133 33.2026C126.633 31.0359 141.933 30.1026 151.133 43.7026" stroke="#f15d239c"/>

<motion.path
       initial={{ pathLength: 0 }}
       animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
       transition={{ duration: 2, ease: "easeInOut",delay:2 }}
        d="M159.656 151.203C161.156 135.703 160.156 104.521 188.156 93.7026C210.156 85.2026 226.156 50.7026 188.656 33.2026C182.156 31.0359 166.856 30.1026 157.656 43.7026" stroke="#f15d239c"/>

{/* ////////////////////////// */}




{/* /////////////////////////////////// */}
</svg>


  );
};


export default ScrollImageChanger;