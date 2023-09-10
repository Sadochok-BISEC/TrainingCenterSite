from django.urls import path
from  . import views

urlpatterns = [
    path('', views.mainPage, name='home'),
    path('about', views.aboutUs, name='about'),
    path('our_trainers', views.ourTrainers, name='trainers'),
]