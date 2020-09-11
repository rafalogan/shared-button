import LinikShareButtonAbstract from './linik-share-button.abstract';
import {IEventHandler} from './event-handler.interfece';

class ShareButtonTwitter extends LinikShareButtonAbstract {

	constructor(eventHandler: IEventHandler, className: string, url: string) {
		super(eventHandler, className, url);
	}

	createLink(): string {
		return `https://twitter.com/share?url=${this.url}`;
	}
}


export default ShareButtonTwitter;
