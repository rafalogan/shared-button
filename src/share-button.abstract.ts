import {IEventHandler} from './event-handler.interfece';

export default abstract class ShareButtonAbstract {
	eventHandler: IEventHandler;
	className: string;

	constructor(eventHandler: IEventHandler, className: string) {
		this.eventHandler = eventHandler;
		this.className = className;
	}


	abstract createAction(): any;

	bind() {
		const action = this.createAction();

		this.eventHandler.addEventListenerToClass(this.className, 'click', action)
	}
}
