from django.shortcuts import render
from .models import Post

def studentsReviews(request):
    context = {
        'posts': Post.objects.all()
    }
    return render(request, 'reviewpage/StudentsReviews.html', context)