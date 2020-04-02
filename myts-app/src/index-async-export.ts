//import { CustomerService } from './services/CustomerService';
import { CustomerService } from './services';

class CustomerComponent {
    //has -a
    constructor(private service: CustomerService) { }
    loader = 'loading....'
    public async init() {
        //call service findAll method : sync
        // const customers = this.service.findAll();
        // console.log(customers);
        console.log(this.loader);
        // this.service.findAll(customers => {
        //     console.log(customers);
        // });
        //promise
        // this.service.findAll().then(customers => {
        //     console.log(customers);
        // });
        const customers = await this.service.findAll();
        console.log(customers);

    }

}
//This code must be automated
let cmp = new CustomerComponent(new CustomerService());
cmp.init()