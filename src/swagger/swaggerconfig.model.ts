import { DocumentBuilder } from '@nestjs/swagger';

const SwaggerConfig =  new DocumentBuilder()
    .setTitle('Idea System')
    .setDescription('The Idea System API description')
    .setVersion('1.0')
    .addTag('Idea')
    .build();


export { SwaggerConfig };    