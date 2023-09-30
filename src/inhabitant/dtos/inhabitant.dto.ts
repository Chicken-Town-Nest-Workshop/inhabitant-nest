import { ApiProperty } from "@nestjs/swagger";

export class InhabitantDto {
    @ApiProperty({ description: '居民的身分證' })
    id: string;

    @ApiProperty({ description: '居民的姓名' })
    name: string;

    @ApiProperty({ description: '居民的年齡' })
    age: string;

    @ApiProperty({ description: '職業的姓名' })
    occupation: string;
}