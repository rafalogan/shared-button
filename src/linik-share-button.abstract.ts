import ShareButtonAbstract from './share-button.abstract';
import {IEventHandler} from './event-handler.interfece';

abstract class LinikShareButtonAbstract extends ShareButtonAbstract {
	url: string;

	constructor(eventHandler: IEventHandler, className: string, url: string) {
		super(eventHandler, className);
		this.url = url;
	}

	abstract createLink(): string;

	createAction() {
		const link = this.createLink();

		return () => window.open(link);
	}

}

export default LinikShareButtonAbstract;
