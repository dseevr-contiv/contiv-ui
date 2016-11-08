/**
 * Created by vjain3 on 10/17/16.
 */
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ErrorMessageComponent } from "./errormessagedirective";
import {CtvTableComponent, CtvThComponent, CtvSearchComponent, CtvTpaginationComponent} from "./tabledirective";
import {FormsModule} from "@angular/forms";
import {CtvAccordionComponent} from "./accordiondirective";
import {CtvCollapsibleComponent} from "./collapsibledirective";
import {CtvNamevalueComponent} from "./namevaluedirective";
import {AuthDirective} from "./authdirective";
@NgModule({
    imports: [
        CommonModule, FormsModule
    ],
    declarations: [
        ErrorMessageComponent,
        CtvTableComponent,
        CtvThComponent,
        CtvSearchComponent,
        CtvTpaginationComponent,
        CtvAccordionComponent,
        CtvCollapsibleComponent,
        CtvNamevalueComponent,
        AuthDirective
    ],
    exports: [
        ErrorMessageComponent,
        CtvTableComponent,
        CtvThComponent,
        CtvSearchComponent,
        CtvTpaginationComponent,
        CtvAccordionComponent,
        CtvCollapsibleComponent,
        CtvNamevalueComponent,
        AuthDirective
    ]
})
export class DirectivesModule {}