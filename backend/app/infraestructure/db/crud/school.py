from sqlalchemy.exc import NoResultFound

from app.infraestructure.db.utils.session import SessionLocal
from app.infraestructure.db.crud.base import CRUDBase
from app.infraestructure.db.models import School
from app.schemas.school import SchoolInDB, SchoolCreate
from app.core.exceptions import ORMError

class SchoolCrud(CRUDBase[School, SchoolInDB, SchoolCreate]):
    def get_by_name(self, *, name: str) -> School:
        with SessionLocal() as db:
            try:
                return db.query(School).filter(School.name == name).first()
            except NoResultFound as e:
                raise ORMError(str(e))