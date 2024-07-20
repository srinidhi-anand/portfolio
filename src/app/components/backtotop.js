import "../welcome.css";
import "../arrow.css";
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function BackToTop() {
    return (
        <><div className="mt-12"></div>
        <section className="back-to-top back-to-top-fixed back-to-top-fixed-with-panel" data-hover-hint="backToTop">
            {/* <a href="#"><span className="arrow">↑</span>
                <span className="preserve-whitespace">Back to Top</span>
            </a> */}
            <a className="back-to-top-fixed back-to-top-fixed-with-panel" data-hover-hint="backToTop" data-hover-hint-placement="top-start" href="#">
            {/* <span className="pl-6"><i class="bi bi-arrow-up-circle"></i> </span> */}
            <span className="pb-10 icon"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-arrow-up-circle" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z"/> 
                </svg>
            </span>
            </a>
        </section></>
    )
}