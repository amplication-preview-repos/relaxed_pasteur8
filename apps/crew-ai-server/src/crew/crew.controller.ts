import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CrewService } from "./crew.service";
import { CrewControllerBase } from "./base/crew.controller.base";

@swagger.ApiTags("crews")
@common.Controller("crews")
export class CrewController extends CrewControllerBase {
  constructor(protected readonly service: CrewService) {
    super(service);
  }
}
