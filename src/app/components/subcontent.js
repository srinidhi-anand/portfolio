'use client';

import "../subcontent.css";
import { works } from "../../../helper/projDescription";
import SplitPane from 'react-split-pane';
import Image from "next/image";

export default async function Subcontent(props) {
    console.log('Subcontent', props);
    const { title } = props;
    const { stack, text, url, image_count, extension } = works[`${title}`];
    const descriptions = text.split('.');
    let fileNames = Array.from(Array(image_count).keys()).map((item) => `/${url}${item+1}.${extension[item]}`);
    let files = fileNames || [];
    return (
        <>
            <div className="mt-3 p-6 text-center contents-center font-set subtitle-font items-center">
                {stack}
            </div>
            <SplitPane split="vertical" minSize={50} defaultSize={100}>
                <div className="mt-5 pt-8 pl-8 pr-8 pb-2">
                    {descriptions.map((item, index) => (
                        <div key={index} className="w-full font-set">
                            <ul key={`ul_${index}`}>
                                <li key={`li_${index}`}> {item}</li>
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="mt-5 pt-8 pl-8 pr-8 pb-2">
                    {files.map((item, index) => (
                        <div key={index} className="w-full font-set">
                            <ul key={`ul_${index}`}>
                                <li key={`li_${index}`}>
                                    <Image src={item} width={100} height={100} />
                                </li>
                            </ul>
                        </div>
                    ))}
                </div>
            </SplitPane>
        </>
    )
};