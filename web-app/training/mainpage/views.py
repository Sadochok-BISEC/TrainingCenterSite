from django.shortcuts import render

# Create your views here.

def index(request):
    return render(request, 'mainpage/TestPage.html')

def mainPage(request):
    return render(request, 'mainpage/MainPage.html')

def aboutUs(request):
    return render(request, 'mainpage/AboutUs.html')

def ourTrainers(request):
    return render(request, 'mainpage/OurTrainers.html')

def trainingCourse(request):
    return render(request, 'mainpage/TrainingCourse.html')

# Sign up and log in
def logIn(request):
    return render(request, 'mainpage/LogIn.html')

def signUp(request):
    return render(request, 'mainpage/SignUp.html')

def remindPassword(request):
    return render(request, 'mainpage/RemindPassword.html')


