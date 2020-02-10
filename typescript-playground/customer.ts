export class Customer {

    constructor(public id: number) {}

    fooBar(): string {
        setTimeout(() => {
            console.log('ID ist', this.theId);
        }, 2000);
        
        return '';
    }

    get theId() {
        console.log('theID getter');
        return this.id.toString();
    }

    set theId(foo: string) {

    }  
}