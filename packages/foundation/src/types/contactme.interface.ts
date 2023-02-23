import { ContactModel } from './Contact.interface'
import { EntrieModel } from './Entrie.interface';

export interface ContactMeAPI {
    message1: string;
    message2: string;
    contacts: EntrieModel[];
}

export interface ContactMeModel {
    message1: string;
    message2: string;
    contacts: ContactModel[];
}
