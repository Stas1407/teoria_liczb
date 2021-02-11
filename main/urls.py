from django.urls import path
import main.views as views

urlpatterns = [
    path('', views.landing_page, name="landing_page"),
    path('introduction', views.introduction, name="introduction"),
    path('perfect', views.perfect, name="perfect"),
    path('second_perfect', views.second_perfect, name="second_perfect"),
    path('square', views.square, name="square"),
    path('square2', views.square2, name="square2")
]