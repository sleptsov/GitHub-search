import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular'
import { SearchResultsComponent } from './search-results/search-results.component';
import { RepositoriesComponent } from './repositories/repositories.component';


@NgModule({
    imports: [
        IonicModule
    ],
    exports: [
        SearchResultsComponent,
        RepositoriesComponent
    ],
    declarations: [
        SearchResultsComponent,
        RepositoriesComponent
    ],
    providers: [

    ],
})
export class ComponentsModule { }
