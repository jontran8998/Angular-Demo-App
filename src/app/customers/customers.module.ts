import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CustomersComponent } from './customers.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { FilterTextboxComponent } from './filter-textbox/filter-textbox.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { CustomersRoutingModule } from './customers-routing.module';

@NgModule({
    declarations: [CustomersComponent, CustomersListComponent, FilterTextboxComponent],
    imports: [CommonModule, SharedModule, FormsModule, CustomersRoutingModule],
    exports: [CustomersComponent],
})

export class CustomersModule {}
