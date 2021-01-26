import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SidebarModule } from 'ng-sidebar';
import { DisqusModule } from 'ngx-disqus';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { SearchComponent } from './components/search/search.component';
import { ImageHeaderComponent } from './components/image-header/image-header.component';
import { DeliveryComponent } from './components/delivery/delivery.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategorieCardComponent } from './components/categorie-card/categorie-card.component';
import { CategoriesPageComponent } from './pages/categories-page/categories-page.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { LoadingComponent } from './shared/loading/loading.component';
import { DisqusComponent } from './components/disqus/disqus.component';
import { ComodinComponent } from './components/comodin/comodin.component';
import { LatestProductsComponent } from './components/latest-products/latest-products.component';
import { SimilarProductsComponent } from './components/similar-products/similar-products.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    TopbarComponent,
    HomePageComponent,
    NotFoundComponent,
    ProductsComponent,
    ProductComponent,
    SearchComponent,
    ProductCardComponent,
    ImageHeaderComponent,
    DeliveryComponent,
    CategoriesComponent,
    CategorieCardComponent,
    CategoriesPageComponent,
    LoadingComponent,
    DisqusComponent,
    ComodinComponent,
    LatestProductsComponent,
    SimilarProductsComponent,
    BreadcrumbComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CarouselModule,
    BrowserAnimationsModule,
    SidebarModule.forRoot(),
    DisqusModule.forRoot('totemdecristal'),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
