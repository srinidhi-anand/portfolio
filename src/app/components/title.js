import "../welcome.css";
import "../about/about.css";
import "../globals.css";
import "../title.css";

export default function Title(props) {
    const { name, description = '' } = props;
    return (
        <div className="page-container">
            <div className="page page-header">
                <h1 className="title preserve-whitespace e2e-site-logo-text"> {name} </h1>
                <p className="description">{description}</p>
            </div>
        </div>
    )
};