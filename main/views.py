from django.shortcuts import render

# Create your views here.
def landing_page(request):
    return render(request, 'landing_page.html')

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

def triangle(request):
    return render(request, 'triangle.html')

def triangle2(request):
    return render(request, 'triangle2.html')

def palindromic(request):
    return render(request, 'palindromic.html')

def googol(request):
    return render(request, 'googol.html')