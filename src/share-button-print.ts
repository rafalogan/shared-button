import ShareButtonAbstract from './share-button.abstract';
import {IEventHandler} from './event-handler.interfece';

class ShareButtonPrint extends ShareButtonAbstract {

	constructor(eventHandler: IEventHandler, className: string) {
		super(eventHandler ,className);
	}

	createAction() {
		return () => window.print();
	}

}

export default ShareButtonPrint
