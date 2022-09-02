export class Serie {
    constructor(private idA: number, private nameA: string, private channelA: string, private seasonsA: number, private descriptionA: string,
        private webpageA: string, private posterA: string){}
    get id(): number {return this.idA;}
    get name(): string {return this.nameA;}
    get channel(): string {return this.channelA;}
    get seasons(): number {return this.seasonsA;}
    get description(): string {return this.descriptionA;}
    get webpage(): string {return this.webpageA;}
    get poster(): string {return this.posterA;}
}
