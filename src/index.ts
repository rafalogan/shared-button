import ShareButtonTwitter from './share-button-twitter';
import ShareButtonFacebook from './share-button-facebook';
import ShareButtonLinkedin from './share-button-linkedin';
import ShareButtonPrint from './share-button-print';
import EventHandler from './event-handler';

const eventHandler = new EventHandler();

const twitterButton = new ShareButtonTwitter(eventHandler, '.btn-twitter', 'https://github.com/rafalogan/shared-button').bind();
const facebookButton = new ShareButtonFacebook(eventHandler, '.btn-facebook', 'https://github.com/rafalogan/shared-button').bind();
const linkedinButton = new ShareButtonLinkedin(eventHandler, '.btn-linkedin', 'https://github.com/rafalogan/shared-button').bind();
const pritnButton = new ShareButtonPrint(eventHandler, '.btn-print').bind();

