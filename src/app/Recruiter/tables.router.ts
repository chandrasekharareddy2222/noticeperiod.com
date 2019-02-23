import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FixedTableComponent } from './fixed-table/fixed-table.component';
import { FeatureTableComponent } from './feature-table/feature-table.component';
import { ResponsiveTableComponent } from './responsive-table/responsive-table.component';
import { PostComponent } from './post/post.component';
import { PostingsComponent } from './postings/postings.component';
import { ChatComponent } from './chat/chat.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const materialWidgetRoutes: Routes = [
  	{ path: 'fixed', component: FixedTableComponent , data: { animation: 'fixed' }},
  	{ path: 'featured', component: FeatureTableComponent ,data: { animation: 'featured' }},
    { path: 'responsive', component: ResponsiveTableComponent ,data: { animation: 'responsive' }},
    { path: 'post', component: PostComponent ,data: { animation: 'post-job' }},
    { path: 'postings', component: PostingsComponent ,data: { animation: 'postings' }},
    { path: 'chat', component: ChatComponent ,data: { animation: 'chat' }},
    { path: 'dashboard', component: DashboardComponent ,data: { animation: 'dashboard' }}
];

@NgModule({
  imports: [
    RouterModule.forChild(materialWidgetRoutes)
  	],
  exports: [
    RouterModule
  ]
})
export class TablesRouterModule {}