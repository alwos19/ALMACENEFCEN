from sqlalchemy import Column, DateTime
from sqlalchemy.sql import func

from app.infraestructure.db.utils.model import BaseModel

class Shedule(BaseModel):
 start_date = Column(DateTime(timezone=True), nullable= True, default=func.now())
 end_date = Column(DateTime(timezone=True), nullable= True, default=func.now())