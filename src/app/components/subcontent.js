'use client';

import "../subcontent.css";
import { works } from "../../../helper/projDescription";
import SplitPane from 'react-split-pane';
import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';

export default async function Subcontent(props) {
    const { title } = props;
    const { stack, text, url, image_count, extension } = works[`${title}`];
    const descriptions = text.split('.');
    let fileNames = Array.from(Array(image_count).keys()).map((item) => `/${url}${item + 1}.${extension[item]}`);
    let files = fileNames || [];
    const gridSize = files.length < 2 ? 9 : 5;
    return (
        <>
            <div className="position-relative">
                <div className="mt-3 p-6 text-center contents-center font-set subtitle-font items-center">
                    {stack}
                </div>
                <SplitPane split="vertical" minSize={50} maxSize={300} defaultSize={200} pane1Style={{ width: "200px" }} primary="second">
                    <div className="row">
                        {files.map((src, index) => (
                            <div key={index} className={`col-md-${gridSize} mt-4 mb-4 content-center`}>
                                <div className="card">
                                    <Image
                                        src={src}
                                        alt={`Photo ${index + 1}`}
                                        layout="responsive"
                                        width={800}
                                        height={600}
                                        className="card-img-top"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-3 pt-6 pl-8 pr-8 pb-2">
                        {descriptions.map((item, index) => (
                            item && <div key={`flex_${index}`} className="flex flex-row">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4 mt-3 mr-4">
                                    <path fillRule="evenodd" d="M12.78 7.595a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06l2.72-2.72-2.72-2.72a.75.75 0 0 1 1.06-1.06l3.25 3.25Zm-8.25-3.25 3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06l2.72-2.72-2.72-2.72a.75.75 0 0 1 1.06-1.06Z" clipRule="evenodd" />
                                </svg>
                                <div key={index} className="w-full font-set">
                                    <ul key={`ul_${index}`}>
                                        <li key={`li_${index}`}> {item}</li>
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </SplitPane>
            </div>
        </>
    )
};