import {Component} from "@nestjs/common";
@Component()
export class GenesysService {

  private contacts = [
    {
      "ModifiedDate": "2016-12-16T10:03:09.000Z",
      "ContactDescription": "Marcellus Samson",
      "CreatedDate": "2016-12-16T10:03:09.000Z",
      "FirstName": "Marcellus",
      "PhoneNumber": "36280881@Switch_1173",
      "Id": "0001DaC1RXCK025M",
      "LastName": "Samson",
      "ContactType": "1173_PHONEBOOK"
    }, {
      "ModifiedDate": "2016-12-16T10:03:09.000Z",
      "ContactDescription": "Inge Leegstra",
      "CreatedDate": "2016-12-16T10:03:09.000Z",
      "FirstName": "Inge",
      "PhoneNumber": "78289186@Switch_1173",
      "Id": "0001DaC1RXCK025N",
      "LastName": "Leegstra",
      "ContactType": "1173_PHONEBOOK"
    }
  ]

  addContact(body: any) {
    this.contacts.push(body);
    return Promise.resolve();
  }

  updateContact(contactId: number, body: any) {
    return Promise.resolve();
  }

  deleteContact(contactId: number) {
    return Promise.resolve();
  }

  deleteAllContactsInOrganization(orgId: number, body: any) {
    return Promise.resolve();
  }

  getInternalContacts(orgId: number, recordType: string, body: any) {
    return Promise.resolve();
  }

  getExternalContacts() {
    return Promise.resolve();
  }
}
