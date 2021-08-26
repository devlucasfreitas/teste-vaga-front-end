import { NgModule } from "@angular/core";
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
    imports: [
        MatButtonModule,
        MatCardModule,
        MatMenuModule,
        MatToolbarModule,
        MatGridListModule,
        MatTableModule,
        MatPaginatorModule,
        MatInputModule,
        MatChipsModule
    ],
    exports: [
        MatButtonModule,
        MatCardModule,
        MatMenuModule,
        MatToolbarModule,
        MatGridListModule,
        MatTableModule,
        MatPaginatorModule,
        MatInputModule,
        MatChipsModule
    ]
})
export class MaterialModule {}