import { LinkService } from './link.service';

describe('LinkService', () => {
   it('should be defined', () => {
      const linkRepository = {
         save: jest.fn().mockResolvedValue({}),
         find: jest.fn().mockResolvedValue({}),
         findBy: jest.fn().mockResolvedValue({}),
         update: jest.fn().mockResolvedValue({}),
         delete: jest.fn().mockResolvedValue({}),
      };
      const linkService = new LinkService(linkRepository);
      expect(linkService).toBeDefined();
   });
});
