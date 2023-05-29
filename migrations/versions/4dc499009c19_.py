"""empty message

Revision ID: 4dc499009c19
Revises: 11a8b2ea768b
Create Date: 2023-05-18 17:49:02.870701

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '4dc499009c19'
down_revision = '11a8b2ea768b'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('bike_part', schema=None) as batch_op:
        batch_op.alter_column('description',
               existing_type=sa.VARCHAR(length=150),
               type_=sa.String(length=300),
               existing_nullable=True)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('bike_part', schema=None) as batch_op:
        batch_op.alter_column('description',
               existing_type=sa.String(length=300),
               type_=sa.VARCHAR(length=150),
               existing_nullable=True)

    # ### end Alembic commands ###