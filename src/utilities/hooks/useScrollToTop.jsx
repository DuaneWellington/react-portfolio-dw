// PATH: 'src/utilities/hooks/useScrollToTop.jsx'

// import { useEffect } from "react";

// function useScrollToTop() {
//     useEffect(() => {
//         const handleScrollToTop = () => {
//             window.scrollTo({
//                 top: 0,
//                 behavior: "smooth",
//             });
//         };

//         const navLinks = document.querySelectorAll("nav a");
//         navLinks.forEach((link) => {
//             link.addEventListener("click", handleScrollToTop);
//         });
        
//         return () => {
//             navLinks.forEach((link) => {
//                 link.removeEventListener("click", handleScrollToTop);
//             });
//         };
//     }, []);
// }

// export default useScrollToTop