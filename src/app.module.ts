import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';


//데코레이터 = > 클래스에 함수기능을 추가할수 있음
@Module({
  imports: [],
  controllers: [MoviesController],
  providers: [],
})
export class AppModule {}
