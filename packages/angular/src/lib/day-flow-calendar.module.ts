import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"

import { DayFlowCalendarComponent } from "./day-flow-calendar.component"
import { DayFlowPortalDirective } from "./day-flow-portal.directive"

@NgModule ( {
  imports: [ CommonModule ],
  declarations: [ DayFlowCalendarComponent, DayFlowPortalDirective ],
  exports: [ DayFlowCalendarComponent, DayFlowPortalDirective ]
} )
export class DayFlowCalendarModule {}
