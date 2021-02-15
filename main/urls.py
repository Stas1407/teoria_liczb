from django.urls import path
import main.views as views

urlpatterns = [
    path('', views.landing_page, name="landing_page"),
    path('introduction', views.introduction, name="introduction"),
    path('perfect', views.perfect, name="perfect"),
    path('second_perfect', views.second_perfect, name="second_perfect"),
    path('square', views.square, name="square"),
    path('square2', views.square2, name="square2"),
    path('triangle', views.triangle, name="triangle"),
    path('triangle2', views.triangle2, name="triangle2"),
    path('palindromic', views.palindromic, name="palindromic"),
    path('googol', views.googol, name="googol"),
]