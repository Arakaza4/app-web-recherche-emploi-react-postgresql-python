
pip install django.
pip install django-environ
pip install rest_framework
pip install djangorestframework
pip install psycopg2-binary
install postgres
create user/password (example arakaza/arakaza).
create database (exemple : djangoproject) 

---

Django - REST Framework

Accéder à un tableau

http://127.0.0.1:8000/admin
http://127.0.0.1:8000/company
http://127.0.0.1:8000/offer
http://127.0.0.1:8000/worker
http://127.0.0.1:8000/jobrequest

Accéder à des éléments

http://127.0.0.1:8000/company/1
http://127.0.0.1:8000/company/1

python3 manage.py makemigrations
python3 manage.py migrate

python3 manage.py runserver


Dans djangoproject

Entrer dans les commandes PostgreSQL : psql -U lucas -d djangoproject
                                       psql -U 'user' -d 'databaseName'


--> Afficher une table :

SELECT * FROM 'table_name';
SELECT * FROM api_company;

--> Ajouter un élément à une table :

INSERT INTO 'table_name' (colonne1, colonne2, ... ,colonneX) VALUES (valeur_colonne1, ... ,valeur_colonneX)

--> Supprimer une ligne d'une table :

DELETE FROM 'table_name' WHERE condition;
DELETE FROM ma_table WHERE id = 5;


Quitter --> \q