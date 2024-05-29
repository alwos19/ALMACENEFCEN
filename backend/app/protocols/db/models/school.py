from app.protocols.db.utils.model import BaseModel

class School(BaseModel):
    name: str
    description: str | None
    coord_email: str
    school_id: int
    cost_center: int | None
    director: str | None
   
   