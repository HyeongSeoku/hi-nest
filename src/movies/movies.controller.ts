import { Controller, Delete, Get, Param, Post, Patch } from '@nestjs/common';

@Controller('/movies')   // ('movies') : Entry Point를 컨트롤함
export class MoviesController {

    @Get()
    getAll(){
        return `This will return all movies`;
    }

    //('/:id')와 @Param('id')는 동일해야함 
    //movieId:string 은 위와 동일하지 않아도됨
    @Get('/:id')
    getOne(@Param('id') movieId:string){
        return `This will return one movie with the id: ${movieId}`;
    }

    @Post()
    create(){
        return "This will create a movie";
    }

    @Delete("/:id")
    remove(@Param('id') movieId:string){
        return `This will delete a movie withe the id: ${movieId}`;
    }

    //patch = 일부분만 업데이트 할때 , Put 전체 업데이트
    @Patch('/:id')
    patch(@Param('id') movieId:string){
        return `This will update a movie withe the id: ${movieId}`;
    }

    
}
