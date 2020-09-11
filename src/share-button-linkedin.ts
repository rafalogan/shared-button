import LinikShareButtonAbstract from './linik-share-button.abstract';
import {IEventHandler} from './event-handler.interfece';

class ShareButtonLinkedin extends LinikShareButtonAbstract {

	constructor( eventHandler: IEventHandler ,className: string, url: string) {
		super(eventHandler, className, url);
	}

	createLink(): string {
		return `https://www.linkedin.com/shareArticle?url=${this.url}`;
	}
}

export default ShareButtonLinkedin;
