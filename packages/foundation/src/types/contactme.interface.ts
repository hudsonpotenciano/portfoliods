import { ContactModel } from './contact.interface'

export interface ContactMeModel {
    message1: string;
    message2: string;
    contacts: ContactModel[];
}
