from django.shortcuts import render, redirect
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from .forms import UserRegisterForm

def signUp(request):
    if request.method == 'POST':
        form = UserRegisterForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            messages.success(request,f'Ваш аккаунт успешно создан, добро пожаловать')
            return redirect('login')
        else:
            form = UserRegisterForm()
            return render(request, 'userspage/SignUp.html', {'form': form})
    else:
        form = UserRegisterForm()
        return render(request, 'userspage/SignUp.html', {'form': form})


@login_required
def profile(request):
    return render(request, 'userspage/Profile.html')