import { useState, useCallback } from "react";
import CodeMirror from '@uiw/react-codemirror';
import { cpp } from '@codemirror/lang-cpp';
import { githubDark } from '@uiw/codemirror-theme-github';


export const CodeEditor = () => {
    const DEFAULT_TEMPLATE = "#include <iostream>\n#include <fstream>\nstd::ifstream fin(\"data.in\");\nint n;\nint main() {\n\tfin>>n;\n\tstd::cout << n;\n\treturn 0;\n}"

    const [value, setValue] = useState(DEFAULT_TEMPLATE);
    const onChange = useCallback((val: string, viewUpdate: unknown) => {
        console.log('val:', val);
        setValue(val);
    }, []);

    return <div className="flex flex-col h-full">
        <CodeMirror value={value} height={"100%"} className="flex-1 text-lg" theme={"dark"} extensions={[cpp()]} onChange={onChange} />
    </div>
}
