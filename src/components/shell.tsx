import { Button } from "@/components/ui/button"
import { CodeEditor } from "@/components/editor";

import {
    Panel,
    PanelGroup,
    PanelResizeHandle,
} from "react-resizable-panels";
import { useState } from "react";
import { Piston } from "@/lib/piston";
import { HelixLogo } from "./ui/logo";

export const Shell = () => {
    const [source, setSource] = useState("");
    const [output, setOutput] = useState("Run to see code output.");

    const runCode = async () => {
        const data = await Piston.ExecuteCode(source);
        setOutput(data.run.output);
    }

    return <main className="h-screen bg-background p-2 flex flex-co">
        <PanelGroup direction="horizontal" className="flex-1">
            <Panel id="sidebar" minSize={5}>
                <div className="flex flex-col h-full justify-between">
                    <div className="mx-2">
                        <div className="flex flex-row justify-between">
                            <Button onClick={runCode}>Run Code</Button>
                            <Button onClick={runCode}>Add File</Button>
                            <Button onClick={runCode}>Settings</Button>
                        </div>

                        <div className="flex flex-col gap-2 my-2">
                            <Button variant={"outline"} size={"sm"}>main.cpp</Button>
                            <Button variant={"outline"} size={"sm"}>data.in</Button>
                            <Button variant={"outline"} size={"sm"}>data.out</Button>
                        </div>
                    </div>

                    <div className=" w-full flex flex-col text-center">
                        <HelixLogo width={250} height={100} />
                        <p>Created by <a href="https://asandei.com" className="hover:underline" target="_blank">Stefan Asandei</a>. </p>
                    </div>
                </div>
            </Panel>
            <PanelResizeHandle className="w-1 bg-secondary focus:bg-primary transition-colors" />
            <Panel minSize={25} defaultSize={85}>

                <PanelGroup direction="vertical" className="flex-1">
                    <Panel id="editor" minSize={25}>
                        <CodeEditor onChange={(newValue) => setSource(newValue)} />
                    </Panel>
                    <PanelResizeHandle className="h-1 bg-secondary focus:bg-primary transition-colors" />
                    <Panel minSize={10} defaultSize={15} className="mx-2 my-1">
                        <pre>{output}</pre>
                    </Panel>
                </PanelGroup>

            </Panel>
        </PanelGroup>
    </main>;
}