# convert python object data to json format

from rest_framework.serializers import ModelSerializer
from .models import Note

class NoteSerializer(ModelSerializer):
    class Meta:
        model = Note
        # serialize ever field in the model
        fields = "__all__"