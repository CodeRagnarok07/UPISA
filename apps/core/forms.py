from django import forms

class ContactForm(forms.Form):
    nombre_y_apellido = forms.CharField(required=True)
    email = forms.EmailField(required=True)
    telefono_celular  = forms.CharField(required=True)
    mensaje = forms.CharField(widget=forms.Textarea, required=True)

