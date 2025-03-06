// "use client";
// import { useEffect, useRef } from "react";
// import Splide from "@splidejs/splide";
// import AutoScroll from "@splidejs/splide-extension-auto-scroll";
// import "@splidejs/splide/dist/css/splide.min.css";
// import Image from "next/image"

// const LogoScroller = () => {
//   const splideRef = useRef<HTMLDivElement | null>(null);
//   const splideInstance = useRef<Splide | null>(null);

//   useEffect(() => {
//     if (splideRef.current && !splideInstance.current) {
//       splideInstance.current = new Splide(splideRef.current, {
//         type: "loop",
//         drag: false,
//         pagination: false,
//         arrows: false,
//         autoWidth: true,
//         gap: "1rem",
//         autoScroll: {
//           speed: 1,
//           pauseOnHover: true,
//         }
//       })

//       splideInstance.current.mount({ AutoScroll})
//     }

//     return () => {
//       splideInstance.current?.destroy();
//       splideInstance.current = null;
//     }
//   }, [])

//   return (
//     <div ref={splideRef} className="splide">
//       <div className="splide_track">
//         <ul className="splide_list">
//           <li className="splide_slide p-4">
//             <Image src="" alt="Logo 1" className="h-16 w-auto" />
//           </li>
//           <li className="splide_slide p-4">
//             <Image src="" alt="Logo 2" className="h-16 w-auto" />
//           </li>
//           <li className="splide_slide p-4">
//             <Image src="" alt="Logo 3" className="h-16 w-auto" />
//           </li>
//           <li className="splide_lide p-4">
//             <Image src="" alt="Logo 4" className="h-16 w-auto" />
//           </li>
//           <li className="splide_lide p-4">
//             <Image src="" alt="Logo 5" className="h-16 w-auto" />
//           </li>
//           <li className="splide_lide p-4">
//             <Image src="" alt="Logo 6" className="h-16 w-auto" />
//           </li>
//           <li className="splide_lide p-4">
//             <Image src="" alt="Logo 7" className="h-16 w-auto" />
//           </li>
//         </ul>
//       </div>
//     </div>
//   )
// }

// export default LogoScroller