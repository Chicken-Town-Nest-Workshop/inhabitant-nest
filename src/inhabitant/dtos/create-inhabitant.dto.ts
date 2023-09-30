import { ApiProperty } from "@nestjs/swagger";

export class CreateInhabitantDto {
    @ApiProperty({ description: '居民的姓名' })
    name: string;
}