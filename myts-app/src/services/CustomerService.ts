import { CUSTOMERS, CustomerType } from '../mockdata/customers';

//Customer service
export class CustomerService {
    constructor() {

    }
    //apis : sync
    // findAll() {
    //     return CUSTOMERS;
    // }
    //api : async : callbacks
    // findAll(cb) {
    //     setTimeout(cb, 5000, CUSTOMERS);
    // }
    //api : async : Promises : Promise of CustomerType
    findAll(): Promise<CustomerType> {
        return new Promise((resolove, reject) => {
            setTimeout(resolove, 5000, CUSTOMERS);
        });
    }
}