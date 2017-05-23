import { Module } from '@nestjs/common';
import { FlowController } from '../controllers/flow-controller';
import { GenesysController } from '../controllers/genesys-controller';
import { FlowService } from '../services/flow-service';
import { GenesysService } from '../services/genesys-service';

@Module({
    modules: [],
    controllers: [ FlowController, GenesysController ],
  components: [ FlowService, GenesysService ]
})
export class ApplicationModule {}
