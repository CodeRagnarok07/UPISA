from django.shortcuts import render

# Create your views here.

def parrilleros(request):
    return render(request, 'core/index.html')