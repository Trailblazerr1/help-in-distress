from .api import getdata
from django.http import JsonResponse

# Create your views here.

def index(request):
    data = getdata()
    directions = getdir(data[1])
    return JsonResponse(data[0], safe=False)

#def index2(request):
