'use client';

// import "../welcome.css";
// import "../about/about.css";
// import "../globals.css";
// import "../projects/projects.css";
import "../subcontent.css";
import { works } from "../../../helper/projDescription";
import SplitPane from 'react-split-pane';
// import { useEffect } from "react";

export default async function Subcontent( props ) {
    console.log('Subcontent', props);
    const { title } = props;
    const { stack, text, url } = works[`${title}`];
    const descriptions = text.split('.');
    let fileNames = [];
    
    // useEffect(async () => {
    //     fileNames = await getFiles(url)
    // });

    // const response = await fetch(`/api/getfile?name=${url}`, {
    //     method: 'POST',
    //     body: url,
    // });
    console.log(fileNames);

    // const getfiles = () => {
    //     return new Promise(async (resolve, reject) => {
    //         try {
    //             console.log(' calling api for url', url);
    //             const response = await fetch(`/api/getfile?name=${url}`, {
    //                 method: 'POST',
    //                 body: url,
    //             });
    //             console.log(response);
    //             return resolve(response)
    //         } catch (error) {
    //             return reject(err)
    //         }
    //     })
    // }
    let files = fileNames || [];

    // useEffect(async () => {
    //     console.log("Effect hook.");
    //     try {
    //         files = await getfiles();
    //     } catch (err) {
    //         console.log('failed to get files ', err);
    //     }
    // });

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
                    {files.map((item, index) => (
                        <div key={index} className="w-full font-set">
                            <ul key={`ul_${index}`}>
                                <li key={`li_${index}`}> <Image src={item} /> </li>
                            </ul>
                        </div>
                    ))}
                </div>

            </SplitPane>


        </>
    )
};

export async function getFiles(url) {
    console.log(`getServerSideProps \n\n\n`);
    const res = await fetch(`/api/getfile?name=${url}`, { method: 'GET', cache: 'no-store' })
    const json = await res.json();
    console.log(json);
    return {
        props: {
            title,
            stack,
            descriptions: text.split('.'),
            fileNames: json.fileNames
        }
    };
}