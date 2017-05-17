import {Body, Controller, Get, Headers, HttpException, HttpStatus, Param, Post, Response} from 'nest.js';
import { FlowService } from '../services/flow-service';

@Controller('oo/rest/v2')
export class FlowController {

  constructor(private flowService: FlowService) {}

  // #Authenticeren door middel van basic authentication
  //   $user = "username"
  //   $pass= "password"
  //   $base64AuthInfo = [Convert]::ToBase64String([Text.Encoding]::ASCII.GetBytes(("{0}:{1}" -f $user,$pass)))
  // #Enable TLS1.2, alleen als het nodig is.
  //   if ([Net.ServicePointManager]::SecurityProtocol -ne [Net.SecurityProtocolType]::Tls12)
  // {[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12}

  // Get a token
  @Get('/executions')
  async getToken(@Response() res, @Headers('headers') headers) {
    // -Headers @{Authorization=("Basic {0}" -f $base64AuthInfo)}
    // -ContentType "application/json"
    // -Accept "application/json"
    if(headers.contentType === undefined || headers.contentType !== 'application/json') {
      throw new HttpException('ContentType not supplied', 401);
    }
    const token = await this.flowService.getToken();
    console.log('>>> [getToken]');
    return res.status(HttpStatus.OK).json(token);
  }

  // starting a flow
  @Post('/executions')
  startFlow(@Response() res, @Headers('headers') headers, @Body('body') body) {
    // -Headers @{Authorization=("Basic {0}" -f $base64AuthInfo)}
    // -ContentType "application/json"
    // -Accept "application/json"
    // -Method POST
    // -Body '{"flowUuid": "UUID vd flow", "runName": "Naam vd run", "inputs": {"input1": "value for input1"}}'
    const flow = this.flowService.startFlow()
      .then(user => res.status(HttpStatus.OK).json(flow));
  }

  // read status of a run
  @Get(`/executions/:executionId/summary`)
  async getRunStatus(@Response() res, @Headers('headers') headers, @Param('executionId') executionId) {
    // -Headers @{Authorization=("Basic {0}" -f $base64AuthInfo)}
    // -ContentType "application/json"
    // -Accept "application/json"
    // -Method GET
    const runstatus = await this.flowService.getRunStatus(executionId);
    console.log(`>>> [getRunStatus] id: ${executionId} | user: ${JSON.stringify(runstatus)}`);
    return res.status(HttpStatus.OK).json(runstatus);
  }

  // read flow results
  @Get(`/executions/:executionId/execution-log`)
  getFlowResults(@Response() res, @Headers('headers') headers, @Param('executionId') executionId) {
    // -Headers @{Authorization=("Basic {0}" -f $base64AuthInfo)}
    // -ContentType "application/json"
    // -Accept "application/json"
    // -Method GET
    const results = this.flowService.getFlowResults(executionId)
      .then(user => res.status(HttpStatus.OK).json(results));
  }
}
