import { Button } from "@/components/ui/button"

import {
    Panel,
    PanelGroup,
    PanelResizeHandle,
} from "react-resizable-panels";

export const Shell = () => {
    return <main className="h-screen bg-background p-2 flex flex-co">
        <PanelGroup direction="horizontal" className="flex-1">
            <Panel id="sidebar" minSize={5}>
                <Button>Hello World</Button>
            </Panel>
            <PanelResizeHandle className="w-1 bg-secondary focus:bg-primary transition-colors" />
            <Panel minSize={25}>
                <h1>Astro</h1>
            </Panel>
        </PanelGroup>
    </main>;
}