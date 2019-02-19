import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatInputModule, MatSortModule, MatPaginatorModule, MatTableModule, MatButtonModule, MatFormFieldModule, MatIconModule, MatMenuModule, MatSelectModule, MatTabsModule, MatProgressSpinnerModule } from '@angular/material';
import { AppSharedModule } from '@core/shared.module';
import { RoleListComponent } from './role-list.component';
import { AuthorizationModule } from '@core/authorization/authorization.module';
const routes: Routes = [
    {
        path: '**',
        component: RoleListComponent,
        resolve: {
        }
    }
];

@NgModule({
    declarations: [
        RoleListComponent
    ],
    imports: [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatMenuModule,
        MatSelectModule,
        MatTabsModule,
        AppSharedModule,
        MatProgressSpinnerModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatInputModule,
        AuthorizationModule
    ],
    providers: [
    ]
})
export class RoleListModule {
}



