export type PistonProcessResult = {
    stdout: string,
    stderr: string,
    code: number,
    signal: number,
    output: string
}

export type PistonResult = {
    language: 'cpp',
    version: string,
    run: PistonProcessResult,
    compile: PistonProcessResult,
};

export class Piston {
    static async ExecuteCode(source: string): Promise<PistonResult> {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Cookie", "engineerman.sid=s%3ANIhZ3Z_HbSkvMAnWqBVqcxX05Z71WLgI.EPPYe7n2yVTTR4uEZnKVDze3OKDviPqJDmKJlBiKqQY");

        const raw = JSON.stringify({
            "language": "cpp",
            "version": "10.2.0",
            "files": [
                {
                    "name": "main.cpp",
                    "content": source
                },
                {
                    "name": "data.in",
                    "encoding": "base64",
                    "content": "NDI="
                }
            ],
            "stdin": "",
            "compile_timeout": 10000,
            "run_timeout": 3000,
            "compile_memory_limit": -1,
            "run_memory_limit": -1
        });

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
        };

        const res = await fetch("https://emkc.org/api/v2/piston/execute", requestOptions);
        const data = await res.json();

        return data as PistonResult;
    }
}