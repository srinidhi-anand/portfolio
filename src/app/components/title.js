import "../welcome.css";
import "../about/about.css";
import "../globals.css";
import "../title.css";

export default function Title(props) {
    const { name, description = '',IsDetails =false, cls = '' } = props;
    const containerClass = IsDetails ? 'padding-50' : '' ;
    const paraClass = cls ? ` description ${cls} animate-bounce` : 'description';
    return (
        <div className={`page-container ${containerClass}`}>
            <div className="page page-header">
                <h1 className="title preserve-whitespace e2e-site-logo-text"> {name} </h1>
                <p className={paraClass}>{description}</p>
            </div>
        </div>
    )
};