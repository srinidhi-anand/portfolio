'use client';

// import "../welcome.css";
// import "../about/about.css";
// import "../globals.css";
// import "../projects/projects.css";
import "../subcontent.css";
import { works } from "../../../helper/projDescription.ts";
import SplitPane, { Pane } from 'react-split-pane';

export default async function Subcontent(props) {
    const { title } = props;
    const { stack, text, url } = works[`${title}`];
    const descriptions = text.split('.');

    // const getfiles = () => {
    //     return new Promise(async (resolve, reject) => {
    //         const response = await fetch(process.env.URL + '/api/getfile', {
    //             method: 'POST',
    //             body: url,
    //         });
    //         console.log(response);
    //         return resolve(response)
    //     })
    // }

    // console.log(getfiles());

    return (
        <>
            <div className="mt-3 p-6 text-center contents-center font-set subtitle-font items-center">
                {stack}
            </div>
            <SplitPane split="vertical" minSize={50} defaultSize={100}>
                {/* <Pane initialSize="75%" minSize="10%" maxSize="500px"> */}
                    <div className="mt-5 pt-8 pl-8 pr-8 pb-2">
                        {descriptions.map((item, index) => (
                            <div key={index} className="w-full font-set">
                                <ul key={`ul_${index}`}>
                                    <li key={`li_${index}`}> {item}</li>
                                </ul>
                            </div>
                        ))}
                    </div>
                {/* </Pane> */}
                {/* <Pane initialSize="25%" minSize="10%" maxSize="500px"></Pane> */}
                <div className="mt-5 pt-8 pl-8 pr-8 pb-2">
                        {descriptions.map((item) => (
                            <div className="w-full font-set">
                                <ul>
                                    <li> {item}</li>
                                </ul>
                            </div>
                        ))}
                    </div>
                
            </SplitPane>


        </>
    )
}