/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EventCreateNestedManyWithoutCategoriesInput } from "./EventCreateNestedManyWithoutCategoriesInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class CategoryCreateInput {
  @ApiProperty({
    required: false,
    type: () => EventCreateNestedManyWithoutCategoriesInput,
  })
  @ValidateNested()
  @Type(() => EventCreateNestedManyWithoutCategoriesInput)
  @IsOptional()
  @Field(() => EventCreateNestedManyWithoutCategoriesInput, {
    nullable: true,
  })
  events?: EventCreateNestedManyWithoutCategoriesInput;
}

export { CategoryCreateInput as CategoryCreateInput };
