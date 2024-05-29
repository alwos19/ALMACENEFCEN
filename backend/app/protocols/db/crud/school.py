from app.protocols.db.crud.base import CRUDProtocol
from app.protocols.db.models.school import School
from app.schemas.school import SchoolInDB, SchoolCreate

class CRUDSchoolProtocol(CRUDProtocol[School, SchoolInDB, SchoolCreate]):
    def get_by_name(self, *, name: str) -> School:
        ...