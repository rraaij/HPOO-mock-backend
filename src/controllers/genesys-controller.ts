import {Body, Controller, Post, Response, Headers, Put, Param, Delete, Get} from '@nestjs/common';
import { GenesysService } from '../services/genesys-service';

@Controller('UCSWebServices/rks_contactlist')
export class GenesysController {

  constructor(private genesysService: GenesysService) {}

  @Post('/add')
  async addContact(@Response() response,
                   @Headers('headers') headers,
                   @Body('body') body) {
    const serviceResponse = await this.genesysService.addContact(body);
  }

  @Put('/update?Id=:contactId')
  async updateContact(@Response() response,
                      @Headers('headers') headers,
                      @Param('contactId') contactId,
                      @Body('body') body) {
    const serviceResponse = await this.genesysService.updateContact(contactId, body);
  }

  @Delete('/delete?Id=:contactId')
  async deleteContact(@Response() response,
                      @Headers('headers') headers,
                      @Param('contactId') contactId) {
    const serviceResponse = await this.genesysService.deleteContact(contactId);
  }

  @Delete('/delete_all?OrgId=:orgId')
  async deleteAllContactsInOrganization(@Response() response,
                      @Headers('headers') headers,
                      @Param('orgId') orgId,
                      @Body('body') body) {
    const serviceResponse = await this.genesysService.deleteAllContactsInOrganization(orgId, body);
  }

  @Get('/retrieve?OrgId=:orgId&RecordType=:recordType')
  async getInternalContacts(@Response() response,
                      @Headers('headers') headers,
                      @Param('orgId') orgId,
                      @Param('recordType') recordType,
                      @Body('body') body) {
    const serviceResponse = await this.genesysService.getInternalContacts(orgId, recordType, body);
  }

  @Get('/retrieve?RecordType=EXTERNAL')
  async getExternalContacts(@Response() response,
                            @Headers('headers') headers) {
    const serviceResponse = await this.genesysService.getExternalContacts();
  }

}
