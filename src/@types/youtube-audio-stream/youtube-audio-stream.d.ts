/**
 * Since this package has no typings for TS, this is an unofficial youtube-audio-stream port.
 */
declare module 'youtube-audio-stream' {
    import { WriteStream } from 'fs';
    
    export type stream = WriteStream;

    export function streamify(uri: string, opt?: object): stream;
}
