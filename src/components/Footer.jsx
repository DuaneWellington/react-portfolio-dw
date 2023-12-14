// PATH: 'react-portfolio-dw/src/components/Footer.jsx'

function Footer(props) {

  function ScrollToTopButton() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className="scroll-to-top" onClick={scrollToTop}>
            ↑ Back to top ↑
        </div>
    );
}}

export default Footer; 
  