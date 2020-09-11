import LinikShareButtonAbstract from './linik-share-button.abstract';
import {IEventHandler} from './event-handler.interfece';

class ShareButtonFacebook extends LinikShareButtonAbstract {

	constructor(eventHandler: IEventHandler ,className: string, url: string) {
		super(eventHandler ,className, url);
	}

	createLink(): string {
		return `https://www.facebook.com/share.php?u=${this.url}`;
	}
}

export default ShareButtonFacebook;
