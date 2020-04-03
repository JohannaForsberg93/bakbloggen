export class Artiklar { //TODO: artikel 
	constructor(
		public title: string,
		public content: string,
		public author?: string,  // ? == optional
		public timeToRead?: string
	) {
        console.log("title: " + title);
        console.log("content: " + content);
    }
}
