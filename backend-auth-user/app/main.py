from fastapi import FastAPI

def create_app() -> FastAPI:
    """Create the application."""
    app = FastAPI()
    app.include_router(auth_router)
    app.include_router(user_router)
    return app