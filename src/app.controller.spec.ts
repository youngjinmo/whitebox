import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
   let appController: AppController;

   beforeEach(async () => {
      const appService = new AppService();
      appController = new AppController(appService);
   });

   describe('root', () => {
      it('should return "pong!"', () => {
         expect(appController.ping()).toBe('pong!');
      });
   });
});
