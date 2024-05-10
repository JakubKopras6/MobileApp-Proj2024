import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
 
  
 
  {
    path: 'movies',
    loadChildren: () => import('./movies/movies.module').then( m => m.MoviesPageModule)
  },
  {
    path: 'status',
    loadChildren: () => import('./status/status.module').then( m => m.StatusPageModule)
  },
  {
    path: 'gps',
    loadChildren: () => import('./gps/gps.module').then( m => m.GPSPageModule)
  },
  {
    path: 'browser',
    loadChildren: () => import('./browser/browser.module').then( m => m.BrowserPageModule)
  },
  {
    path: 'bladerunnerinfo',
    loadChildren: () => import('./bladerunnerinfo/bladerunnerinfo.module').then( m => m.bladerunnerinfoPageModule)
  },

  {
    path: 'bladerunner',
    loadChildren: () => import('./bladerunner/bladerunner.module').then( m => m.bladerunnerPageModule)
  },
  {
    path: 'excaliburinfo',
    loadChildren: () => import('./excaliburinfo/excaliburinfo.module').then( m => m.excaliburinfoPageModule)
  },


  {
    path: 'excalibur',
    loadChildren: () => import('./excalibur/excalibur.module').then( m => m.excaliburPageModule)
  },
    
  {
  path: 'butchinfo',
    loadChildren: () => import('./butchinfo/butchinfo.module').then( m => m.butchinfoPageModule)
  },

  {
    path: 'butch',
    loadChildren: () => import('./butch/butch.module').then( m => m.butchPageModule)
  },
  
  {
    path: 'brazilinfo',
    loadChildren: () => import('./brazilinfo/brazilinfo.module').then( m => m.brazilinfoPageModule)
  },
  {
    path: 'summaryapp',
    loadChildren: () => import('./summaryapp/summaryapp.module').then( m => m.SummaryappPageModule)
  },

  {
    path: 'brazil',
    loadChildren: () => import('./brazil/brazil.module').then( m => m.brazilPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
