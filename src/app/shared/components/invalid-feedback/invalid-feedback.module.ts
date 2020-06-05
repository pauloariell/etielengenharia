import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvalidFeedbackComponent } from './invalid-feedback.component';

@NgModule({
    declarations:[ InvalidFeedbackComponent],
    imports: [ CommonModule ],
    exports: [ InvalidFeedbackComponent ]
})
export class InvalidFeedbackModule {}