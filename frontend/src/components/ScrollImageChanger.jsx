import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const ScrollImageChanger = () => {
    const svgRef = useRef(null);
    const isInView = useInView(svgRef, { triggerOnce: false, margin: "-50px" });
  

  return (
<svg  width="488" height="438" viewBox="0 0 788 838" fill="none" xmlns="http://www.w3.org/2000/svg" ref={svgRef} >
<svg >
<motion.path
        initial={{ pathLength: 0 }}
        animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
        transition={{ duration: 2, ease: "easeInOut",delay:2 }}
d="M360.174 420.194C315.589 418.487 237.823 424.291 223.307 447.847C211.556 470.38 188.054 508.275 172.501 515.444C152.455 527.051 107.387 534.494 87.4795 483.694C82.2952 465.259 82.5026 429.002 124.807 431.46C131.027 433.167 143.676 438.425 144.506 445.799" stroke="#f15d239c" stroke-width="2"/>
<motion.path
 initial={{ pathLength: 0 }}
 animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
 transition={{ duration: 2, ease: "easeInOut",delay:2 }}
d="M359.174 402.639C314.589 404.346 236.823 398.543 222.307 374.986C210.556 352.454 187.054 314.559 171.501 307.39C151.455 295.782 106.387 288.34 86.4795 339.14C81.2952 357.575 81.5026 393.831 123.807 391.373C130.027 389.666 142.676 384.409 143.506 377.035" stroke="#f15d239c" stroke-width="2"/>
<motion.path
        initial={{ pathLength: 0 }}
        animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
        transition={{ duration: 2, ease: "easeInOut",delay:2 }}
         d="M420.174 420.194C464.759 418.487 542.524 424.291 557.041 447.847C568.792 470.38 592.294 508.275 607.847 515.444C627.893 527.051 672.96 534.494 692.868 483.694C698.052 465.259 697.845 429.002 655.541 431.46C649.32 433.167 636.671 438.425 635.842 445.799" stroke="#f15d239c" stroke-width="2"/>
<motion.path
        initial={{ pathLength: 0 }}
        animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
        transition={{ duration: 2, ease: "easeInOut",delay:2 }}
         d="M420.174 402.639C464.759 404.346 542.524 398.543 557.041 374.986C568.792 352.454 592.294 314.559 607.847 307.39C627.893 295.782 672.96 288.34 692.868 339.14C698.052 357.575 697.845 393.831 655.541 391.373C649.32 389.666 636.671 384.409 635.842 377.035" stroke="#f15d239c" stroke-width="2"/>
<motion.path
        initial={{ pathLength: 0 }}
        animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
        transition={{ duration: 2, ease: "easeInOut",delay:2 }}
         d="M379.474 379.902C380.234 332.184 371.722 249.175 344.958 234.249C319.412 222.253 276.351 198.08 267.918 181.63C254.396 160.489 244.894 112.486 301.289 89.9138C321.808 83.9042 362.43 83.2093 360.77 128.507C359.018 135.202 353.455 148.861 345.216 149.934" stroke="#f15d239c" stroke-width="2"/>
<motion.path
        initial={{ pathLength: 0 }}
        animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
        transition={{ duration: 2, ease: "easeInOut",delay:2 }}
         d="M421.761 147.345C413.478 146.644 407.262 133.251 405.189 126.643C401.342 81.4689 441.953 80.3306 462.74 85.4081C520.165 105.411 512.992 153.79 500.506 175.519C492.877 192.331 451.031 218.42 426.092 231.555C400.078 247.673 395.586 330.975 398.65 378.607L421.761 403.104" stroke="#f15d239c" stroke-width="2"/>
<motion.path
        initial={{ pathLength: 0 }}
        animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
        transition={{ duration: 2, ease: "easeInOut",delay:3 }}
        d="M412.174 390.917C437.673 371.797 491.978 327.41 505.21 302.827C521.749 269.024 568.888 201.625 625.123 202.445C628.913 194.25 630.084 171.92 604.448 148.156C593.766 142.693 568.061 135.045 550.694 148.156" stroke="#f15d239c" stroke-width="2"/>
<motion.path
       initial={{ pathLength: 0 }}
       animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
       transition={{ duration: 2, ease: "easeInOut",delay:3 }}
         d="M412.174 435.917C437.673 454.961 491.978 499.17 505.21 523.655C521.749 557.322 568.888 624.452 625.123 623.635C628.913 631.797 630.084 654.038 604.448 677.707C593.766 683.148 568.061 690.765 550.694 677.707" stroke="#f15d239c" stroke-width="2"/>
<motion.path
        initial={{ pathLength: 0 }}
        animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
        transition={{ duration: 2, ease: "easeInOut",delay:3 }}
         d="M373.174 435.917C347.438 454.961 292.627 499.17 279.273 523.655C262.579 557.322 215.002 624.452 158.244 623.635C154.419 631.797 153.236 654.038 179.111 677.707C189.892 683.148 215.837 690.765 233.365 677.707" stroke="#f15d239c" stroke-width="2"/>
<motion.path
       initial={{ pathLength: 0 }}
       animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
       transition={{ duration: 2, ease: "easeInOut",delay:3 }}
        d="M373.174 388.917C347.438 369.797 292.627 325.41 279.273 300.827C262.579 267.024 215.002 199.625 158.244 200.445C154.419 192.25 153.236 169.92 179.111 146.156C189.892 140.693 215.837 133.045 233.365 146.156" stroke="#f15d239c" stroke-width="2"/>
<motion.path
       initial={{ pathLength: 0 }}
       animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
       transition={{ duration: 2, ease: "easeInOut",delay:2 }}
         d="M381.029 444.205C384.094 491.837 379.602 575.139 353.587 591.256C328.649 604.391 286.803 630.48 279.173 647.292C266.688 669.021 259.515 717.4 316.939 737.403C337.726 742.481 378.338 741.343 374.491 696.169C372.418 689.56 366.201 676.168 357.919 675.467" stroke="#f15d239c" stroke-width="2"/>
<motion.path
        initial={{ pathLength: 0 }}
        animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
        transition={{ duration: 2, ease: "easeInOut",delay:2 }}
        d="M400.245 444.634C399.485 492.352 407.996 575.36 434.761 590.287C460.307 602.283 503.368 626.455 511.801 642.905C525.323 664.047 534.825 712.05 478.43 734.621C457.911 740.631 417.288 741.326 418.949 696.028C420.7 689.333 426.263 675.675 434.503 674.601" stroke="#f15d239c" stroke-width="2"/>
<motion.path
       initial={{ pathLength: 0 }}
       animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
       transition={{ duration: 2, ease: "easeInOut",delay:0 }}
         d="M706.937 598.125C698.642 722.872 609.469 758.846 565.919 761.24C411.628 898.298 267.294 818.348 214.414 761.24C99.1109 747.288 75.8143 646.683 78.5789 598.125C-61.6091 425.777 20.1672 282.837 78.5789 232.911C71.9427 112.267 166.369 71.8474 214.412 66.718C365.384 -50.643 511.655 17.8176 565.919 66.718C683.71 77.3871 709.01 181.959 706.937 232.911C850.443 390.486 766.731 542.043 706.937 598.125Z" stroke="#f15d239c" stroke-width="2"/>
</svg>

</svg>


  );
};


export default ScrollImageChanger;