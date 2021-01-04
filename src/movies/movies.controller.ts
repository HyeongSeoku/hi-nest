import { Controller, Get } from '@nestjs/common';

@Controller('movies')   // ('movies') : Entry Point를 컨트롤함
export class MoviesController {

    @Get()
    getAll(){
        return "This will return all movies";
    }
}
