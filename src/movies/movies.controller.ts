import { Controller, Get, Param } from '@nestjs/common';

@Controller('/movies')   // ('movies') : Entry Point를 컨트롤함
export class MoviesController {

    @Get()
    getAll(){
        return `This will return all movies`;
    }

    //('/:id')와 @Param('id')는 동일해야함 
    //id:string 은 위와 동일하지 않아도됨
    @Get('/:id')
    getOne(@Param('id') id:string){
        return `This will return one movie with the id: ${id}`;
    }
}
