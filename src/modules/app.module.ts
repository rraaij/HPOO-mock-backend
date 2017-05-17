import { Module } from 'nest.js';
import { FlowController } from '../controllers/flow-controller';
import { FlowService } from '../services/flow-service';

@Module({
    modules: [],
    controllers: [ FlowController ],
  components: [ FlowService ]
})
export class ApplicationModule {}
