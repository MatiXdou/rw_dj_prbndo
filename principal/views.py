from django.shortcuts import render

# Create your views here.

def inicio(request):
    return render(request, 'index.html')

def quienesSomos(request):
    return render(request, 'quienes_somos.html')

def galeria(request):
    return render(request, 'galeria.html')