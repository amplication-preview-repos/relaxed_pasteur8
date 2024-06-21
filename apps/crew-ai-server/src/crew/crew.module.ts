import { Module } from "@nestjs/common";
import { CrewModuleBase } from "./base/crew.module.base";
import { CrewService } from "./crew.service";
import { CrewController } from "./crew.controller";
import { CrewResolver } from "./crew.resolver";

@Module({
  imports: [CrewModuleBase],
  controllers: [CrewController],
  providers: [CrewService, CrewResolver],
  exports: [CrewService],
})
export class CrewModule {}
