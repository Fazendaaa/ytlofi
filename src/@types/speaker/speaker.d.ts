/**
 * Since this package has no typings for TS, this is an unofficial speaker port.
 */
declare module 'speaker' {
    import { Writable } from 'stream';
    
    export class Speaker extends Writable {
        constructor(opts?: object);
    }
}
