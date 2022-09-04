# tailwind + scss 

npm init -y


# i18n

https://docs.djangoproject.com/en/4.1/topics/i18n/
https://docs.djangoproject.com/en/4.1/topics/i18n/translation/

django-admin makemessages -all
django-admin makemessages --locale=zh 
django-admin makemessages --locale=zh-hans

mkdir locale && mkdir locale/en && mkdir locale/ru && mkdir locale/zh_HANS


django-admin compilemessages


ruta del traductor

http://localhost:8000/rosetta/files/third-party/


## traduccion de modelos
https://django-modeltranslation.readthedocs.io/en/latest/


https://alfaexploit.com/es/posts/django_traducciones/