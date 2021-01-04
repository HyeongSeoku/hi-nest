import { Controller, Delete, Get, Param, Post, Patch, Body, Query, NotFoundException, Req, Res } from '@nestjs/common';
import { CreateMovieDto} from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')   // ('movies') : Entry Point를 컨트롤함
export class MoviesController {

    constructor(private readonly moviesService: MoviesService){}

    @Get()
    getAll():Movie[]{
        return this.moviesService.getAll();
    }

    //('/:id')와 @Param('id')는 동일해야함 
    //movieId:string 은 위와 동일하지 않아도됨
    @Get('/:id')
    getOne(@Param('id') movieId:number) :Movie{
        return this.moviesService.getOne(movieId);
    }

    @Post()
    create(@Body() movieData: CreateMovieDto){
        return this.moviesService.create(movieData);
    }

    @Delete("/:id")
    remove(@Param('id') movieId:number){
        return this.moviesService.deleteOne(movieId);
    }

    //patch = 일부분만 업데이트 할때 , Put 전체 업데이트
    @Patch('/:id')
    patch(@Param('id') movieId:number, @Body() updateData:UpdateMovieDto){
        return this.moviesService.update(movieId,updateData);
    }
    
}
