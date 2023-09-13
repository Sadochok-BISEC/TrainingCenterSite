from django.urls import path
from  . import views

urlpatterns = [
    path('', views.mainPage, name='home'),
    path('about_us', views.aboutUs, name='about'),
    path('our_trainers', views.ourTrainers, name='trainers'),
 #   path('students_reviews', views.studentsReviews, name='reviews'),
    path('training_course', views.trainingCourse, name='trainings'),
    #path('log_in', views.logIn, name='login'),
    #path('sign_up', views.signUp, name='sign_up'),
    #path('remind_password', views.remindPassword, name='remind_password'),
]