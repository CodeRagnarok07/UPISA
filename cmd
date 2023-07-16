source /home/upisacompy/virtualenv/Django_page/3.8/bin/activate && cd /home/upisacompy/Django_page

python -Xutf8 manage.py dumpdata --exclude=auth --exclude=admin --exclude=sessions  --exclude=contenttypes -o ./db.json
python -Xutf8 manage.py loaddata ./db.json



