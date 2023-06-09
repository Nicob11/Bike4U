"""empty message

Revision ID: 11a8b2ea768b
Revises: 560eeafde244
Create Date: 2023-05-18 17:44:33.888308

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '11a8b2ea768b'
down_revision = '560eeafde244'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('bike_part', schema=None) as batch_op:
        batch_op.alter_column('description',
               existing_type=sa.VARCHAR(length=120),
               type_=sa.String(length=150),
               existing_nullable=True)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('bike_part', schema=None) as batch_op:
        batch_op.alter_column('description',
               existing_type=sa.String(length=150),
               type_=sa.VARCHAR(length=120),
               existing_nullable=True)

    # ### end Alembic commands ###
