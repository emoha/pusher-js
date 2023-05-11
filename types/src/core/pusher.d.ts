import AbstractRuntime from '../runtimes/interface';
import Channels from './channels/channels';
import Channel from './channels/channel';
import { default as EventsDispatcher } from './events/dispatcher';
import Timeline from './timeline/timeline';
import TimelineSender from './timeline/timeline_sender';
import ConnectionManager from './connection/connection_manager';
import { PeriodicTimer } from './utils/timers';
import { Options } from './options';
import { Config } from './config';
import UserFacade from './user';
export default class Pusher {
    static instances: Pusher[];
    static isReady: boolean;
    static logToConsole: boolean;
    static Runtime: AbstractRuntime;
    static ScriptReceivers: any;
    static DependenciesReceivers: any;
    static auth_callbacks: any;
    static ready(): void;
    static log: (message: any) => void;
    private static getClientFeatures;
    key: string;
    config: Config;
    channels: Channels;
    global_emitter: EventsDispatcher;
    sessionID: number;
    timeline: Timeline;
    timelineSender: TimelineSender;
    connection: ConnectionManager;
    timelineSenderTimer: PeriodicTimer;
    user: UserFacade;
    constructor(app_key: string, options: Options);
    channel(name: string): Channel;
    allChannels(): Channel[];
    connect(): void;
    disconnect(): void;
    bind(event_name: string, callback: Function, context?: any): Pusher;
    unbind(event_name?: string, callback?: Function, context?: any): Pusher;
    bind_global(callback: Function): Pusher;
    unbind_global(callback?: Function): Pusher;
    unbind_all(callback?: Function): Pusher;
    subscribeAll(): void;
    subscribe(channel_name: string): Channel;
    unsubscribe(channel_name: string): void;
    send_event(event_name: string, data: any, channel?: string): boolean;
    shouldUseTLS(): boolean;
    signin(): void;
}
