
import { CustomerService } from './services';

interface OnInit {
    init();
}

export class CustomerComponent implements OnInit {
    constructor(private service: CustomerService) { }
    loader:string = 'loading .....'
    async init() {
        const { log } = console;
        //this.service.findAll().forEach(i=>log(i));
        // this.service.findAll(customers => {
        //     console.log(customers);
        // });
        // this.service.findAll().then(customers => {
        //     console.log(customers);
        // });
        log(this.loader)
        const customers = await this.service.findAll();
        log(customers);
    }
}
let customerComponent = new CustomerComponent(new CustomerService());
customerComponent.init();
