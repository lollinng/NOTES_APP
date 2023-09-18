from api.serializers import NoteSerializer
from rest_framework.response import Response
from .models import Note


def getNotesList(request):
    notes = Note.objects.all().order_by('-updated')
    # convert python data objects to json , 
    # many asks  whether we should serialize multiple object or single object 
    serializer = NoteSerializer(notes,many=True)
    return Response(serializer.data)

def getNoteDetail(request,pk):
    notes = Note.objects.get(id=pk) 
    serializer = NoteSerializer(notes,many=False)
    return Response(serializer.data)

def createNote(request):
    data = request.data
    note = Note.objects.create(
        body = data['body']
    )
    serializer = NoteSerializer(note,many=False)
    return Response(serializer.data)

def updateNote(request,pk):
    data = request.data
    note = Note.objects.get(id=pk)
    serializer = NoteSerializer(instance=note,data=data)

    # checking if serializer is valid like the form.is_valid in django forms
    if serializer.is_valid():
        serializer.save()
    
    return Response(serializer.data)

def deleteNote(request,pk):
    note = Note.objects.get(id=pk)
    note.delete()
    return Response("Note was deleted!")