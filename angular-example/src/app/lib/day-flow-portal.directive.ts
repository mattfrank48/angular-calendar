import {
  ElementRef,
  OnChanges,
  SimpleChanges,
  OnDestroy,
  Directive,
  inject,
  input,
} from "@angular/core"

@Directive ( {
  selector: "[appDayflowPortal]",
} )
export class DayFlowPortalDirective implements OnChanges, OnDestroy {
  public targetEl = input<HTMLElement> ( )

  private el: ElementRef = inject ( ElementRef )

  public ngOnChanges ( changes: SimpleChanges ) {
    if ( changes [ "targetEl" ] && this.targetEl ( ) ) {
      this.targetEl ( )!.append ( this.el.nativeElement )
    }
  }

  public ngOnDestroy ( ) {
    if ( this.el.nativeElement.parentNode === this.targetEl ( ) ) {
      this.el.nativeElement.remove ( )
    }
  }
}