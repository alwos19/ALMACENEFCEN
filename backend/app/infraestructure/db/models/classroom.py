from sqlalchemy import Column, String, Integer, Boolean

from app.infraestructure.db.utils.model import BaseModel

class ClassRoom(BaseModel):
    name = Column(String(100), nullable=True)
    description= Column(String(100), nullable=True)