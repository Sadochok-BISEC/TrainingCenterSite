from django.shortcuts import render

# Create your views here.

def index(request):
    return render(request, 'mainpage/MainPage.html')

def aboutUs(request):
    return render(request, 'mainpage/About.html')