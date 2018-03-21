/**
 * Since this package has no typings for TS, this is an unofficial lame port.
 */
declare module 'lame' {
    import { WriteStream } from 'fs';

    export function Decoder(opts?: object): WriteStream;
}
