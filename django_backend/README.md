
# Gamepedia API Backend

This is a Django REST API backend for the Gamepedia React frontend application.

## Setup Instructions

1. Create a virtual environment:
   ```
   python -m venv venv
   ```

2. Activate the virtual environment:
   - Windows: `venv\Scripts\activate`
   - macOS/Linux: `source venv/bin/activate`

3. Install dependencies:
   ```
   pip install -r requirements.txt
   ```

4. Run migrations:
   ```
   python manage.py migrate
   ```

5. Create a superuser (for admin access):
   ```
   python manage.py createsuperuser
   ```

6. Start the development server:
   ```
   python manage.py runserver
   ```

The API will be available at http://localhost:8000/api/

## API Endpoints

- Games: `/api/games/`
- News: `/api/news/`
- Designers: `/api/designers/`
- Franchises: `/api/franchises/`
- Characters: `/api/characters/`
- Consoles: `/api/consoles/`

## Admin Interface

Access the admin interface at http://localhost:8000/admin/ using your superuser credentials.
