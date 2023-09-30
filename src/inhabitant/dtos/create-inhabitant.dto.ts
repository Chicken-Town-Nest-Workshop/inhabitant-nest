import { ApiProperty } from "@nestjs/swagger";

export class updateInhabitantDto {
    @ApiProperty({ description: '居民的身分證' })
    id: string;

    @ApiProperty({ description: '居民的姓名' })
    name: string;
}