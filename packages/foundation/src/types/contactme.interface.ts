import { ContactModel } from './contact.interface'
import { EntrieModel } from './entrie.interface';

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
