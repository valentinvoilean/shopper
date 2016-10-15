import karma from 'karma';
import karmaConfig from '../karma.conf';
import karmaConfigDebug from '../karma.conf.debug';

const Server = karma.Server;
const debugMode = process.argv.slice(2);

new Server(debugMode === 'debugMode' ? karmaConfigDebug : karmaConfig).start();
