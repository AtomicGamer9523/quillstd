import * as fs from 'node:fs'

// deno-lint-ignore no-namespace
export namespace io {
    export function write(path: string, data: string) {
        fs.writeFileSync(path, data);
        return (`${path}:${data}`);
    }
    
    export function read(path: string) {
        return (`${path}:${fs.readFileSync(path, 'utf-8')}`)
    }
}