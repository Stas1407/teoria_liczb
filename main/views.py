from django.shortcuts import render

# Create your views here.
def landing_page(request):
    return render(request, 'index.html')

def introduction(request):
    return render(request, 'introduction.html')

def perfect(request):
    return render(request, 'perfect.html')

def second_perfect(request):
    return render(request, 'second_perfect.html')

def square(request):
    return render(request, 'square.html')

def square2(request):
    return render(request, 'square2.html')