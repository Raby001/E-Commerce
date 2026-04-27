import { Module } from "@nestjs/common";
import { CateogryResolver } from "./resolvers/category.resolver";
import { ProductResolver } from "./resolvers/product.resolver";
import { CategoryModule } from "../category/category.module";
import { ProductModule } from "../product/product.module";

@Module({
    imports: [CategoryModule, ProductModule],
    controllers: [],
    providers: [CateogryResolver, ProductResolver]
})
export class GraphqlModule{}