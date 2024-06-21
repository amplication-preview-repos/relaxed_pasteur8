import * as graphql from "@nestjs/graphql";
import { CrewResolverBase } from "./base/crew.resolver.base";
import { Crew } from "./base/Crew";
import { CrewService } from "./crew.service";

@graphql.Resolver(() => Crew)
export class CrewResolver extends CrewResolverBase {
  constructor(protected readonly service: CrewService) {
    super(service);
  }
}
